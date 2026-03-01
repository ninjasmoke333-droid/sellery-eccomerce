import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Store,
  ShoppingCart,
  BarChart3,
  Users,
  CreditCard,
  Package,
  Shield,
  Smartphone,
  Monitor,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const faqItems = [
  {
    q: "What is a POS (point of sale)?",
    a: "A point of sale, or POS, is a system used to process transactions and accept payments in person. With Sellery POS, retail businesses get all the tools they need to manage daily operations, accept payments anywhere, and build relationships to create customer loyalty.",
  },
  {
    q: "What are the benefits of using a POS system?",
    a: "A POS system simplifies daily business tasks—from checking out customers to performing inventory counts. It tracks payments, inventory, and customers with every sale, giving you a more accurate picture of your business without extra work.",
  },
  {
    q: "What types of POS systems are there?",
    a: "There are countertop POS systems for permanent stores, mobile POS systems for events and pop-ups, and multichannel POS systems that connect in-store and online sales. Sellery POS supports all of these.",
  },
  {
    q: "How does Sellery POS work?",
    a: "Scan items, the POS calculates the total including tax, select checkout, the customer pays with their preferred method, a receipt is generated, and inventory is automatically updated—all in seconds.",
  },
  {
    q: "Which businesses use Sellery POS?",
    a: "Sellery POS is flexible enough for any retail business at any stage of growth. It's especially valuable for businesses selling both in person and online, keeping inventory, payments, and customers in sync.",
  },
];

const features = [
  {
    icon: ShoppingCart,
    title: "Omnichannel selling",
    desc: "Sell in person, online, on social media, and marketplaces from one connected back office.",
  },
  {
    icon: Users,
    title: "Staff management",
    desc: "Set staff permissions to control what employees can access across your stores.",
  },
  {
    icon: CreditCard,
    title: "Payment processing",
    desc: "Accept popular payment methods at competitive transaction rates.",
  },
  {
    icon: Package,
    title: "Inventory management",
    desc: "Manage inventory across locations and seamlessly integrate your existing systems.",
  },
  {
    icon: Shield,
    title: "Customer management",
    desc: "Capture customer info at checkout and use insights to improve buying experiences.",
  },
  {
    icon: BarChart3,
    title: "Reporting & analytics",
    desc: "Understand your business, from what sells best to when you're busiest.",
  },
];

const softwareTabs = [
  {
    title: "Sell everywhere",
    desc: "Close sales at the counter and keep offline and online orders in sync with Sellery POS.",
  },
  {
    title: "Build loyalty",
    desc: "Know your customers in store and online and create personalized shopping experiences that convert.",
  },
  {
    title: "Simplify tasks",
    desc: "Streamline daily operations with one back office to manage inventory, orders, customers, and staff.",
  },
];

const PosPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden">
        {/* Promo Banner */}
        <div className="bg-pos-hero-bg text-center py-3 px-4">
          <p className="text-base font-semibold text-foreground">
            Get free hardware and more with 1 year of POS Pro — offer worth
            $2,300.{" "}
            <a href="#" className="underline font-bold">
              See more
            </a>
          </p>
        </div>

        {/* Hero Content */}
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/pos-hero.jpg"
              alt="POS System"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
            <p className="text-sm font-extrabold tracking-wider uppercase text-primary mb-4">
              POS SYSTEM
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-foreground leading-tight">
              The point of sale
              <br />
              for every sale
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              From first sale to full scale, today's best brands run on
              Sellery's POS system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a href="#" className="pos-btn-primary text-lg font-bold">
                Start for free
              </a>
              <a
                href="#contact"
                className="pos-btn-secondary text-lg font-bold"
              >
                Get in touch
              </a>
            </div>
            <p className="text-base font-semibold text-foreground/80">
              Already have a Sellery store?{" "}
              <a href="#" className="underline font-bold text-foreground">
                Log in to set up Sellery POS
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Powering Retailers */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl md:text-5xl font-black mb-16 text-foreground">
            Powering retailers of every size
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: "/assets/pos-single-store.jpg",
                title: "Single store",
                desc: "Sell in store with integrated hardware, software, and built-in payments.",
              },
              {
                img: "/assets/pos-multi-store.jpg",
                title: "Multiple stores",
                desc: "Streamline operations with unified data, reporting, and inventory management.",
              },
              {
                img: "/assets/pos-on-the-go.jpg",
                title: "On the go",
                desc: "Use wireless POS software to sell at pop-ups, markets, and more.",
              },
            ].map((card) => (
              <div key={card.title} className="pos-card group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-foreground/80 font-medium leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything You Need */}
      <section className="py-20 md:py-28 bg-pos-section-alt">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground leading-tight">
            Everything you need
            <br />
            in store, online, and beyond
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-foreground/80 max-w-4xl mx-auto mb-16 leading-relaxed">
            It's the power to sell in person backed by the power to sell online,
            all by the world's best commerce platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Store,
                title: "Back office",
                desc: "One place to manage your business across all your locations, in person and online.",
              },
              {
                icon: Monitor,
                title: "POS system",
                desc: "POS hardware and software for smooth selling in store and at events.",
              },
              {
                icon: Smartphone,
                title: "Online sales",
                desc: "The platform to sell everywhere else customers shop: online, on social media, and more.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-4 p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-foreground">
                  {item.title}
                </h3>
                <p className="text-foreground/80 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POS Software */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-extrabold tracking-wider uppercase text-primary mb-4">
              POS SOFTWARE
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
              Connected retail.
              <br />
              The way it should be.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/assets/pos-software.png"
                alt="POS Software interface"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-2">
              {softwareTabs.map((tab, i) => (
                <button
                  key={tab.title}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    activeTab === i
                      ? "bg-primary/10 border border-primary/30"
                      : "hover:bg-muted border border-transparent"
                  }`}
                >
                  <h3
                    className={`text-xl font-black mb-2 ${activeTab === i ? "text-primary" : "text-foreground"}`}
                  >
                    {tab.title}
                  </h3>
                  {activeTab === i && (
                    <p className="text-foreground/80 font-medium leading-relaxed animate-fade-up">
                      {tab.desc}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POS Hardware */}
      <section className="py-20 md:py-28 bg-pos-section-alt">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-sm font-extrabold tracking-wider uppercase text-primary mb-4">
              POS RETAIL HARDWARE
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
              Integrated hardware,
              <br />
              however you sell
            </h2>
          </div>
          <div className="rounded-3xl overflow-hidden mb-16">
            <img
              src="/assets/pos-hardware.jpg"
              alt="POS Hardware"
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Get started quickly",
                desc: "Start selling in no time with reliable hardware that's ready to go out of the box.",
              },
              {
                icon: Shield,
                title: "Sell without interruptions",
                desc: "Keep the checkout line moving with 99.9% uptime across the platform.",
              },
              {
                icon: Package,
                title: "Customize your setup",
                desc: "Choose hardware for your budget and selling scenario—at the counter or on the go.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-black text-foreground">
                  {item.title}
                </h3>
                <p className="text-foreground/80 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary text-lg font-black hover:underline"
            >
              Discover POS hardware <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Payments */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/assets/pos-payments.png"
                alt="Retail Payments"
                className="w-full h-auto"
              />
            </div>
            <div>
              <p className="text-sm font-extrabold tracking-wider uppercase text-primary mb-4">
                Retail Payments
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                Tap into 100M+ new customers
              </h2>
              <p className="text-lg text-foreground/80 font-medium mb-8 leading-relaxed">
                Turn on Sellery Payments and gain access to 100M+ engaged
                shoppers. Grow your customer list while powering every sale with
                a world-class payment processor.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary text-lg font-black hover:underline"
              >
                Meet Sellery Payments <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-pos-section-alt">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-extrabold tracking-wider uppercase text-primary mb-4">
              POS FEATURES
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
              All the features.
              <br />
              All in one place.
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Increase productivity from showroom to back room with everything
              your team needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <div key={feat.title} className="pos-feature-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-2">
                  {feat.title}
                </h3>
                <p className="text-foreground/80 font-medium leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary text-lg font-black hover:underline"
            >
              Explore all features <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            How to get started with Sellery POS
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-foreground/80 max-w-4xl mx-auto mb-16 leading-relaxed">
            Whether you're starting out or switching platforms, we're here to
            help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "01",
                title: "Start for free",
                desc: "Try Sellery POS for free—no credit card required.",
              },
              {
                step: "02",
                title: "Set up your store",
                desc: "Get help every step of the way, from dedicated customer service to POS migration apps.",
              },
              {
                step: "03",
                title: "Customize your solution",
                desc: "Personalize your POS with apps and create custom solutions with partners.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-black text-primary">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-foreground">
                  {item.title}
                </h3>
                <p className="text-foreground/80 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="pos-btn-primary text-lg font-bold">
              Start for free
            </a>
            <a href="#" className="pos-btn-secondary text-lg font-bold">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-pos-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-2">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-lg font-bold text-foreground pr-4">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 animate-fade-up">
                    <p className="text-foreground/80 font-medium leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 md:py-28 bg-foreground">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-background mb-6 leading-tight">
            Start selling with Sellery POS today
          </h2>
          <p className="text-xl font-semibold text-background/80 max-w-2xl mx-auto mb-10">
            Join millions of businesses that trust Sellery to power their retail
            stores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Start for free
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-background/20 text-background font-bold text-lg hover:bg-background/10 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-foreground border-t border-background/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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
              <span className="text-xl font-extrabold italic text-background tracking-tight">
                Sellery
              </span>
            </div>
            <p className="text-background/60 text-sm font-semibold">
              © 2026 Sellery. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PosPage;
