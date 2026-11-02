
import { ShoppingBag, Store } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon">
          <Store size={23} />
        </span>
        Shopora<span className="brand-dot">.</span>
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <a href="/#products">Shop</a>
      </nav>

      <Link to="/checkout" className="cart-button">
        <ShoppingBag size={19} />
        <span>Cart</span>
        <span className="cart-count">{cartCount}</span>
      </Link>
    </header>
  );
}
