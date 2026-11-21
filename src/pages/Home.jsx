import { Navigate } from 'react-router-dom';
import { site } from '../config/site.js';
import { getProduct, products } from '../config/products.js';
import Hero from '../sections/Hero.jsx';
import Marquee from '../sections/Marquee.jsx';
import Why from '../sections/Why.jsx';
import ProductDetail from '../sections/ProductDetail.jsx';
import Modes from '../sections/Modes.jsx';
import InBox from '../sections/InBox.jsx';
import Steps from '../sections/Steps.jsx';
import Reviews from '../sections/Reviews.jsx';
import Faq from '../sections/Faq.jsx';
import FinalCta from '../sections/FinalCta.jsx';

export default function Home() {
  const product = getProduct(site.featuredSlug) || products[0];
  if (!product) return <Navigate to="/shop" replace />;
  return (
    <>
      <Hero product={product} />
      <Marquee />
      <Why product={product} />
      <ProductDetail product={product} />
      <div className="section">
        <Modes product={product} />
      </div>
      <InBox product={product} />
      <Steps />
      <div className="section">
        <Reviews product={product} />
      </div>
      <Faq items={[...site.commonFaqs.slice(0, 3), ...(product.faqs || [])]} />
      <FinalCta product={product} />
    </>
  );
}
