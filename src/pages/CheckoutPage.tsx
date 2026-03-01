import { useState } from "react";
import { ChevronDown, Menu, X, Check, CreditCard, Truck, Store, Shield, Zap, Globe, Smartphone, Package, Users, BarChart3, Bot, Clock, MapPin, Gift, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

// Use placeholder images
const productChair = "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=200&h=200&fit=crop";
const productTables = "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=200&h=200&fit=crop";

/* ─── Checkout Mockup ─── */
const CheckoutMockup = () => (
  <div className="checkout-mockup w-full max-w-[420px] text-sm" style={{ color: "#333" }}>
    {/* Header */}
    <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "#e5e5e5" }}>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
          <span className="text-[10px] font-bold" style={{ color: "#fff" }}>S</span>
        </div>
        <span className="font-semibold text-sm" style={{ color: "#111" }}>Sellery & Co.</span>
      </div>
      <Check className="w-4 h-4" style={{ color: "#999" }} />
    </div>
    <div className="flex">
      {/* Left: Form */}
      <div className="flex-1 p-4 space-y-4">
        <div>
          <div className="rounded-lg px-3 py-2.5 text-center font-semibold text-xs" style={{ background: "#5a31f4", color: "#fff" }}>
            Shop Pay
          </div>
          <p className="text-center text-[11px] mt-1.5" style={{ color: "#888" }}>Show more options ▾</p>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-semibold text-xs" style={{ color: "#111" }}>Contact</span>
            <span className="text-[11px]" style={{ color: "#2563eb" }}>Log in</span>
          </div>
          <input className="w-full rounded-md border px-3 py-2 text-xs" style={{ borderColor: "#ddd", background: "#fff" }} placeholder="Email address or phone number" readOnly />
          <label className="flex items-center gap-1.5 mt-2 text-[11px]" style={{ color: "#555" }}>
            <input type="checkbox" className="rounded" /> Email me with news and offers
          </label>
        </div>
        <div>
          <span className="font-semibold text-xs" style={{ color: "#111" }}>Delivery</span>
          <select className="w-full rounded-md border px-3 py-2 text-xs mt-1.5" style={{ borderColor: "#ddd", background: "#fff" }}>
            <option>Country/region</option>
          </select>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <input className="rounded-md border px-3 py-2 text-xs" style={{ borderColor: "#ddd" }} placeholder="First name" readOnly />
            <input className="rounded-md border px-3 py-2 text-xs" style={{ borderColor: "#ddd" }} placeholder="Last name" readOnly />
          </div>
          <input className="w-full rounded-md border px-3 py-2 text-xs mt-2" style={{ borderColor: "#ddd" }} placeholder="Address" readOnly />
        </div>
      </div>
      {/* Right: Order Summary */}
      <div className="w-[170px] p-3 border-l space-y-3" style={{ borderColor: "#e5e5e5", background: "#fafafa" }}>
        <div className="flex items-start gap-2">
          <div className="relative">
            <img src={productChair} alt="Chair" className="w-12 h-12 rounded object-cover" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-bold" style={{ background: "#555", color: "#fff" }}>2</span>
          </div>
          <div>
            <p className="text-[10px] font-medium leading-tight" style={{ color: "#111" }}>White kitchen chair</p>
            <p className="text-[9px]" style={{ color: "#888" }}>Beech wood legs</p>
            <p className="text-[10px] font-semibold mt-0.5" style={{ color: "#111" }}>$80.00</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="relative">
            <img src={productTables} alt="Tables" className="w-12 h-12 rounded object-cover" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-bold" style={{ background: "#555", color: "#fff" }}>1</span>
          </div>
          <div>
            <p className="text-[10px] font-medium leading-tight" style={{ color: "#111" }}>Side tables</p>
            <p className="text-[9px]" style={{ color: "#888" }}>Wooden side tables</p>
            <p className="text-[10px] font-semibold mt-0.5" style={{ color: "#111" }}>$150.00</p>
          </div>
        </div>
        <div className="border-t pt-2 space-y-1" style={{ borderColor: "#e5e5e5" }}>
          <div className="flex justify-between text-[10px]"><span style={{ color: "#666" }}>Subtotal</span><span style={{ color: "#111" }}>$230.00</span></div>
          <div className="flex justify-between text-[10px]"><span style={{ color: "#666" }}>Shipping</span><span style={{ color: "#111" }}>$8.62</span></div>
          <div className="flex justify-between text-[10px]"><span style={{ color: "#666" }}>Est. taxes</span><span style={{ color: "#111" }}>$11.21</span></div>
          <div className="flex justify-between text-xs font-bold pt-1 border-t" style={{ borderColor: "#e5e5e5", color: "#111" }}><span>Total</span><span>$249.83</span></div>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Brand Logos ─── */
const brandLogos = ["Sennheiser", "Allbirds", "KOTN", "Fable", "Gymshark"];

