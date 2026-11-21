import { Link } from 'react-router-dom';
import { site } from '../config/site.js';
import { products } from '../config/products.js';
import ProductImage from '../components/ProductImage.jsx';
import BuyButton from '../components/BuyButton.jsx';

export default function Shop() {
  return (
    <section className="wrap page-top">
      <div className="section-head">
        <h1 className="d h-page">
          Shop<span className="accent">.</span>
        </h1>
        <p className="lede">Every {site.name} product is sold on Amazon. Pick one to see the details, then order in a tap.</p>
      </div>
      <div className="shop-grid">
        {products.map((p) => (
          <article key={p.slug} className="card">
            <Link to={`/product/${p.slug}`} className="card-img" aria-label={`View ${p.name}`}>
              <div className="card-art">
                <ProductImage product={p} view={0} />
              </div>
            </Link>
            <div className="card-body">
              <div className="card-text">
                <h2 className="d">{p.name}</h2>
                <p>{p.short}</p>
              </div>
              <div className="card-foot">
                <span className="d card-price">{p.price}</span>
                <div className="card-actions">
                  <Link className="btn sm dark" to={`/product/${p.slug}`}>
                    View
                  </Link>
                  <BuyButton product={p} className="sm" iconSize={16} />
                </div>
              </div>
            </div>
          </article>
        ))}
        {site.comingSoon && (
          <div className="soon">
            <img src="/boldkin-mark-dark.svg" alt="" />
            <div>
              <h2 className="d">
                More
                <br />
                coming<span className="accent">.</span>
              </h2>
              <p>{site.comingSoon}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
