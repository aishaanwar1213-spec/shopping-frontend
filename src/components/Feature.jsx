
import {
  Truck,
  ShieldCheck,
  RefreshCw,
  Headphones,
} from "lucide-react";

const features = [
  {
    Icon: Truck,
    title: "Free Shipping",
    text: "On qualifying orders",
  },
  {
    Icon: ShieldCheck,
    title: "Secure Checkout",
    text: "Protected payment process",
  },
  {
    Icon: RefreshCw,
    title: "Easy Returns",
    text: "Simple return experience",
  },
  {
    Icon: Headphones,
    title: "Customer Support",
    text: "We're here to help",
  },
];

export default function Feature() {
  return (
    <section className="features">
      {features.map(({ Icon, title, text }) => (
        <div className="feature-item" key={title}>
          <div className="feature-icon">
            <Icon size={23} />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
