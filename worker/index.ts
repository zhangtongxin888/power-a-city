import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const PRODUCTION_HOST = "power-a-city.wiki";
const WWW_PRODUCTION_HOST = "www.power-a-city.wiki";
const staticSeoTypes: Record<string, string> = {
  "/robots.txt": "text/plain; charset=utf-8",
  "/sitemap.xml": "application/xml; charset=utf-8",
  "/manifest.webmanifest": "application/manifest+json; charset=utf-8",
};

function withHeaders(response: Response, request: Request, contentType?: string) {
  const headers = new Headers(response.headers);
  headers.set("Content-Security-Policy", "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "SAMEORIGIN");
  if (new URL(request.url).protocol === "https:") headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  if (contentType) headers.set("Content-Type", contentType);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    if (url.hostname === WWW_PRODUCTION_HOST) {
      const canonicalUrl = new URL(url);
      canonicalUrl.protocol = "https:";
      canonicalUrl.hostname = PRODUCTION_HOST;
      canonicalUrl.port = "";
      return withHeaders(Response.redirect(canonicalUrl, 308), request);
    }
    if (staticSeoTypes[url.pathname]) {
      const response = await env.ASSETS.fetch(request);
      return withHeaders(response, request, staticSeoTypes[url.pathname]);
    }
    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      const response = await handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
      return withHeaders(response, request);
    }
    return withHeaders(await handler.fetch(request, env, ctx), request);
  },
};

export default worker;
