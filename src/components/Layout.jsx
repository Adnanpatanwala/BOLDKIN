import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { site, getBuyUrl } from '../config/site.js';
import { getProduct } from '../config/products.js';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const featured = getProduct(site.featuredSlug);
  const navTo = (to) => (to === '/product' ? `/product/${site.featuredSlug}` : to);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <ScrollToTop />
      <div className="announce">
        {site.announcement} <span className="accent">●</span> Tap{' '}
        <a href={getBuyUrl(featured)} target="_blank" rel="noopener noreferrer">
          Buy on Amazon
        </a>{' '}
        to order
      </div>

      <header className="wrap nav">
        <Link to="/" aria-label={`${site.name} home`} className="nav-logo">
          <img src="/boldkin-logo.svg" alt={site.name} />
        </Link>
        <nav id="primary-nav" className={`navlinks ${open ? 'open' : ''}`} aria-label="Primary">
          {site.nav.map((n) => (
            <NavLink key={n.label} className="navlink" to={navTo(n.to)}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="btn sm" href={getBuyUrl(featured)} target="_blank" rel="noopener noreferrer">
            Buy on Amazon
          </a>
          <button className="menu-btn" aria-label="Menu" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="/boldkin-logo-dark.svg" alt={site.name} />
              <p>{site.footerBlurb}</p>
            </div>
            <nav aria-label="Footer"> 
              {site.nav.map((n) => (
                <Link key={n.label} className="navlink" to={navTo(n.to)}>
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="footer-bottom">
            {site.disclaimer && <span className="disclaimer"> <sup>*</sup>{site.disclaimer}</span>}
            <div className="footer-row">
              <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
              <span>{site.name} is sold on Amazon. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
