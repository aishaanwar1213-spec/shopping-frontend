
import { useState } from "react";
import { Link } from "react-router-dom";
import { LockKeyhole, ArrowLeft } from "lucide-react";
import "../App.css";

export default function Checkout({ cart, updateQuantity }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  async function handlePayment() {
    if (!cart.length) {
      setError("Your cart is empty.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://shopping-back-three.vercel.app/checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: cart.map((item) => ({
              id: item.id,
              quantity: item.quantity,
            })),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(
          data.error || "Unable to create payment session."
        );
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err.message || "Payment connection failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="checkout-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} /> Continue shopping
      </Link>

      <div className="checkout-heading">
        <span className="eyebrow">SECURE CHECKOUT</span>
        <h1>Your Shopping Cart</h1>
        <p>Review your products before payment.</p>
      </div>

      <div className="checkout-layout">
        <section className="checkout-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <h2>Your cart is empty</h2>
              <Link to="/" className="primary-button">
                Browse products
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <article className="checkout-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="checkout-item-info">
                  <h3>{item.name}</h3>
                  <strong>${item.price.toFixed(2)}</strong>

                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </button>

                    <button
                      onClick={() => updateQuantity(item.id, 0)}
                      aria-label="Remove product"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <strong>
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
              </article>
            ))
          )}
        </section>

        <aside className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="summary-row total-row">
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>

          {error && (
            <p className="error-message">{error}</p>
          )}

          <button
            className="primary-button pay-button"
            onClick={handlePayment}
            disabled={loading || cart.length === 0}
          >
            <LockKeyhole size={18} />
            {loading ? "Please wait..." : "Pay with Stripe"}
          </button>

          <p className="secure-note">
            Secure checkout powered by Stripe.
          </p>
        </aside>
      </div>
    </main>
  );
}
