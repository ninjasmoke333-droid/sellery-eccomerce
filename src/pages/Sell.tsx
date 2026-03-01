import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Users,
  Globe,
  TrendingUp,
  ShoppingCart,
  RefreshCw,
  Zap,
  Clock,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ═══════════════════════════════════════════════════════════════════════════════
// HERO SECTION
// ═══════════════════════════════════════════════════════════════════════════════
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/sell-hero-1.png')`,
        opacity: 0.9, // Adjust this to make image more/less visible
      }}
    />

    {/* Dark overlay to ensure text readability */}
    <div className="absolute inset-0 bg-black/60" />

    {/* Subtle background gradient - much less blur */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 50% 40%, rgba(95, 189, 114, 0.15) 0%, transparent 70%)",
      }}
    />

    <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Main Headlines */}
      <div className="mb-8">
        <h1
          className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-2"
          style={{ lineHeight: 0.9 }}
        >
          More bang.
        </h1>
        <h1
          className="text-7xl md:text-8xl lg:text-9xl font-black text-white"
          style={{ lineHeight: 0.9 }}
        >
          Less buck.
        </h1>
      </div>

      {/* Subheadline */}
      <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
        Businesses do better on Sellery. It's a fact.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Start for free <ArrowRight className="w-5 h-5" />
        </a>
        <a
          href="#contact-sales"
          className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold hover:border-white/40 transition-colors"
        >
          Make your move
        </a>
      </div>

      {/* Brand Marquee */}
      <div className="relative overflow-hidden py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-16 mx-8">
              {[
                "MATTEL",
                "POPPI",
                "TECOVAS",
                "DRSQUATCH",
                "GLOSSIER",
                "RUGGABLE",
                "ALO",
                "VUORI",
                "ALLBIRDS",
              ].map((brand) => (
                <div
                  key={`${setIndex}-${brand}`}
                  className="text-gray-400 text-4xl font-black tracking-wider opacity-80 hover:opacity-100 transition-opacity"
                >
                  {brand}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </div>

    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
      }
    `}</style>
  </section>
);

// ═══════════════════════════════════════════════════════════════════════════════
// MORE CUSTOMERS SECTION
// ═══════════════════════════════════════════════════════════════════════════════
const MoreCustomersSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Get discovered across AI platforms",
      description:
        "Get your products recommended to shoppers on platforms from ChatGPT to Perplexity.",
    },
    {
      icon: Users,
      title: "Reach valuable customers on the Shop app",
      description:
        "Unlock a built-in channel with millions of verified shoppers worldwide—with saved payment details and shopping preferences ready to go.",
    },
    {
      icon: Globe,
      title: "Expand into new markets",
      description:
        "Get a store that flexes to fit multiple regions, retail locations, and B2B buyers. Each market gets its own customized shopping experience.",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">More customers</h2>
          <p className="text-xl text-muted-foreground">
            Hyperextend your reach with Sellery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-glass p-8 group hover:border-shopify-green/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: "hsl(var(--shopify-green) / 0.1)" }}
              >
                <feature.icon
                  className="w-6 h-6"
                  style={{ color: "hsl(var(--shopify-green))" }}
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// MORE SALES SECTION
// ═══════════════════════════════════════════════════════════════════════════════
const MoreSalesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const stats = [
    {
      icon: TrendingUp,
      percentage: "36%",
      title: "More conversions",
      description:
        "Sellery checkout with Shop Pay converts up to 36% higher than the competition.",
    },
    {
      icon: ShoppingCart,
      percentage: "10%",
      title: "More units per transaction",
      description:
        "Shop Pay users buy 10% more products with each transaction.",
    },
    {
      icon: RefreshCw,
      percentage: "77%",
      title: "More returning customers",
      description:
        "Shop Pay users are 77% more likely to come back and buy again.",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">More sales</h2>
          <p className="text-xl text-muted-foreground">
            Unleash the highest-converting checkout on the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="card-glass p-8 h-full transition-all duration-500 hover:scale-[1.02]"
                style={{
                  borderColor:
                    hoveredIndex === index
                      ? "hsl(var(--shopify-green) / 0.4)"
                      : undefined,
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                  style={{ background: "hsl(var(--shopify-green) / 0.1)" }}
                />
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "hsl(var(--shopify-green) / 0.1)" }}
                  >
                    <stat.icon
                      className="w-8 h-8"
                      style={{ color: "hsl(var(--shopify-green))" }}
                    />
                  </div>
                  <span className="stat-number mb-4">{stat.percentage}</span>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {stat.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// LESS SPEND SECTION
// ═══════════════════════════════════════════════════════════════════════════════
const LessSpendSection = () => {
  const stats = [
    {
      number: "36%",
      title: "Lower total cost of ownership",
      description:
        "TCO is lower on Sellery compared to other commerce platforms.",
    },
    {
      number: "23%",
      title: "Lower platform fees",
      description:
        "Cut platform costs by up to 23% and operation costs by up to 19% when you build on Sellery.",
    },
    {
      number: "150+",
      title: "Updates shipped 2x per year",
      description:
        "Sellery never stops shipping new innovations. So your dev team can focus on other things.",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, hsl(var(--shopify-green) / 0.03) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">Less spend</h2>
          <p className="text-xl text-muted-foreground">
            Keep more of what you make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="text-center p-8 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm hover:border-shopify-green/30 transition-all duration-300"
            >
              <div
                className="text-6xl md:text-7xl font-extrabold mb-4"
                style={{
                  color: "hsl(var(--shopify-green))",
                  textShadow: "0 0 40px hsl(var(--shopify-green) / 0.3)",
                }}
              >
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {stat.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// MIGRATE SECTION
// ═══════════════════════════════════════════════════════════════════════════════
const MigrateSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Keep selling as you move",
      description:
        "Continue making sales and keep your SEO ranking intact as you migrate your data.",
    },
    {
      icon: Clock,
      title: "Relocate in record time",
      description:
        "It's faster to move to Sellery than other platforms. No wonder 1000s of businesses migrate here each year.",
    },
    {
      icon: Users,
      title: "Get help along the way",
      description:
        "Streamline your move with game-changing replatforming apps and migration experts.",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            Migrate to Sellery.
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            It's easier than you think.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "hsl(var(--shopify-green) / 0.1)" }}
              >
                <feature.icon
                  className="w-7 h-7"
                  style={{ color: "hsl(var(--shopify-green))" }}
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-glass p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center"
                style={{ background: "hsl(var(--shopify-green) / 0.1)" }}
              >
                <span className="text-4xl">🎾</span>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-4 italic">
                "We've seen over 20% increase in conversions without employing
                any new marketing tactics"
              </blockquote>
              <cite className="text-muted-foreground not-italic">
                <span className="font-semibold text-foreground">
                  Juda Honickman
                </span>
                <span className="mx-2">·</span>CMO, Slinger
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// CTA SECTION
// ═══════════════════════════════════════════════════════════════════════════════
const CTASection = () => (
  <section
    className="py-24 md:py-32 relative overflow-hidden"
    id="contact-sales"
  >
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
      style={{ background: "hsl(var(--shopify-green))" }}
    />

    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-8 tracking-tight">
          Why would you sell
          <br />
          anywhere else?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#" className="btn-primary group text-lg px-8 py-4">
            Start for free{" "}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#" className="btn-secondary text-lg px-8 py-4">
            Talk to sales
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════════
const Sell = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MoreCustomersSection />
        <MoreSalesSection />
        <LessSpendSection />
        <MigrateSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Sell;
