import ProductImage from '../components/ProductImage.jsx';
import BuyButton from '../components/BuyButton.jsx';
import { Stars } from '../Icons.jsx';

export default function Hero({ product }) {
  return (
    <section id="top" className="wrap hero-wrap">
      <div className="hero">
        <div className="hero-copy">
          <div className="eyebrow accent">{product.name} · Now on Amazon</div>
          <h1 className="d hero-title">
            <span>Make it</span>
            <span>
              Bold<span className="accent">.</span>
            </span>
          </h1>
          <p className="hero-sub">
            {product.tagline} {product.heroText}
          </p>
          <div className="hero-actions">
            <BuyButton product={product} />
            <div className="price-block">
              <span>Price on Amazon</span>
              <strong className="d">{product.price}</strong>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-stage">
            <div className="hero-disc" />
            <div className="hero-pack">
              <ProductImage product={product} view={4} shadow="rgba(0,0,0,.35)" />
            </div>
            {/* <div className="rating-chip">
           <Stars rating={product.rating} size={22} color="#0A0A0A" />
              <span>
                {product.rating} - {product.ratingCount} ratings on Amazon
              </span> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
