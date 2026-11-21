import BuyButton from '../components/BuyButton.jsx';

export default function FinalCta({ product }) {
  return (
    <section className="wrap section last">
      <div className="final">
        <h2 className="d final-title">
          Go
          <br />
          bold.
        </h2>
        <div className="final-side">
          <p>Your {product.name} is waiting on Amazon.</p>
          <BuyButton product={product} className="dark xl" iconSize={22} />
        </div>
      </div>
    </section>
  );
}
