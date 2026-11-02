
import { XCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Cancel() {
  return (
    <main className="status-page">
      <div className="status-card">
        <div className="status-icon cancel-icon">
          <XCircle size={48} />
        </div>

        <span className="eyebrow">CHECKOUT INTERRUPTED</span>
        <h1>Payment cancelled</h1>

        <p>
          Your checkout was cancelled. You can return to
          the store and try again.
        </p>

        <Link to="/checkout" className="primary-button">
          <ArrowLeft size={18} /> Return to checkout
        </Link>
      </div>
    </main>
  );
}
