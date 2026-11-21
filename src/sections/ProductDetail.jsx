import { useState } from 'react';
import ProductImage from '../components/ProductImage.jsx';
import BuyButton from '../components/BuyButton.jsx';
import { CheckIcon, Stars } from '../Icons.jsx';

export default function ProductDetail({ product, id = 'product', heading = 'h2' }) {
  const [view, setView] = useState(0);
  const [opt, setOpt] = useState(0);
  const Heading = heading;
  const views = product.views?.length ? product.views : ['Front'];
  const options = product.options || [];
  const selected = options[opt];

  // console.log(product);
  

  return (
    <section id={id} className="wrap section">
      <div className="product-grid">
        <div className="gallery">
          <div className="gallery-stage">
            <div className={`packwrap v${view}`}>
              <ProductImage product={product} view={view} />
            </div>
            <span className="gallery-tag">
              {views[view]}
              {!product.images?.[view] && ' · replace with product photo'}
            </span>
          </div>
          <div className="thumbs" role="group" aria-label="Product views">
            {views.map((name, i) => (
              <button key={name} className={`thumb ${view === i ? 'on' : ''}`} onClick={() => setView(i)} aria-label={`Show ${name} view`} aria-pressed={view === i}>
                <ProductImage product={product} view={i} thumb />
              </button>
            ))}
          </div>
        </div>

        <div className="buybox">
          <div className="buy-head">
            <div className="eyebrow muted">Boldkin</div>
            <Heading className="d h-lg">{product.name}</Heading>
            <div className="rating-row">
             <Stars rating={product.rating} size={22} color="#0A0A0A" />
              <span>
                {product.rating} · {product.ratingCount} ratings on Amazon
              </span>
            </div>
            <p className="lede">{product.description}</p>
          </div>

          {options.length > 0 && (
            <div className="options">
              <span className="label">Choose an option</span>
              <div className="pills" role="group" aria-label="Options">
                {options.map((o, i) => (
                  <button key={o.label} className={`pill ${opt === i ? 'on' : ''}`} onClick={() => setOpt(i)} aria-pressed={opt === i}>
                    {o.label}
                    {o.sub && <small>{o.sub}</small>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.features?.length > 0 && (
            <ul className="features">
              {product.features.map((f) => (
                <li key={f}>
                  <span className="tick">
                    <CheckIcon />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          )}

          <div className="buy-cta">
            <div className="buy-price">
              <span className="d">{selected?.price || product.price}</span>
              <small>{selected ? `${selected.label}${selected.sub ? ' · ' + selected.sub : ''}` : 'Price shown on Amazon'}</small>
            </div>
            <BuyButton product={selected?.amazonUrl ? { ...product, amazonUrl: selected.amazonUrl } : product} className="xl block" iconSize={22} />
            <small className="center muted">You will complete your order securely on Amazon.</small>
          </div>
        </div>
      </div>
    </section>
  );
}
