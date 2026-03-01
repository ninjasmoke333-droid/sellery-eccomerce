import { useState } from "react";
import {
  Truck,
  Package,
  Tag,
  RotateCcw,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import Navbar from "@/components/Navbar";

const subNavItems = [
  { label: "Order management and delivery", id: "order-management" },
  { label: "Sellery Shipping", id: "shipping" },
  { label: "Inventory management", id: "inventory" },
];

const featureCards = [
  {
    icon: Truck,
    title: "Buy shipping labels",
    description: "Purchase and print discounted labels, negotiated by Sellery.",
  },
  {
    icon: Package,
    title: "Fulfill your orders",
    description: "Streamlined order fulfillment, no matter where you sell.",
  },
  {
    icon: Tag,
    title: "Manage your inventory",
    description: "Easy, accurate, seamless and real-time inventory control.",
  },
  {
    icon: RotateCcw,
    title: "Process your returns",
    description: "Make the returns experience seamless for customers.",
  },
];

const allFeatures = {
  "Order management and fulfillment": [
    "Order management",
    "Smart order routing",
    "Order index",
    "Fulfillment automations",
    "Bulk printing and fulfillment",
    "Custom saved views",
    "Order editing",
    "Draft orders",
    "Order analytics",
    "Order notifications",
    "Local delivery and in-store pickup",
    "Split and merge",
  ],
  "Inventory management": [
    "Inventory tracking",
    "Multi-location inventory",
    "Purchase orders",
    "Transfers",
    "Inventory automations",
    "Bulk inventory editor",
    "Adjustment reasons",
    "Inventory reports",
    "Unavailable inventory",
  ],
  "Shipping and delivery": [
    "Shipping rates",
    "Shipping carriers",
    "Shipping labels",
    "Shipping insurance",
    "Shipping label automations",
    "Presets",
    "Packaging",
    "Local delivery and pickup",
    "Shipping analytics",
  ],
  "Returns and refunds": [
    "Customer self-serve returns",
    "Return rules",
    "Return policy",
    "Return management",
    "Exchanges",
    "Return labels",
    "Refunds",
    "Return status",
    "Return reports",
  ],
};

const OrdersPage = () => {
  const [activeNav, setActiveNav] = useState("order-management");

  return (
    <main className="pt-16">
      <Navbar />
      {/* Sub-navigation */}
      <div className="sticky top-16 bg-background/95 backdrop-blur-sm border-b border-border z-40">
        <div className="section-container">
          <div className="flex items-center gap-6 overflow-x-auto py-4 scrollbar-hide">
            {subNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveNav(item.id);
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`whitespace-nowrap text-sm font-medium transition-colors ${
                  activeNav === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="order-management"
        className="section-container py-16 md:py-24"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Order Management and Delivery
            </p>
            <h1 className="section-heading">
              Fulfill orders
              <br />
              faster and for less
            </h1>
            <p className="section-subheading">
              From deep discounts on shipping to centralized order
              management—it's all included in your Sellery plan.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-base font-medium hover:opacity-90 transition-opacity"
            >
              Start free trial
            </a>
            <p className="text-xs text-muted-foreground">
              You agree to receive Sellery marketing emails.
            </p>
          </div>
          <div className="relative">
            <img
              src="/assets/hero-orders.png"
              alt="Order fulfillment workflow with shipping labels and boxes"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section-container pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {featureCards.map((card) => (
            <div key={card.title} className="feature-card group cursor-pointer">
              <card.icon className="feature-card-icon" strokeWidth={1.5} />
              <h3 className="font-semibold text-sm">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shipping Section */}
      <section id="shipping" className="bg-secondary/50 py-20 md:py-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Sellery Shipping
              </p>
              <h2 className="section-heading">
                Ship with the
                <br />
                lowest rates
              </h2>
              <p className="section-subheading">
                That's why 125+ million shipping labels are purchased on Sellery
                every year.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:gap-3 transition-all"
              >
                Learn more about Sellery Shipping{" "}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div>
              <img
                src="/assets/shipping-truck.png"
                alt="Shipping truck with carrier logos"
                className="w-full max-w-md mx-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Stat */}
          <div className="mt-20 text-center">
            <p className="stat-number">Save up to 88%</p>
            <p className="text-lg text-muted-foreground mt-4">
              on shipping rates
            </p>
          </div>

          {/* Testimonial */}
          <div className="mt-16 max-w-3xl mx-auto">
            <blockquote className="border-l-2 border-foreground/20 pl-6">
              <p className="text-lg md:text-xl italic text-foreground/80 leading-relaxed">
                "We are saving an average of $25,000 per month with Sellery
                Shipping. That's about $305,000 per year on shipping costs."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Fulfillment Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Fulfillment
            </p>
            <h2 className="section-heading mb-6">
              Streamline and speed up fulfillment
            </h2>
            <p className="section-subheading">
              With powerful automations and a customizable orders dashboard,
              Sellery makes fulfilling orders quicker and more cost effective.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart order routing",
                desc: "Whether you're shipping from a few warehouses nearby or dozens around the globe, smart order routing prioritizes the optimal location.",
              },
              {
                title: "End-to-end automation",
                desc: "From flagging high-risk orders to drafting shipping labels, Flow helps you cut out time-consuming tasks with automated custom workflows.",
              },
              {
                title: "Customized order management",
                desc: "Organize orders from any sales channel by customizing columns, filters, sorting, and searching. Save custom views to fulfill orders faster.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="space-y-3 p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory Section */}
      <section id="inventory" className="bg-secondary/50 py-20 md:py-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Inventory Management
              </p>
              <h2 className="section-heading">
                Say goodbye to over and underselling
              </h2>
              <p className="section-subheading">
                Increase profitability by optimizing your inventory with
                real-time syncing across locations and channels.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:gap-3 transition-all"
              >
                Learn more about inventory management{" "}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div>
              <img
                src="/assets/inventory-phone.png"
                alt="Inventory management on mobile"
                className="w-full max-w-md mx-auto rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Post-Purchase Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/assets/returns-screen.png"
                alt="Return request management screen"
                className="w-full max-w-md mx-auto rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="space-y-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Post-Purchase
              </p>
              <h2 className="section-heading">Keep customers coming back</h2>
              <p className="section-subheading">
                From package tracking to seamless returns, we're not sure who
                will love the post-purchase experience more—you or your
                customers.
              </p>

              <div className="space-y-6 mt-8">
                {[
                  {
                    title: "Self-serve returns",
                    desc: "Increase brand trust and repeat purchases by letting customers initiate returns.",
                  },
                  {
                    title: "Retain more revenue with exchanges",
                    desc: "Create and track product exchanges across your full catalog to retain revenue.",
                  },
                  {
                    title: "Built-in marketing tools",
                    desc: "Set up upsell and winback email automation in just a few minutes to boost sales.",
                  },
                ].map((item) => (
                  <div key={item.title} className="space-y-1">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Features */}
      <section id="all-features" className="bg-secondary/50 py-20 md:py-28">
        <div className="section-container">
          <h2 className="section-heading mb-16 text-center">All features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {Object.entries(allFeatures).map(([category, features]) => (
              <div key={category}>
                <h3 className="font-semibold text-sm mb-4 uppercase tracking-wide text-muted-foreground">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature}>
                      <a
                        href="#"
                        className="text-sm text-foreground hover:text-foreground/70 transition-colors flex items-center justify-between group"
                      >
                        {feature}
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 md:py-28">
        <div className="section-container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Sell more products with these additional tools
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Explore other Sellery solutions to scale your business.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Analytics and reporting",
                desc: "Scale your business faster with built-in analytics and reporting.",
              },
              {
                title: "B2B on Sellery",
                desc: "Sell wholesale and DTC from a single platform, or even a single store.",
              },
              {
                title: "Sellery Capital",
                desc: "Take control of your business with founder-friendly capital.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-card border border-border text-left space-y-3 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="section-container text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sellery. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default OrdersPage;
