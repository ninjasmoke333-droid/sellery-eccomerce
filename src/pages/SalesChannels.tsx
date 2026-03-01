import {
  Store,
  Users,
  Search,
  LayoutGrid,
  ShoppingBag,
  Handshake,
  Megaphone,
  Smartphone,
} from "lucide-react";

import Navbar from "@/components/Navbar";

const SalesChannels = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="px-6 pt-24 pb-20 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-foreground mb-4">
              Sales Channels
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              Sell everywhere people scroll, search, and shop
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Find millions of new customers, sell your products everywhere, and
              manage it all from one place.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity">
              Start free trial
            </button>
            <p className="text-sm text-muted-foreground mt-4">
              Try free for 3 days, no credit card required.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-card rounded-2xl shadow-xl p-4 w-64">
              <img
                src="/assets/purple-cup.png"
                alt="Purple Cup product"
                className="w-full rounded-xl mb-3"
              />
              <p className="font-semibold text-card-foreground">Purple Cup</p>
              <p className="text-card-foreground">$18.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Categories */}
      <section className="px-6 md:px-12 lg:px-20 pb-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Store,
              title: "Marketplaces",
              desc: "Connect your product catalog to the top online marketplaces like Amazon, Walmart, eBay, and more.",
              href: "#marketplaces",
            },
            {
              icon: Users,
              title: "Social media",
              desc: "Turn followers into customers on Facebook, Instagram, YouTube, and TikTok.",
              href: "#social-media",
            },
            {
              icon: Search,
              title: "Online search",
              desc: "Get your products in front of anyone searching across Google surfaces.",
              href: "#online-search",
            },
            {
              icon: LayoutGrid,
              title: "More sales channels",
              desc: "Sell in person, B2B, internationally, and in any of our many channels across the largest commerce ecosystem.",
              href: "#more-sales-channels",
            },
          ].map(({ icon: Icon, title, desc, href }) => (
            <a key={title} href={href} className="group block">
              <Icon
                className="w-8 h-8 text-foreground mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:underline">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Marketplaces Section */}
      <section
        id="marketplaces"
        className="bg-section-alt py-24 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">
            Marketplaces
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Reach customers ready to shop
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
            Sync your product catalog to the leading marketplaces, then easily
            manage and fulfill every order in one central place.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                name: "Amazon",
                desc: "Trusted by customers worldwide: Grow your business with powerful, cost-effective tools and programs.",
              },
              {
                name: "Target Plus",
                desc: "Join one of America's top discovery destinations and reach millions of customers.",
              },
              {
                name: "Walmart",
                desc: "Reach a built-in audience of loyal customers on one of the fastest growing marketplaces.",
              },
              {
                name: "eBay",
                desc: "Get your products in front of millions of new shoppers on one of the most trusted online marketplaces.",
              },
            ].map(({ name, desc }) => (
              <div
                key={name}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h4 className="text-lg font-bold text-card-foreground mb-2">
                  {name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Marketplace Connect */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                Marketplace Connect
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The top marketplaces in one place
              </h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Use Marketplace Connect to sync your product catalog to the
                leading online marketplaces. Manage inventory with real-time
                syncing, fulfill orders, and measure channel performance.
              </p>
              <button className="border-2 border-foreground text-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-foreground hover:text-background transition-colors">
                Install Marketplace Connect
              </button>
            </div>
            <img
              src="/assets/marketplace-connect.png"
              alt="Marketplace connections diagram"
              className="rounded-2xl w-full"
            />
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm font-semibold text-muted-foreground mb-1">
              Discover different marketplaces
            </p>
            <p className="text-muted-foreground text-sm">
              Find other popular marketplaces in the App Store.
            </p>
            <a
              href="#"
              className="text-foreground font-semibold text-sm underline underline-offset-4 mt-2 inline-block hover:opacity-70 transition-opacity"
            >
              Explore more marketplaces →
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social-media" className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">
            Social Media
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            From followers to customers
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
            Sell on the most popular social platforms, build brand loyalty, and
            easily manage it all.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                name: "Facebook & Instagram",
                desc: "Sync your products to leverage powerful selling tools on Facebook and Instagram.",
                cta: "Install Facebook & Instagram app",
              },
              {
                name: "TikTok",
                desc: "Boost sales with creative content that converts the next generation of customers.",
                cta: "Install TikTok app",
              },
              {
                name: "YouTube",
                desc: "Help viewers discover your products and shop directly from your videos, shorts, and livestreams.",
                cta: "Install Google & YouTube app",
              },
            ].map(({ name, desc, cta }) => (
              <div
                key={name}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h4 className="text-lg font-bold text-card-foreground mb-2">
                  {name}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {desc}
                </p>
                <a
                  href="#"
                  className="text-foreground font-semibold text-sm underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  {cta}
                </a>
              </div>
            ))}
          </div>

          <img
            src="/assets/social-channels.png"
            alt="Social media channels dashboard"
            className="rounded-2xl w-full max-w-4xl mx-auto mb-12"
          />

          <div className="border-t border-border pt-8">
            <p className="text-sm font-semibold text-muted-foreground mb-1">
              Discover more social channels
            </p>
            <p className="text-muted-foreground text-sm">
              Connect to sell and advertise on more popular social channels.
            </p>
            <a
              href="#"
              className="text-foreground font-semibold text-sm underline underline-offset-4 mt-2 inline-block hover:opacity-70 transition-opacity"
            >
              Explore more social channels →
            </a>
          </div>
        </div>
      </section>

      {/* Online Search Section */}
      <section
        id="online-search"
        className="bg-section-alt py-24 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">
            Online Search
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Help customers find your products everywhere online
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
            Sync your products to Google and show them for free across surfaces
            like Search, Shopping, Images, and Lens.
          </p>

          <img
            src="/assets/google-search.png"
            alt="Google search product results"
            className="rounded-2xl w-full max-w-4xl mx-auto mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Sell across Google
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Get in front of anyone on Google's many surfaces by syncing your
                products, listing them for free, and creating campaigns. Then
                improve your ROI with insights, and predict customer behavior
                with built-in AI.
              </p>
              <button className="border-2 border-foreground text-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-foreground hover:text-background transition-colors">
                Install Google & YouTube app
              </button>
            </div>
            <div className="space-y-6">
              <blockquote className="bg-card rounded-2xl p-6 border border-border">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "Creator Marques Brownlee and Atoms used YouTube video to
                  drive 140K visitors to their online store with 60% of sales
                  coming from new customers."
                </p>
              </blockquote>
              <blockquote className="bg-card rounded-2xl p-6 border border-border">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "Blu Technology experienced 258% growth, streamlined channel
                  management, and prevented $40K in fraud since implementing
                  Marketplace Connect."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* More Sales Channels Section */}
      <section
        id="more-sales-channels"
        className="py-24 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">
            More Sales Channels
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Expand your business with endless channel options
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16 text-lg">
            From selling in person with POS to teaming up with creators, explore
            ways to grow your business with channels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: "/assets/pos-retail.png",
                icon: ShoppingBag,
                title: "POS",
                subtitle: "Unify your online and in-person selling",
                desc: "Start selling in person from the same place you sell online.",
                cta: "Learn about POS",
              },
              {
                img: "/assets/collective.png",
                icon: Handshake,
                title: "Collective",
                subtitle: "Cross-sell products with other stores",
                desc: "Effortless way for stores to connect and sell each other's products.",
                cta: "Learn about Collective",
              },
              {
                img: "/assets/collabs.png",
                icon: Megaphone,
                title: "Collabs",
                subtitle: "Team up with creators to sell more",
                desc: "Connect with creators to sell your products to their audiences.",
                cta: "Learn about Collabs",
              },
              {
                img: "/assets/shop-app.png",
                icon: Smartphone,
                title: "Shop App",
                subtitle: "Reach and retain more customers",
                desc: "Connect with 150M+ engaged shoppers and instantly grow your brand presence.",
                cta: "Learn more about Shop",
              },
            ].map(({ img, icon: Icon, title, subtitle, desc, cta }) => (
              <div key={title} className="group">
                <div className="overflow-hidden rounded-2xl mb-4">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                  <h4 className="font-bold text-foreground">{title}</h4>
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  {subtitle}
                </p>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {desc}
                </p>
                <a
                  href="#"
                  className="text-foreground font-semibold text-sm underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Learn Section */}
      <section className="bg-section-alt py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Learn how to optimize your multi-channel strategy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/assets/blog-multichannel.jpg",
                title: "What is multichannel selling?",
                desc: "Get the essential tips for building a successful multichannel selling strategy.",
              },
              {
                img: "/assets/blog-omnichannel.jpg",
                title: "Omnichannel vs multichannel: what is the difference?",
                desc: "Discover the difference between omnichannel and multichannel, and why it matters.",
              },
              {
                img: "/assets/blog-omnichannel-experience.jpg",
                title: "Omnichannel customer experiences",
                desc: "Get inspired by five brands that built an outstanding omnichannel experience.",
              },
            ].map(({ img, title, desc }) => (
              <a key={title} href="#" className="group block">
                <div className="overflow-hidden rounded-2xl mb-4">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:underline">
                  {title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Start selling in channels
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Try free, and explore all the tools and services you need to start,
            run, and grow your business.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity">
            Start free trial
          </button>
        </div>
      </section>
    </div>
  );
};

export default SalesChannels;
