import Navbar from "@/components/Navbar";
import {
  ChevronDown,
  Globe,
  CreditCard,
  Languages,
  TrendingUp,
  Package,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";



import Footer from "@/components/Footer";

// Optional: if you want to keep images as imports later
// import enterpriseBg from "@/assets/enterprise-global.jpg";
// import midmarketBg from "@/assets/midmarket-growth.jpg";
// import smallbizBg from "@/assets/smallbiz-world.jpg";
// etc.

const International = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "hsl(var(--warm-sand))" }}
    >
      <Navbar />

      {/* Sub-navigation bar */}
      <div
        className="sticky top-16 z-40 border-b"
        style={{
          background: "hsl(var(--warm-sand))",
          borderColor: "rgba(0,0,0,0.08)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 h-12 text-sm font-medium">
            <a href="#" className="font-semibold" style={{ color: "hsl(var(--foreground))" }}>
              International
            </a>
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="#managed"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Managed Markets
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8"
        style={{
          background:
            "linear-gradient(180deg, hsl(20 80% 92% / 0.6) 0%, hsl(var(--warm-sand)) 100%)",
          backgroundImage: `url('/assets/international-1.png')`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1400px] mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-6"
            style={{ color: "hsl(var(--foreground))" }}
          >
            INTERNATIONAL SALES
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
            <span style={{ color: "hsl(var(--shopify-teal))" }}>Sell</span>{" "}
            <span style={{ color: "hsl(var(--foreground))" }}>across borders.</span>
            <br />
            <span style={{ color: "hsl(var(--shopify-teal))" }}>Scale</span>{" "}
            <span style={{ color: "hsl(var(--foreground))" }}>without limits.</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-black max-w-3xl mx-auto mb-10 tracking-tight">
            Wherever you want to go with global commerce, Sellery can take you there.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-105"
            style={{
              background: "hsl(var(--foreground))",
              color: "hsl(var(--background))",
            }}
          >
            Get started
          </a>
        </div>
      </section>

      {/* Hero Image / Stats + Brands */}
      <section
        className="px-4 sm:px-6 lg:px-8 pb-20 pt-20"
        style={{
          background:
            "linear-gradient(180deg, hsl(20 80% 92% / 0.6) 0%, hsl(var(--warm-sand)) 100%)",
          
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1300px] mx-auto">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              height: "500px",
              backgroundImage: `url('/assets/worldwide-1.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full flex items-end justify-center relative">
              {/* Overlay stats cards */}
              <div className="absolute top-8 left-8 flex flex-col gap-4 z-20">
                {[
                  { flag: "🇨🇦", label: "Sales", value: "8%" },
                  { flag: "🇬🇧", label: "Sales", value: "12%" },
                  { flag: "🇦🇺", label: "Sales", value: "4%" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-5 py-3 rounded-2xl backdrop-blur-lg shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
                    style={{ background: "rgba(255, 255, 255, 0.94)" }}
                  >
                    <span className="text-2xl font-semibold text-black">{stat.flag}</span>
                    <span className="text-base font-semibold text-black">{stat.label}</span>
                    <span className="text-lg font-extrabold text-black flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-black" /> {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Brand logos */}
              <div className="absolute bottom-8 left-0 right-0 px-8 z-20">
                <div className="flex items-center justify-center gap-10 flex-wrap">
                  {[
                    "Mr Beast",
                    "Jones Road",
                    "Fiyah",
                    "Walk London",
                    "Suri",
                    "Made by Mary",
                  ].map((brand) => (
                    <div
                      key={brand}
                      className="px-6 py-3 rounded-2xl backdrop-blur-lg text-base font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30"
                      style={{
                        background: "rgba(255, 255, 255, 0.92)",
                        color: "#000000",
                      }}
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Platform Section */}
<section
  className="py-20 px-4 sm:px-6 lg:px-8"
  style={{
    background: "black",
    color: "white",
  }}
>
  <div className="max-w-[1400px] mx-auto text-center mb-16">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
      The platform built for global success
    </h2>
    <p className="text-lg opacity-90 max-w-3xl mx-auto">
      At Sellery, global commerce isn't a nice-to-have. It's why we're here. We empower millions of merchants across 170+ countries to build and run their business.
    </p>
  </div>

  <div className="max-w-[1000px] mx-auto flex flex-wrap justify-center gap-6">
    {["Paiement", "결제", "Afrekenen", "Zur Kasse", "Checkout"].map((word) => (
      <div
        key={word}
        className="px-6 py-3 rounded-full border text-lg font-medium"
        style={{ borderColor: "rgba(255,255,255,0.25)" }}
      >
        {word}
      </div>
    ))}
  </div>
</section>

      {/* Three Feature Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "hsl(var(--warm-sand))" }}>
        <div className="max-w-[1400px] mx-auto">
          <h2
            className="text-4xl sm:text-5xl font-bold text-center mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Create a world of opportunity
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
  title: "Explore new markets fearlessly",
  desc: "Accelerate your global expansion and find new international buyers with minimal effort and no upfront costs.",
  icon: <Globe className="w-8 h-8" />,
  bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", 
  // New alternative: abstract digital globe / network lines (bright, modern, reliable Unsplash photo)
},
              {
                title: "Run the world from one store",
                desc: "Control your international storefronts and optimize for every region you sell to efficiently with a single store and central back office.",
                icon: <Package className="w-8 h-8" />,
                bg: "https://images.unsplash.com/photo-1551434678-e076c223a692", // glowing map
              },
              {
                title: "Sell more by localizing",
                desc: "Boost conversion up to 40% and build buyer trust everywhere you want to sell with integrated tools that make it easy to localize your store.",
                icon: <Languages className="w-8 h-8" />,
                bg: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg", // workspace + globe
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1"
                style={{ background: "hsl(0 0% 100%)" }}
              >
                <div
                  className="h-48"
                  style={{
                    backgroundImage: `url(${card.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="p-8 flex flex-col gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      background: "hsl(var(--shopify-green) / 0.1)",
                      color: "hsl(var(--shopify-green))",
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "hsl(var(--foreground))" }}>
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - already has image, left as-is */}

     {/* Global Commerce Features */}
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "hsl(var(--warm-sand))" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-center mb-4 text-muted-foreground">
            GLOBAL COMMERCE
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-center mb-6"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Features that fuel international sales
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            When you sell with Sellery, all the features you need to localize
            your store are already in your admin. Local currencies, payment
            methods, languages, and more will help you give global customers a
            familiar shopping experience.
          </p>
          <div className="flex justify-center mb-16">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: "hsl(var(--shopify-green))" }}
            >
              Explore features <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Localization visual with subtle bg */}
