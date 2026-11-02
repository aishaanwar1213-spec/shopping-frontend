
import { ArrowRight } from "lucide-react";

export default function Hero({ onShop }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">
          YOUR EVERYDAY ESSENTIALS
        </span>

        <h1>
          Shopping made
          <br />
          <span>simple & special.</span>
        </h1>

        <p>
          Discover thoughtfully selected products with
          quality you can trust and prices you'll love.
        </p>

        <button className="primary-button" onClick={onShop}>
          Explore collection <ArrowRight size={18} />
        </button>

        <div className="hero-note">
          <span>✓</span> Carefully selected products
          <span>✓</span> Secure checkout
        </div>
      </div>

      <div className="hero-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1100&q=85"
          alt="Modern shopping store"
          className="hero-image"
        />
        <div className="hero-floating-card">
          <span className="floating-star">★</span>
          <div>
            <strong>Made for you</strong>
            <p>Find your next favorite.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
