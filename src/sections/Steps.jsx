import { site } from '../config/site.js';

export default function Steps() {
  const { title, items } = site.steps;
  const [a, b] = title.split('. ');
  return (
    <section className="wrap section">
      <h2 className="d h-xl steps-title">
        {a}
        <span className="accent">.</span> {b?.replace(/\.$/, '')}
        <span className="accent">.</span>
      </h2>
      <div className="steps">
        {items.map((s, i) => (
          <div key={s.title} className="step">
            <span className="d accent step-n">{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
