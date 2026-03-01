import { useState } from "react";
import Navbar from "@/components/Navbar";

import {
  Globe,
  Languages,
  Truck,
  Link2,
  Palette,
  Tags,
  Store,
  ShoppingBag,
  Share2,
  ArrowRight,
  ChevronRight,
  Plus,
} from "lucide-react";

const Markets = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Your target regions",
      icon: Globe,
      description:
        "Increase sales by creating highly localized experiences for customers around the globe.",
      bullets: [
        "Let customers shop in their own language and currency",
        "Celebrate local holidays with a sale",
        "Instantly adjust pricing with bulk editing",
      ],
    },
    {
      label: "In-person shoppers",
      icon: Store,
      description:
        "With Sellery POS Pro, you can choose the products and pricing that make sense for each of your retail locations.",
      bullets: [
        "Stock only best sellers at your flagship store",
        "Mark down prices at outlet stores",
        "Prioritize inventory for in-person sales so shelves stay stocked",
      ],
    },
    {
      label: "B2B buyers",
      icon: ShoppingBag,
      description:
        "Plus merchants can create markets for wholesale selling with Sellery B2B.",
      bullets: [
        "Select different products and prices",
        "Change the layout of your online store",
        "Adjust your messaging and swap in different imagery",
      ],
    },
    {
      label: "More ways to reach customers",
      icon: Share2,
      description:
        "Publish your products across social, search, and other marketplaces with Sellery Sales Channels.",
      bullets: [],
    },
  ];

  const features = [
    {
      icon: Languages,
      title: "Local languages and currencies",
      description:
        "Localize your store for each region. And with Sellery Payments, people can pay in their own currency.",
    },
    {
      icon: Truck,
      title: "Optimized fulfillment",
      description:
        "Reduce costs and deliver products faster by automatically shipping from the closest fulfillment center.",
    },
    {
      icon: Link2,
      title: "Unique domains",
      description:
        "Give each market its own URL or organize markets into subfolders—all without impacting your SEO ranking.",
    },
    {
      icon: Palette,
      title: "The right look and feel",
      description:
        "Modify your online store theme to fit each market with custom messaging, layout, and imagery.",
      badges: ["Advanced", "Plus"],
    },
    {
      icon: Tags,
      title: "Select products and pricing",
      description:
        "Curate your catalog to offer the right products for each market, all while keeping your different taxes straight.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <p className="text-sm font-semibold tracking-widest uppercase text-foreground mb-4">
                Sellery Markets
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Get a store that flexes to fit every market
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Expand anywhere and everywhere. At home and across borders.
                Online and in person. B2B and D2C.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
              >
                Customize your markets
              </a>
            </div>

            {/* Product Card Mockup */}
            <div className="relative hidden lg:block">
              <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden max-w-md ml-auto">
                {/* Mini storefront header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                  <span className="font-serif text-lg italic text-foreground">
                    Heirloom
                  </span>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>🇺🇸</span>
                    <span>US/USD</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs tracking-[0.2em] uppercase font-semibold text-foreground mb-1">
                    Deluxe Mixer
                  </p>
                  <p className="text-xs text-shopify-green font-medium mb-1">
                    GREEN
                  </p>
                  <p className="text-lg font-bold text-foreground mb-4">
                    US$420
                  </p>
                  <button className="w-full bg-primary text-primary-foreground py-3 text-xs tracking-[0.15em] uppercase font-semibold rounded">
                    Add to Cart
                  </button>
                  <div className="mt-4 space-y-0">
                    {[
                      "Product description",
                      "Dimensions",
                      "Materials",
                      "Shipping & Returns",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between py-3 border-b border-border last:border-0"
                      >
                        <span className="text-xs text-foreground font-medium">
                          {item}
                        </span>
                        <Plus className="w-3.5 h-3.5 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating product image */}
              <img
                src="/assets/hero-product.png"
                alt="Deluxe green mixer"
                className="absolute -right-12 top-16 w-64 h-auto drop-shadow-2xl pointer-events-none"
              />
              {/* Welcome badge */}
              <div className="absolute -right-4 top-8 bg-shopify-green text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                Welcome
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sell to Multiple Markets */}
      <section className="py-20 md:py-32 bg-markets-section">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Sell to multiple markets, all from a single store
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed lg:pt-4">
              Get a holistic overview of all your markets, zoom in for details,
              and make updates—all in one place.
            </p>
          </div>

          {/* Dashboard Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
            <img
              src="/assets//markets-dashboard.png"
              alt="Markets management dashboard"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Sub-features */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Create markets in minutes
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Select who the market is for, pick your products, and you're
                done. Markets can even "inherit" settings from similar markets,
                saving you more time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                "View as" customers in each market
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Preview what people in your different markets see and confirm
                they're getting the right products and pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Different Products Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Different products, different design, different everything
            </h2>
          </div>

          {/* Tailor-made banner */}
          <div className="relative rounded-2xl overflow-hidden mb-16">
            <img
              src="/assets/markets-global.png"
              alt="Global markets illustration"
              className="w-full h-64 md:h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-end p-8 md:p-12">
              <div className="max-w-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  A tailor-made experience
                </h3>
                <p className="text-primary-foreground/80 text-base md:text-lg">
                  Move into more markets and customize everything to give each
                  audience the optimal experience.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-8 h-8 text-shopify-green mb-5" />
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                {feature.badges && (
                  <div className="flex gap-2">
                    {feature.badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build the Best Experience - Tabbed Section */}
      <section className="py-20 md:py-32 bg-markets-section">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-16">
            Build the best experience for each kind of buyer
          </h2>

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">
            {/* Tab buttons */}
            <div className="space-y-2">
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left p-5 rounded-xl transition-all flex items-center gap-4 ${
                    activeTab === i
                      ? "bg-card shadow-md border border-border"
                      : "hover:bg-card/50"
                  }`}
                >
                  <tab.icon
                    className={`w-6 h-6 shrink-0 ${
                      activeTab === i
                        ? "text-shopify-green"
                        : "text-muted-foreground"
                    }`}
                  />
                  <span
                    className={`font-semibold text-base ${
                      activeTab === i
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {tab.label}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 ml-auto transition-transform ${
                      activeTab === i
                        ? "text-foreground rotate-90"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {tabs[activeTab].description}
              </p>
              {tabs[activeTab].bullets.length > 0 && (
                <>
                  <div className="w-full h-px bg-border mb-6" />
                  <ul className="space-y-4">
                    {tabs[activeTab].bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-shopify-green mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Unlock new growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Expand into new markets by creating something custom for
            international, retail, and B2B.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-shopify-green text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
          >
            Start free trial
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Sellery. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Terms", "Privacy", "Sitemap"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Markets;