/* ─── Features ─── */
const features = [
  { icon: <Zap className="w-6 h-6" />, title: "Express checkouts", desc: "Convert more buyers with one-tap express checkout options." },
  { icon: <Truck className="w-6 h-6" />, title: "Flexible shipping", desc: "Offer competitive rates and local delivery options." },
  { icon: <Store className="w-6 h-6" />, title: "In-store pickup", desc: "Give shoppers another way to quickly get their purchase." },
  { icon: <Clock className="w-6 h-6" />, title: "Accurate delivery dates", desc: "Show customers exactly when to expect delivery." },
  { icon: <Globe className="w-6 h-6" />, title: "Localized experiences", desc: "Increase global sales with 50+ language support." },
  { icon: <CreditCard className="w-6 h-6" />, title: "More ways to pay", desc: "Accept all major cards, express checkout, and gift cards." },
  { icon: <Gift className="w-6 h-6" />, title: "Pay in installments", desc: "Reduce abandoned carts with installment payment options." },
  { icon: <Package className="w-6 h-6" />, title: "Pre-orders & subscriptions", desc: "Give customers more ways to buy with flexible options." },
  { icon: <Shield className="w-6 h-6" />, title: "Safe & secure", desc: "World-class security and fraud protection built in." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Ready to scale", desc: "Handle up to 40,000 checkout starts per minute." },
  { icon: <Smartphone className="w-6 h-6" />, title: "Always mobile-first", desc: "Fully responsive checkout on every device." },
  { icon: <MapPin className="w-6 h-6" />, title: "Address autocomplete", desc: "Speed up checkout with intelligent address suggestions." },
  { icon: <Heart className="w-6 h-6" />, title: "Enable tipping", desc: "Custom tipping options for your team at checkout." },
  { icon: <Eye className="w-6 h-6" />, title: "Visual customizations", desc: "Unique color schemes, fonts, and logo placement." },
  { icon: <Bot className="w-6 h-6" />, title: "Bot protection", desc: "Prevent bots from buying up inventory during flash sales." },
  { icon: <Users className="w-6 h-6" />, title: "Accessible to all", desc: "Shoppers can buy using their own assistive technologies." },
];



/* ─── Main Page ─── */
const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-background" style={{ textAlign: 'left', margin: '-2rem', padding: 0, width: 'calc(100% + 4rem)' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
            {/* Left */}
            <div className="flex-1 max-w-2xl" style={{ animation: "fade-in-up 0.8s ease-out" }}>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-6">Sellery Checkout</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 leading-tight">
                The best‑converting checkout on the web
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
                The world's highest-converting, customizable, one-click checkout powers millions of transactions and is trusted by the biggest brands.
              </p>

              {/* Stats */}
              <div className="flex gap-8 mb-10 p-8 rounded-2xl bg-card border border-border/50">
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">15%</div>
                  <div className="text-base text-muted-foreground leading-snug">Higher conversion<br />than competition</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">875M</div>
                  <div className="text-base text-muted-foreground leading-snug">Global<br />customers</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">5.5B</div>
                  <div className="text-base text-muted-foreground leading-snug">Orders<br />processed</div>
                </div>
              </div>

              <Link to="/start" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base hover:opacity-90 transition-opacity">
                Start your free trial
              </Link>
            </div>

            {/* Right: Checkout Mockup */}
            <div className="w-full lg:w-auto" style={{ animation: "fade-in-up 1s ease-out 0.2s both" }}>
              <div style={{ animation: "float 6s ease-in-out infinite" }}>
                <CheckoutMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-12 border-y border-border/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 overflow-x-auto">
            {brandLogos.map((name) => (
              <span key={name} className="text-muted-foreground/40 text-xl font-bold tracking-widest uppercase whitespace-nowrap flex-shrink-0">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sell Your Way Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">Sell your way with Sellery Checkout</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mx-auto mb-16 max-w-3xl">
            Make checkout your own using customizable features that fit your unique business needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-card border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Apps for every checkout</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Install apps that extend your checkout's functionality—from loyalty programs to upsells.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Express your brand</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Make advanced visual customizations with the Checkout Branding API and editor tools.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Developer platform</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Build custom checkout extensions with our suite of intuitive developer tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Pay Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Sell more. Sell faster.<br />
              <span className="text-primary" style={{ textShadow: "0 0 8px hsl(var(--primary)), 0 0 12px hsl(var(--primary) / 0.5)" }}>Sellery Checkout + Quick Pay</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mx-auto max-w-3xl">
              Instantly recognize millions of returning customers so they can pay with one tap.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">4x</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">faster</h3>
              <p className="text-base text-muted-foreground leading-relaxed">Speed through checkout with one-tap experience on any device.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">91%</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">higher conversion</h3>
              <p className="text-base text-muted-foreground leading-relaxed">Capture more sales with higher mobile and desktop conversion rates.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">100M+</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">more customers</h3>
              <p className="text-base text-muted-foreground leading-relaxed">Increase your global reach through a massive base of high-intent shoppers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">Sellery Checkout features</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mx-auto max-w-3xl">Everything you need to create the perfect checkout experience.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-card border border-border/50">
                <div className="text-primary mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">Ready to get started?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mx-auto mb-12">
            Start your Sellery journey for free and get all the tools you need to start, run, and grow your business.
          </p>
          <Link to="/start" className="inline-flex items-center gap-2 px-12 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
            Start your free trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <span className="text-base text-muted-foreground">© 2026 Sellery. All rights reserved.</span>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-base text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="text-base text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;