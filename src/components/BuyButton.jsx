import { getBuyUrl } from '../config/site.js';
import { ArrowIcon } from '../Icons.jsx';

export default function BuyButton({ product, className = '', iconSize = 20, children = 'Buy on Amazon' }) {
  return (
    <a className={`btn ${className}`} href={getBuyUrl(product)} target="_blank" rel="noopener noreferrer">
      {children} <ArrowIcon size={iconSize} />
    </a>
  );
}
