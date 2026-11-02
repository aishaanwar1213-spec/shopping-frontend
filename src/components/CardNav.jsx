
import { ShoppingCart, Star } from "lucide-react";

export default function CardNav({ product, onAdd }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />

        <span className="sale-badge">SALE</span>
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <div className="product-rating">
          <Star size={15} fill="currentColor" />
          <span>{product.rating}</span>
        </div>

        <div className="price-row">
          <strong>${product.price.toFixed(2)}</strong>
          <del>${product.oldPrice.toFixed(2)}</del>
        </div>

        <button
          className="add-cart-button"
          onClick={onAdd}
        >
          <ShoppingCart size={17} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
