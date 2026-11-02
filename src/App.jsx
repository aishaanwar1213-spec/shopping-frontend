
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import CardNav from "./components/CardNav";
import Footer from "./components/Footer";

import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

import { products } from "./data/products";
import "./App.css";

function Home({ addToCart }) {
  const navigate = useNavigate();

  return (
    <>
      <Hero
        onShop={() =>
          document
            .getElementById("products")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <Feature />

      <section className="products-section" id="products">
        <div className="section-heading">
          <div>
            <span className="eyebrow">OUR COLLECTION</span>
            <h2>Discover our products</h2>
            <p>
              Quality products, selected for your everyday life.
            </p>
          </div>

          <span className="product-count">
            {products.length} products
          </span>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <CardNav
              key={product.id}
              product={product}
              onAdd={() => {
                addToCart(product);
                navigate("/checkout");
              }}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

function Store() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...current,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} />}
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              updateQuantity={updateQuantity}
            />
          }
        />

        <Route
          path="/success"
          element={<Success />}
        />

        <Route
          path="/cancel"
          element={<Cancel />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Store />
    </BrowserRouter>
  );
}
