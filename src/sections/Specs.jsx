export default function Specs({ product }) {
  if (!product.specs?.length) return null;
  return (
    <section id="specs" className="wrap section">
      <div className="specs-grid">
        <div className="specs-side">
          <h2 className="d h-xl">
            The
            <br />
            specs<span className="accent">.</span>
          </h2>
          {product.bestFor?.length > 0 && (
            <div className="bestfor">
              <span className="eyebrow">Best for</span>
              {product.bestFor.map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>
          )}
        </div>
        <dl className="spec-table">
          {product.specs.map((s) => (
            <div key={s.label} className="specrow">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
