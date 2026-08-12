import type { ImgHTMLAttributes } from "react";

/* eslint-disable @next/next/no-img-element */

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height" | "alt"> & {
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
};

export function StaticImage({ priority, loading, decoding, alt, ...props }: Props) {
  return <img {...props} alt={alt} loading={priority ? "eager" : loading ?? "lazy"} fetchPriority={priority ? "high" : undefined} decoding={decoding ?? "async"} />;
}
