export default function InBox({ product }) {
  if (!product.box?.length) return null;
  return (
    <section className="wrap section">
      <h2 className="d h-xl steps-title">
        In the box<span className="accent">.</span>
      </h2>
      <div className="box-grid">
        {product.box.map((item, i) => (
          <div key={item} className="box-item">
            <span className="d accent">{i + 1}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
