import { Link } from 'react-router-dom';
import { site } from '../config/site.js';
import { getProduct, products } from '../config/products.js';
import ProductImage from '../components/ProductImage.jsx';
import BuyButton from '../components/BuyButton.jsx';

export default function About() {
  const { about } = site;
  const product = getProduct(site.featuredSlug) || products[0];
  return (
    <>
      <section className="wrap" style={{ paddingTop: 4 }}>
        <div className="about-hero">
          <img src="/boldkin-mark-dark.svg" alt="" />
          <div>
            <div className="eyebrow accent">About {site.name}</div>
            <h1 className="d about-title">
              {about.headline[0]}
              <br />
              {about.headline[1]}
              <span className="accent">.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="story">
          <h2 className="d h-md">
            Our story<span className="accent">.</span>
          </h2>
          <div className="story-text">
            {about.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {product && <p>Our first product is the {product.name}.</p>}
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="tiles">
          {about.values.map((v, i) => (
            <article key={v.title} className={`tile ${['tone-light', 'tone-dark', 'tone-accent'][i % 3]}`}>
              <span className="d tile-n">{String(i + 1).padStart(2, '0')}</span>
              <div className="tile-body">
                <h3 className="d tile-title">{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {product && (
        <section className="wrap section last">
          <div className="feature-card">
            <div className="feature-art">
              <div className="feature-pack">
                <ProductImage product={product} />
              </div>
            </div>
            <div className="feature-text">
              <div className="eyebrow muted">Our first product</div>
              <h2 className="d h-md">{product.name}</h2>
              <p className="lede">{product.short}</p>
              <div className="feature-actions">
                <Link className="btn dark" to={`/product/${product.slug}`}>
                  See the product
                </Link>
                <BuyButton product={product} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
