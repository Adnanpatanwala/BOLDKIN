import { useState } from 'react';
import { PlusIcon } from '../Icons.jsx';

export default function Faq({ items }) {
  const [open, setOpen] = useState(0);
  if (!items?.length) return null;
  return (
    <section id="faq" className="wrap section">
      <div className="faq-grid">
        <h2 className="d h-xl faq-title">
          Good
          <br />
          questions<span className="accent">.</span>
        </h2>
        <div className="faq-list">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`faq ${isOpen ? 'open' : ''}`}>
                <h3>
                  <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={`faq-a-${i}`}>
                    {f.q}
                    <span className="plus">
                      <PlusIcon />
                    </span>
                  </button>
                </h3>
                <div className="faq-a" id={`faq-a-${i}`}>
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
