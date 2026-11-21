export default function Why({ product }) {
  const h = product.highlights;
  if (!h) return null;
  return (
    <section id="why" className="wrap section">
      <div className="section-head">
        <h2 className="d h-xl">
          {h.title.replace(/\.$/, '')}
          <span className="accent">.</span>
        </h2>
        <p className="lede">{h.intro}</p>
      </div>
      <div className="tiles">
        {h.items.map((b, i) => (
          <article key={b.title} className={`tile tone-${b.tone || 'light'} ${b.wide ? 'wide' : ''}`}>
            <span className="d tile-n">{String(i + 1).padStart(2, '0')}</span>
            <div className="tile-body">
              <h3 className="d tile-title">{b.title}</h3>
              <p>{b.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
