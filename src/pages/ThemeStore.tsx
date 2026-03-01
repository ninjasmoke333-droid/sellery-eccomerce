import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Search,
  Star,
  Check,
  Zap,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";

/* ─── Data ─────────────────────────────────────────── */

const topThemes = [
  {
    name: "Allure",
    price: "$100",
    rating: "100%",
    image: "/assets/theme-allure.jpg",
  },
  {
    name: "Futurer",
    price: "$320",
    rating: "98%",
    image: "/assets/theme-futurer.jpg",
  },
  {
    name: "Broadcast",
    price: "$420",
    rating: "95%",
    image: "/assets/theme-broadcast.jpg",
  },
];

const newThemes = [
  {
    name: "Force",
    price: "$380",
    rating: "100%",
    image: "/assets/theme-force.jpg",
    isNew: true,
  },
  {
    name: "Gentech",
    price: "$360",
    rating: null,
    image: "/assets/theme-gentech.jpg",
    isNew: true,
  },
  {
    name: "Seventh",
    price: "$420",
    rating: null,
    image: "/assets/theme-seventh.jpg",
    isNew: true,
  },
  {
    name: "Zeal",
    price: "$270",
    rating: "100%",
    image: "/assets/theme-zeal.jpg",
    isNew: true,
  },
];

const communityThemes = [
  {
    name: "Impact",
    price: "$400 USD",
    image: "/assets/theme-impact.jpg",
  },
  {
    name: "Flow",
    price: "$380 USD",
    image: "/assets/theme-flow.jpg",
  },
  {
    name: "Allure",
    price: "$100 USD",
    image: "/assets/theme-allure.jpg",
  },
  {
    name: "Broadcast",
    price: "$420 USD",
    image: "/assets/theme-broadcast.jpg",
  },
];

const testimonials = [
  {
    quote:
      "The theme itself is super polished with everything you need to have a stylish store in no time.",
    author: "Lilian Sanchez Style",
    theme: "Be Yours",
    themeBy: "RoarTheme",
    image: "/assets/theme-beyours.jpg",
  },
  {
    quote:
      "Keeps the theme updated with all the latest features and trends, so your store stays current.",
    author: "Treshers",
    theme: "Empire",
    themeBy: "Pixel Union",
    image: "/assets/theme-empire.jpg",
  },
  {
    quote:
      "It looks so professional and makes it such a seamless experience for my customers to shop from.",
    author: "stevey",
    theme: "Blockshop",
    themeBy: "Troop Themes",
    image: "/assets/theme-blockshop.jpg",
  },
];

const features = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Built for commerce",
    desc: "Fast, reliable, and with the world's best-converting checkout",
  },
  {
    icon: <Check className="w-5 h-5" />,
    title: "All the essentials",
    desc: "Product recommendations, reviews, discounts, and much more",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Developer support",
    desc: "Get help when you need it, including free updates",
  },
];

const quickFilters = [
  "Free",
  "Jewelry & accessories",
  "Food & drink",
  "Fashion",
  "Electronics",
];

/* ─── Component ────────────────────────────────────── */

