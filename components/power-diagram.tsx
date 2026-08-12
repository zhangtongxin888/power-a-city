export function PowerDiagram() {
  return (
    <div className="power-diagram" aria-label="Three confirmed Power Your City actions followed by a guide strategy">
      <div><span>01</span><b>GENERATE</b><small>Produce Power</small></div><i aria-hidden="true">→</i>
      <div><span>02</span><b>STORE</b><small>Use batteries</small></div><i aria-hidden="true">→</i>
      <div><span>03</span><b>SELL</b><small>Earn Cash</small></div><i aria-hidden="true">→</i>
      <div><span>04</span><b>ADAPT</b><small>Guide strategy</small></div>
    </div>
  );
}
