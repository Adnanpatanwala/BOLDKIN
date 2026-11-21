import { site } from '../config/site.js';
import { products } from '../config/products.js';
import Faq from '../sections/Faq.jsx';

const tones = ['tone-light', 'tone-dark', 'tone-accent'];

export default function Support() {
  const faqs = [...site.commonFaqs, ...products.flatMap((p) => p.faqs || [])];
  return (
    <>
      <section className="wrap page-top">
        <h1 className="d h-page steps-title">
          Help<span className="accent">.</span>
        </h1>
        <div className="tiles">
          {site.support.cards.map((c, i) => (
            <article key={c.title} className={`tile support-tile ${tones[i % 3]}`}>
              <span className="d tile-n">{String(i + 1).padStart(2, '0')}</span>
              <div className="tile-body">
                <h2 className="d tile-title">{c.title}</h2>
                {c.text && <p>{c.text}</p>}
                {c.list && (
                  <ol>
                    {c.list.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ol>
                )}
                {c.note && <p className="note">{c.note}</p>}
                {c.email && (
                  <a className="mail" href={`mailto:${site.supportEmail}`}>
                    {site.supportEmail}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <Faq items={faqs} />
      <div className="section last" />
    </>
  );
}
