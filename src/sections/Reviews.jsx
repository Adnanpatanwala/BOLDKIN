import { Stars } from '../Icons.jsx';
import BuyButton from '../components/BuyButton.jsx';

export default function Reviews({ product }) {
  if (!product.reviews?.length) return null;
  return (
    <section id="reviews" className="reviews">
      <div className="wrap reviews-inner">
        <div className="reviews-summary">
          <div className="eyebrow accent">Reviews from Amazon</div>
          <div className="d score">{product.rating}</div>
          <Stars rating={product.rating} size={22} color="#fff" />
          <p>Based on {product.ratingCount} ratings</p>
          <BuyButton product={product}>Read all reviews</BuyButton>
        </div>
        <div className="review-cards">
          {product.reviews.map((r, i) => (
            <figure key={i} className="review">
              <blockquote>{r.text}</blockquote>
              <figcaption>
                <strong>{r.name}</strong>
                <span><sup>*</sup>{r.point}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
