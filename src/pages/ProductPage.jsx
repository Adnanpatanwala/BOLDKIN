import { Link, useParams } from 'react-router-dom';
import { site } from '../config/site.js';
import { getProduct } from '../config/products.js';
import ProductDetail from '../sections/ProductDetail.jsx';
import Modes from '../sections/Modes.jsx';
import InBox from '../sections/InBox.jsx';
import Specs from '../sections/Specs.jsx';
import Reviews from '../sections/Reviews.jsx';
import Faq from '../sections/Faq.jsx';
import FinalCta from '../sections/FinalCta.jsx';
import NotFound from './NotFound.jsx';

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProduct(slug || site.featuredSlug);
  if (!product) return <NotFound />;
  // console.log(product);
  
  return (
    <>
      <div className="wrap crumbs">
        <nav aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/shop">Shop</Link>
          <span aria-hidden="true">/</span>
          <strong>{product.name}</strong>
        </nav>
      </div>
      <ProductDetail product={product} heading="h1" />
      <div className="section">
        <Modes product={product} />
      </div>
      <InBox product={product} />
      <Specs product={product} />
      <div className="section">
        <Reviews product={product} />
      </div>
      <Faq items={product.faqs} />
      <FinalCta product={product} />
    </>
  );
}
