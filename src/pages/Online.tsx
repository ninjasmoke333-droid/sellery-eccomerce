import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ArrowDown,
  Zap,
  ShieldCheck,
  Globe,
  Search,
  Languages,
  Star,
  Smartphone,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";

/* ─── Store cards for the scrolling hero carousel ─── */
const storeCards = [
  {
    image: "/assets/store-preview-1.jpg",
    name: "luxurymode.com",
    tag: "Theme",
  },
  { image: "/assets/store-preview-2.jpg", name: "slowfy.com", tag: "Custom" },
  {
    image: "/assets/store-preview-3.jpg",
    name: "karesbok.com",
    tag: "Headless",
  },
  { image: "/assets/store-preview-4.jpg", name: "legrd.com", tag: "Theme" },
];

/* ─── Feature grid items ─── */
const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "The world's best-converting checkout",
    desc: "Powered by the best checkout in the world, Sellery converts shoppers into buyers 15% better on average than other platforms.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "AI tools",
    desc: "AI helps you create a custom store in seconds. Sidekick, your AI assistant, helps with everything from setup to scaling.",
  },
  {
    icon: <Play className="w-6 h-6" />,
    title: "Videos and 3D models",
    desc: "Help shoppers imagine how your products fit into their lives with videos, 3D visualization tools, and other rich media.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Search and filtering",
    desc: "Give your customers an easy way to find exactly what they're looking for.",
  },
  {
    icon: <Languages className="w-6 h-6" />,
    title: "Languages and currencies",
    desc: "Let customers select which country and what currency they're shopping in.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Fast and accessible",
    desc: "Sellery stores are optimized for speed and accessibility, so everyone can shop and nobody has to wait.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Product recommendations",
    desc: "Encourage customers to fill their carts by recommending more products they'll love.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile-ready",
    desc: "Everything's designed responsively, so things look good no matter what device customers use.",
  },
];

/* ─── Testimonials ─── */
const testimonials = [
  {
    quote:
      "Sellery allowed us to build the most playful customer experiences while maintaining complete control of our development process.",
    name: "Emily M.",
    role: "CEO & Founder",
  },
  {
    quote:
      "Loading speed is flawless and instant, on mobile and desktop—providing a seamless experience for customers globally.",
    name: "Alex T.",
    role: "Managing Director",
  },
  {
    quote:
      "We love our theme. It's simple to navigate. My dev team moves at laser speed. If we have an idea, it's implemented same-day.",
    name: "Joshua A.",
    role: "Founder & CEO",
  },
];

const Online = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            The world's best online stores are built on{" "}
            <span className="glow-text">Sellery</span>
          </h1>
          <p className="section-subheading mx-auto mb-10">
            With the highest-converting checkout and flexible options for every
            size of business, Sellery stores sell more products, lower your
            costs, and save you time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="/Enterprisecontactform"
              className="green-button text-base px-8 py-4"
            >
              Start free trial
            </a>
            <a href="/pricing" className="outline-button text-base px-8 py-4">
              See pricing
            </a>
          </div>

          {/* Scrolling store cards */}
          <div className="relative overflow-hidden py-4">
            <div
              className="flex gap-6 animate-scroll-left"
              style={{ width: "max-content" }}
            >
              {[...storeCards, ...storeCards, ...storeCards, ...storeCards].map(
                (store, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[280px] sm:w-[320px] group"
                  >
                    <div className="feature-card overflow-hidden">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={store.image}
                          alt={store.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {store.name}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                          {store.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BUILT INTO EVERY STORE
      ═══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="section-heading mb-12">Built into every store</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Uptime */}
            <div className="feature-card group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/feature-uptime.jpg"
                  alt="99.9% uptime"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Cheetah fast. Ridiculously reliable.
                </h3>
                <p className="text-muted-foreground text-sm">
                  With a 99.9% uptime rate and 300 points of presence worldwide,
                  Sellery's infrastructure won't leave your customers hanging.
                </p>
              </div>
            </div>
            {/* Card 2 - Checkout */}
            <div className="feature-card group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/feature-checkout1.jpg"
                  alt="Best checkout"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  The world's best checkout
                </h3>
                <p className="text-muted-foreground text-sm">
                  Sellery's checkout converts a whole 15% better on average than
                  other commerce platforms. Which means more sales for you.
                </p>
              </div>
            </div>
            {/* Card 3 - AI */}
            <div className="feature-card group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/feature-ai.jpg"
                  alt="Powerful AI"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Powerful AI at every turn
                </h3>
                <p className="text-muted-foreground text-sm">
                  From launching your store to managing and scaling it, boost
                  every part of your business with built-in AI that's made for
                  commerce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CHOOSE HOW YOU WANT TO BUILD
      ═══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="section-heading mb-4">
            Choose how you want to build{" "}
            <ArrowDown className="inline w-8 h-8 lg:w-12 lg:h-12" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="feature-card group">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/assets/feature-themes.jpg"
                  alt="Start with a theme"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Start with a theme</h3>
                <p className="text-muted-foreground">
                  Generate a store design with AI, or pick from 800+ proven
                  themes, then customize things with our easy-to-use visual
                  editor.
                </p>
              </div>
            </div>
            <div className="feature-card group">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/assets/feature-custom.jpg"
                  alt="Build completely custom"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">
                  Build completely custom
                </h3>
                <p className="text-muted-foreground">
                  Create a theme from scratch, go headless, or choose your own
                  stack using Sellery's APIs. It's totally up to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES GRID
      ═══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="section-heading mb-4">
            All the features you need, right out of the box
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((f, i) => (
              <div key={i} className="feature-card p-6 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {f.icon}
                </div>
                <h3 className="font-bold text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="section-heading mb-12 text-center">
            Join millions of merchants on Sellery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="feature-card p-8 flex flex-col justify-between"
              >
                <blockquote className="text-lg leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="section-heading mb-6">Build your store on Sellery</h2>
          <p className="section-subheading mx-auto mb-10">
            All kinds of businesses. All kinds of stores. All built to sell.
          </p>
          <a
            href="/Enterprisecontactform"
            className="green-button text-base px-10 py-4"
          >
            Start free trial
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 5 L20 35 M15 8 L15 32 M25 8 L25 32 M18 6 Q14 3 12 7 M22 6 Q26 3 28 7"
                stroke="hsl(var(--primary))"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-lg font-bold italic">Sellery</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="/pricing"
              className="hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="/Enterprise"
              className="hover:text-foreground transition-colors"
            >
              Enterprise
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Sellery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Online;
