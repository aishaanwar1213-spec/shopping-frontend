
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Success() {
  return (
    <main className="status-page">
      <div className="status-card">
        <div className="status-icon success-icon">
          <CheckCircle2 size={48} />
        </div>

        <span className="eyebrow">ORDER UPDATE</span>
        <h1>Thank you for your order!</h1>

        <p>
          You have returned from Stripe Checkout. Your
          payment status should be verified by the server.
        </p>

        <Link to="/" className="primary-button">
          Back to shop <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  );
}
