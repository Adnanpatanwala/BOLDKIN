import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="wrap page-top last section">
      <h1 className="d h-page">
        404<span className="accent">.</span>
      </h1>
      <p className="lede" style={{ margin: '24px 0 32px' }}>
        That page does not exist.
      </p>
      <Link className="btn" to="/">
        Back home
      </Link>
    </section>
  );
}
