export default function Modes({ product }) {
  const m = product.modes;
  if (!m?.items?.length) return null;
  return (
    <section id="modes" className="modes">
      <div className="wrap modes-inner">
        <div className="section-head">
          <h2 className="d h-xl">
            {m.title[0]}
            <br />
            {m.title[1].replace(/\.$/, '')}
            <span className="accent">.</span>
          </h2>
          <p className="lede on-dark">{m.intro}</p>
        </div>
        <div className="mode-grid">
          {m.items.map((it) => (
            <article key={it.name} className={`mode mode-${it.kind}`}>
              <div className={`swatch swatch-${it.kind}`} aria-hidden="true">
                {it.kind === 'strobe' && <i />}
              </div>
              <div className="mode-body">
                <h3 className="d">{it.name}</h3>
                {it.tag && <span className="mode-tag">{it.tag}</span>}
                <p>{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