<div className="max-w-[900px] mx-auto">
  <div
    className="rounded-2xl overflow-hidden relative"
    style={{
      background: "linear-gradient(135deg, hsl(174 40% 90%), hsl(200 40% 90%))",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url('https://images.unsplash.com/photo-1565098772267-60af42b81ef2?auto=format&fit=crop&q=60')`,  // ← changed to subtle world map
        backgroundSize: "cover",
        opacity: 0.12,  // keep or drop to 0.08–0.10 if still too present
        zIndex: 0,
      }}
    />
    <div className="p-8 sm:p-12 relative z-10">
      {/* your grid of country cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* ... unchanged ... */}
      </div>
    </div>
  </div>
</div>

          {/* Feature icons grid - unchanged */}
        </div>
      </section>

      

     {/* FAQ */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "hsl(var(--warm-sand))" }}
      >
        <div className="max-w-[800px] mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Frequently asked questions
          </h2>
          {[
            {
              q: "How can I start selling internationally?",
              a: 'Everything you need to sell worldwide is built into the admin of every Sellery store. Go to your Settings menu and select "Markets" to find tools that can be optimized to improve conversion in all your chosen markets.',
            },
            {
              q: "How do I translate my store?",
              a: "It's easy to manually translate your ecommerce store into dozens of different languages with the Translate & Adapt app that's built directly into your settings. You can also translate your entire store with free auto-translations.",
            },
            {
              q: "What payment options should I offer international buyers?",
              a: "Preferred payment methods vary from region to region. By activating a market, merchants can offer international buyers payment methods that are popular in their country.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="border-b"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <h3
                  className="text-lg font-semibold pr-4"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  {faq.q}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform text-muted-foreground ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <p className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Final CTA */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "hsl(var(--warm-sand))" }}
      >
        <div className="max-w-[800px] mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: "hsl(var(--foreground))" }}
          >
            The best brands are going global. Be one of them.
          </h2>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-105"
            style={{
              background: "hsl(var(--foreground))",
              color: "hsl(var(--background))",
            }}
          >
            Get started
          </a>
        </div>
      </section>
      <Footer />

      {/* CTA, FAQ, Final CTA - no images needed, left as-is */}
      {/* ... rest of your sections unchanged ... */}
    </div>
  );
};

export default International;