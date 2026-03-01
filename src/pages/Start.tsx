import { useState, useEffect } from "react";
import {
  Play,
  ArrowRight,
  Sparkles,
  CreditCard,
  TrendingUp,
  Users,
  MessageSquare,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";

const Start = () => {
  const [email, setEmail] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate merge progress based on scroll (0 = separated, 1 = merged)
  const mergeProgress = Math.min(Math.max((scrollY - 300) / 1000, 0), 1);

  // Responsive height calculation
  const getResponsiveHeight = () => {
    if (windowWidth >= 1024) return 700 + mergeProgress * 400;
    if (windowWidth >= 768) return 500 + mergeProgress * 300;
    return 400; // Mobile
  };

  // Responsive padding calculation
  const getResponsivePadding = () => {
    if (windowWidth >= 1024) return 6 + mergeProgress * 12;
    if (windowWidth >= 768) return 4 + mergeProgress * 6;
    return 3; // Mobile
  };

  const products = [
    {
      name: "Pauline",
      description: "Spotted in the wild",
      price: "$135",
      image:
        "https://cdn.shopify.com/b/shopify-brochure2-assets/0726090bab82a60d929dc80688f39cba.jpg?originalWidth=614&originalHeight=896",
    },
    {
      name: "Sanders",
      description: "Cool and coastal",
      price: "$160",
      image:
        "https://cdn.shopify.com/b/shopify-brochure2-assets/459eddcedf93157bcbbc6b807941801c.jpg?originalWidth=615&originalHeight=896",
    },
    {
      name: "Addie",
      description: "Warm and woodsy",
      price: "$115",
      image:
        "https://cdn.shopify.com/b/shopify-brochure2-assets/e1159473c92cadd3c66ba1d7931785f9.jpg?originalWidth=614&originalHeight=896",
    },
    {
      name: "Sedgewick",
      description: "Lovable loon",
      price: "$180",
      image:
        "https://cdn.shopify.com/b/shopify-brochure2-assets/b5ebf5a673dda6829660d70b7c5166b3.jpg?originalWidth=614&originalHeight=896",
    },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Sell where they're scrolling",
      description: "Put your products where shoppers spend their time.",
    },
    {
      icon: Users,
      title: "Keep them coming back",
      description: "Reengage with a drumbeat of offers and updates.",
    },
  ];

  const helpCards = [
    {
      icon: Sparkles,
      title: "Need more muscle?",
      description: "Sidekick, your built-in AI assistant, can lend a hand",
    },
    {
      icon: MessageSquare,
      title: "Need an expert POV?",
      description: "Podcasts, courses, forums, and blogs teach you the ropes",
    },
    {
      icon: Wallet,
      title: "Need financial support?",
      description: "Sellery can help with the money side of things",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Custom animations */}
      <style>{`
        @keyframes float-bounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-sellery-green/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-sellery-green/5 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main hero image */}
          <div className="relative mb-8 animate-fade-up">
            <img
              src="https://cdn.shopify.com/b/shopify-brochure2-assets/f91dea261974c4ecab6e51eb87fa99e4.jpg?originalWidth=1800&originalHeight=1800"
              alt="Duck product showcase"
              className="w-full max-w-3xl mx-auto rounded-2xl"
            />

            {/* Floating UI cards container */}
            <div className="hidden lg:block">
              {/* Left card - Collections */}
              <div
                className="absolute bg-card/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-border/50 transition-all duration-700 ease-out"
                style={{
                  top: `${10 + mergeProgress * 50}px`,
                  left: `${0 - mergeProgress * 50}px`,
                  transform: `translateX(${-20 + mergeProgress * 20}px) scale(${1 - mergeProgress * 0.3})`,
                  opacity: 1 - mergeProgress * 0.5,
                }}
              >
                <div className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                  Collections
                </div>
                <div className="flex gap-2">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary to-secondary/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sellery-green/10 to-transparent" />
                  </div>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary to-secondary/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sellery-green/10 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Right card - Price */}
              <div
                className="absolute bg-card/95 backdrop-blur-sm p-5 rounded-2xl shadow-2xl border border-border/50 transition-all duration-700 ease-out"
                style={{
                  top: `${10 + mergeProgress * 50}px`,
                  right: `${0 - mergeProgress * 50}px`,
                  transform: `translateX(${-20 + mergeProgress * 40}px) scale(${1 - mergeProgress * 0.3})`,
                  opacity: 1 - mergeProgress * 0.5,
                }}
              >
                <div className="text-2xl font-bold text-foreground mb-3">
                  $135.00
                </div>
                <Button
                  size="sm"
                  className="bg-sellery-green hover:bg-sellery-glow text-primary-foreground w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Buy now
                </Button>
              </div>

              {/* Bottom left card - In stock */}
              <div
                className="absolute bg-card/95 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-border/50 transition-all duration-700 ease-out"
                style={{
                  bottom: `${10 + mergeProgress * 60}px`,
                  left: `${4 - mergeProgress * 54}px`,
                  transform: `translateX(${-16 + mergeProgress * 16}px) scale(${1 - mergeProgress * 0.3})`,
                  opacity: 1 - mergeProgress * 0.5,
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-sellery-green/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-sellery-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    In stock
                  </span>
                </div>
              </div>

              {/* Merged center card - appears as cards merge */}
              <div
                className="absolute bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/50 transition-all duration-700 ease-out overflow-hidden"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) scale(${mergeProgress})`,
                  opacity: mergeProgress,
                  width: "400px",
                  maxWidth: "90vw",
                }}
              >
                <img
                  src="https://cdn.shopify.com/b/shopify-brochure2-assets/387d686a767339fc3a34039c8d7ecb8c.png?originalWidth=1800&originalHeight=1800"
                  alt="Combined view"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Hero text */}
          <h1
            className="hero-title text-6xl sm:text-8xl lg:text-9xl text-foreground mb-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            start<span className="glow-text"> today</span>
          </h1>

          <p
            className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Be selling by tomorrow
          </p>

          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-lg font-semibold animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Start for free
          </Button>
        </div>
      </section>

      {/* Choose your design section - FULLY RESPONSIVE */}
      <section
        className="px-4 sm:px-6 lg:px-8 transition-all duration-700"
        style={{
          paddingTop: windowWidth >= 1024 ? "6rem" : "3rem",
          paddingBottom: `${getResponsivePadding()}rem`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Choose your design
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Start with a stunning prebuilt theme or describe what you want and
              generate a store with AI.
            </p>
          </div>

          {/* Theme showcase - RESPONSIVE */}
          <div
            className="relative transition-all duration-700"
            style={{
              minHeight:
                windowWidth >= 768 ? `${getResponsiveHeight()}px` : "auto",
            }}
          >
            {/* Desktop/Tablet: Absolute positioned cards */}
            {windowWidth >= 768 ? (
              <>
                {/* Left theme card */}
                <div
                  className="absolute bg-card rounded-2xl overflow-hidden shadow-2xl border border-border transition-all duration-700 ease-out"
                  style={{
                    left: `${0 + mergeProgress * 15}%`,
                    width:
                      windowWidth >= 1024
                        ? `${35 - mergeProgress * 10}%`
                        : "45%",
                    transform: `scale(${1 - mergeProgress * 0.15}) translateY(${mergeProgress * 50}px)`,
                    opacity: 1 - mergeProgress * 0.3,
                    zIndex: 10 - Math.floor(mergeProgress * 5),
                  }}
                >
                  <img
                    src="/assets/left-image.png"
                    alt="Theme preview"
                    className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                  />
                  <div className="p-4 lg:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                      Classic Elegance
                    </h3>
                    <p className="text-sm text-muted-foreground hidden sm:block">
                      Perfect for fashion and lifestyle brands
                    </p>
                  </div>
                </div>

                {/* Center merged theme preview - RESPONSIVE */}
                <div
                  className="absolute left-1/2 top-0 bg-card rounded-2xl overflow-hidden shadow-2xl border border-border transition-all duration-700 ease-out"
                  style={{
                    transform: `translateX(-50%) scale(${0.6 + mergeProgress * 0.2})`,
                    width:
                      windowWidth >= 1024
                        ? `${420 + mergeProgress * 660}px`
                        : windowWidth >= 768
                          ? `${Math.min(windowWidth * 0.7, 500)}px`
                          : "90vw",
                    maxWidth:
                      mergeProgress > 0.5
                        ? "95vw"
                        : windowWidth >= 1024
                          ? "420px"
                          : "90vw",
                    opacity: mergeProgress,
                    zIndex: 20,
                  }}
                >
                  <img
                    src="/assets/centre-pic.png"
                    alt="Duck showcase"
                    className="w-full h-full object-cover"
                  />
                  <div className="p-4 sm:p-6 text-center absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                      Your store, your way
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base lg:text-lg">
                      Create something beautiful in minutes
                    </p>
                  </div>
                </div>

                {/* Right theme card */}
                <div
                  className="absolute bg-card rounded-2xl overflow-hidden shadow-2xl border border-border transition-all duration-700 ease-out"
                  style={{
                    right: `${0 + mergeProgress * 15}%`,
                    width:
                      windowWidth >= 1024
                        ? `${35 - mergeProgress * 10}%`
                        : "45%",
                    transform: `scale(${1 - mergeProgress * 0.15}) translateY(${mergeProgress * 50}px)`,
                    opacity: 1 - mergeProgress * 0.3,
                    zIndex: 10 - Math.floor(mergeProgress * 5),
                  }}
                >
                  <img
                    src="/assets/right-image.png"
                    alt="Theme preview"
                    className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                  />
                  <div className="p-4 lg:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                      Modern Minimal
                    </h3>
                    <p className="text-sm text-muted-foreground hidden sm:block">
                      Clean and conversion-focused
                    </p>
                  </div>
                </div>
              </>
            ) : (
              // Mobile: Grid layout (no absolute positioning)
              <div className="grid grid-cols-1 gap-6">
                {/* Just show center card on mobile */}
                <div className="bg-card rounded-2xl overflow-hidden shadow-2xl border border-border">
                  <img
                    src="/assets/centre-pic.png"
                    alt="Duck showcase"
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Your store, your way
                    </h3>
                    <p className="text-muted-foreground text-base">
                      Create something beautiful in minutes
                    </p>
                  </div>
                </div>

                {/* Show left and right cards in a grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-xl overflow-hidden border border-border">
                    <img
                      src="/assets/left-image.png"
                      alt="Theme preview"
                      className="w-full aspect-[3/4] object-cover"
                    />
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-foreground">
                        Classic Elegance
                      </h3>
                    </div>
                  </div>
                  <div className="bg-card rounded-xl overflow-hidden border border-border">
                    <img
                      src="/assets/right-image.png"
                      alt="Theme preview"
                      className="w-full aspect-[3/4] object-cover"
                    />
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-foreground">
                        Modern Minimal
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Make your products shine
            </h2>
            <p className="text-xl text-muted-foreground">
              Add polished product images and descriptions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-background rounded-xl overflow-hidden card-hover border border-border"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold text-sellery-green mt-2">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get ready to get paid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Get ready to get paid
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                All you need is a bank account. Accept all major payment methods
                and get paid fast.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                  <CreditCard className="w-5 h-5 text-sellery-green" />
                  <span className="text-foreground">Credit Cards</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                  <Wallet className="w-5 h-5 text-sellery-green" />
                  <span className="text-foreground">Digital Wallets</span>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border glow-border">
              <img
                src="https://cdn.shopify.com/b/shopify-brochure2-assets/96ec4674edd078dff5d55412601051f2.png?originalWidth=1600&originalHeight=1000"
                alt="Payment dashboard"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get growing section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Get going, then get growing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-background rounded-2xl p-8 card-hover border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-sellery-green/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-sellery-green" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 text-center">
            <p className="text-2xl sm:text-3xl text-foreground font-medium">
              Every <span className="glow-text font-bold">26 seconds</span>,
              someone makes their first sale on Sellery.
            </p>
            <Button
              size="lg"
              className="mt-8 bg-sellery-green hover:bg-sellery-glow text-primary-foreground rounded-full px-8"
            >
              Start making sales
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Help section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {helpCards.map((card) => (
              <div
                key={card.title}
                className="bg-card rounded-2xl p-8 card-hover border border-border group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-sellery-green/10 flex items-center justify-center mb-6 group-hover:bg-sellery-green/20 transition-colors">
                  <card.icon className="w-7 h-7 text-sellery-green" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-background rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-sellery-green/10 flex items-center justify-center">
                <Play className="w-6 h-6 text-sellery-green" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-foreground">See for yourself</h3>
                <p className="text-sm text-muted-foreground">
                  Watch how easy it is to ramp up
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { time: "1:31", title: "Create your store" },
                { time: "7:19", title: "Customize things" },
                { time: "13:39", title: "Add products" },
              ].map((video) => (
                <div
                  key={video.time}
                  className="bg-card rounded-lg p-4 cursor-pointer hover:bg-secondary transition-colors border border-border"
                >
                  <div className="text-xs text-sellery-green font-medium mb-1">
                    {video.time}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    How to
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {video.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-bold text-foreground mb-8">
            Ready to start selling?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
            <Button
              size="lg"
              className="bg-sellery-green hover:bg-sellery-glow text-primary-foreground rounded-full px-8 whitespace-nowrap"
            >
              Start for free
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg
              className="w-8 h-8"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 5 L20 35 M15 8 L15 32 M25 8 L25 32 M18 6 Q14 3 12 7 M22 6 Q26 3 28 7"
                stroke="hsl(var(--shopify-green))"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hero-title text-2xl text-foreground">Sellery</span>
          </div>
          <p className="text-muted-foreground">
            © 2026 Sellery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Start;