const ThemeStore = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--surface))" }}>
      <Navbar />

      {/* ─── Hero Section ─── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
              style={{ color: "hsl(var(--text-primary))" }}
            >
              Choose the right theme for your business
            </h1>
            <p
              className="mt-5 text-base md:text-lg max-w-lg"
              style={{ color: "hsl(var(--text-secondary))" }}
            >
              Look for a design with the features you need most, then customize
              from there
            </p>
          </div>
          <a href="#" className="btn-outline self-start md:self-end">
            View all
          </a>
        </div>

        {/* Quick filters */}
        <div className="flex flex-wrap gap-2 mt-8">
          {quickFilters.map((f) => (
            <button key={f} className="feature-pill text-xs">
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ─── Top Themes Grid ─── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="section-heading">Top themes</h2>
            <p className="section-subheading mt-1">
              Fully flexible and regularly updated with the latest features
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topThemes.map((theme) => (
            <a key={theme.name} href="#" className="theme-card group">
              <div className="overflow-hidden">
                <img
                  src={theme.image}
                  alt={theme.name}
                  className="theme-card-image group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="theme-card-info">
                <div>
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "hsl(var(--text-primary))" }}
                  >
                    {theme.name}
                  </h3>
                  <span
                    className="text-sm"
                    style={{ color: "hsl(var(--text-secondary))" }}
                  >
                    {theme.price}
                  </span>
                </div>
                {theme.rating && (
                  <div className="badge-rating">
                    <Star
                      className="w-3.5 h-3.5 fill-current"
                      style={{ color: "hsl(var(--primary))" }}
                    />
                    {theme.rating}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ─── Features Strip ─── */}
      <section
        className="py-12 md:py-16"
        style={{
          borderTop: "1px solid hsl(var(--border))",
          borderBottom: "1px solid hsl(var(--border))",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-2">What every theme gets you</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: "hsl(var(--surface-raised))",
                    color: "hsl(var(--primary))",
                  }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "hsl(var(--text-primary))" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "hsl(var(--text-secondary))" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── New Themes ─── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="section-heading">New to the Theme Store</h2>
            <p className="section-subheading mt-1">
              Help your store stand out with themes shoppers haven't seen yet
            </p>
          </div>
          <a href="#" className="btn-outline text-sm hidden sm:inline-flex">
            More new themes
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newThemes.map((theme) => (
            <a key={theme.name} href="#" className="theme-card group">
              <div className="overflow-hidden relative">
                <img
                  src={theme.image}
                  alt={theme.name}
                  className="theme-card-image group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {theme.isNew && (
                  <span className="badge-new absolute top-3 left-3">New</span>
                )}
              </div>
              <div className="theme-card-info">
                <div>
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "hsl(var(--text-primary))" }}
                  >
                    {theme.name}
                  </h3>
                  <span
                    className="text-sm"
                    style={{ color: "hsl(var(--text-secondary))" }}
                  >
                    {theme.price}
                  </span>
                </div>
                {theme.rating && (
                  <div className="badge-rating">
                    <Star
                      className="w-3.5 h-3.5 fill-current"
                      style={{ color: "hsl(var(--primary))" }}
                    />
                    {theme.rating}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="testimonial-card">
              <blockquote
                className="text-sm leading-relaxed italic"
                style={{ color: "hsl(var(--text-secondary))" }}
              >
                "{t.quote}"
              </blockquote>
              <p
                className="text-xs font-medium"
                style={{ color: "hsl(var(--text-tertiary))" }}
              >
                — {t.author}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <img
                  src={t.image}
                  alt={t.theme}
                  className="w-14 h-20 rounded-lg object-cover"
                  loading="lazy"
                />
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "hsl(var(--text-primary))" }}
                  >
                    {t.theme}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "hsl(var(--text-tertiary))" }}
                  >
                    by {t.themeBy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Community / Millions of merchants ─── */}
      <section
        className="py-16"
        style={{ borderTop: "1px solid hsl(var(--border))" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">
            Hundreds of themes, millions of merchants
          </h2>
          <p className="section-subheading mt-2 max-w-xl">
            Sellery themes flex to fit every kind and size of business—including
            yours
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {communityThemes.map((theme, i) => (
              <a key={`${theme.name}-${i}`} href="#" className="group">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={theme.image}
                    alt={`Store using ${theme.name}`}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3">
                  <h4
                    className="text-sm font-semibold"
                    style={{ color: "hsl(var(--text-primary))" }}
                  >
                    {theme.name}
                  </h4>
                  <p
                    className="text-xs"
                    style={{ color: "hsl(var(--text-secondary))" }}
                  >
                    {theme.price}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="cta-section">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight max-w-xl mx-auto"
            style={{ color: "hsl(var(--text-primary))" }}
          >
            Build fast and sell more with Sellery themes
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="btn-primary px-8 py-3.5 text-base">
              Start your free trial
            </a>
            <a href="#" className="btn-outline px-8 py-3.5 text-base">
              Contact sales
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer
        className="py-10"
        style={{ borderTop: "1px solid hsl(var(--border))" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 5 L20 35 M15 8 L15 32 M25 8 L25 32 M18 6 Q14 3 12 7 M22 6 Q26 3 28 7"
                stroke="hsl(var(--shopify-green))"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-lg font-bold italic"
              style={{
                color: "hsl(var(--text-primary))",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Sellery
            </span>
          </div>
          <p className="text-xs" style={{ color: "hsl(var(--text-tertiary))" }}>
            © 2026 Sellery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ThemeStore;
