
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer-brand">
        Shopora<span>.</span>
      </Link>

      <p>
        Discover your favorites. Shop with confidence.
      </p>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
      </div>

      <small>
        © {new Date().getFullYear()} Shopora. Demo storefront.
      </small>
    </footer>
  );
}
