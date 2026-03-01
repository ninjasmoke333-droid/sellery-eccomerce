import {
  ArrowRight,
  Sparkles,
  Search,
  Globe,
  Smartphone,
  ShieldCheck,
  Server,
  CreditCard,
  Grip,
  Palette,
  Image,
  PenTool,
  BookOpen,
  Link2,
  ChevronDown,
} from "lucide-react";
import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

const WebsiteBuilder = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        {/* Floating product images */}
        <div className="hidden lg:block">
          <img
            src="/assets/product-jacket.png"
            alt="Product"
            className="absolute top-24 left-0 w-52 rounded-2xl animate-float opacity-80"
          />
          <img
            src="/assets/product-sneakers.png"
            alt="Product"
            className="absolute top-20 right-0 w-44 rounded-2xl animate-float-delayed opacity-80"
          />
        </div>

        {/* Color dots decoration */}
        <div className="hidden lg:flex absolute top-56 left-48 gap-2 z-20">
          {[
            "bg-cyan-400",
            "bg-pink-400",
            "bg-emerald-400",
            "bg-gray-600",
            "bg-gray-400",
          ].map((c, i) => (
            <div key={i} className={`w-8 h-8 rounded-full ${c}`} />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto mt-12 lg:mt-20">
          <div className="card-glass px-8 py-12 sm:px-12 sm:py-16 relative overflow-hidden">
            {/* Background image with opacity */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 -z-10 scale-130"
              style={{ backgroundImage: "url('/assets/web-build-1.jpg')" }}
            />

            <div className="relative z-10">
              <p
                className="text-xl sm:text-2xl uppercase tracking-[0.2em] text-black font-bold mb-4"
                style={{
                  textShadow:
                    "2px 2px 0 white, -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white",
                }}
              >
                Sellery Website Builder
              </p>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-black"
                style={{
                  textShadow:
                    "3px 3px 0 white, -3px -3px 0 white, 3px -3px 0 white, -3px 3px 0 white",
                }}
              >
                Your vision, our canvas
              </h1>
              <p
                className="text-black mx-auto text-xl sm:text-2xl font-semibold"
                style={{
                  textShadow:
                    "2px 2px 0 white, -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white",
                }}
              >
                Create a stunning store with Sellery's website builder—made for
                effortless editing and bold ideas.
              </p>
            </div>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-foreground text-background font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Start building for free <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Try Sellery for free, then get 3 months for ₱1/month.
          </p>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="feature-card p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                AI-Powered
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Create a custom website with AI
            </h2>
            <p className="text-muted-foreground">
              Generate a personalized storefront with our built-in, AI-powered
              functionality for commerce.
            </p>
          </div>
          <div className="feature-card p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Palette className="w-5 h-5 text-primary" />
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                Templates
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Or start with a customizable template
            </h2>
            <p className="text-muted-foreground">
              Pick from hundreds of feature-packed themes—used by millions of
              existing businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Theme Carousel */}
      <section className="py-12 overflow-hidden">
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {[
            {
              name: "GOST",
              category: "Books",
              theme: "Taste theme",
              price: "Free",
              image: "/assets/wed-des-temp-1.jpg",
              link: "/themes/gost",
            },
            {
              name: "MY SKIN FEELS",
              category: "Health & Beauty",
              theme: "Dawn theme",
              price: "Free",
              image: "assets/wed-des-temp-2.jpg",
              link: "/themes/my-skin-feels",
            },
            {
              name: "DAPPER BOI",
              category: "Clothing",
              theme: "Testament theme",
              price: "₱350",
              image: "assets/wed-des-temp-3.jpg",
              link: "/themes/dapper-boi",
            },
            {
              name: "AUSTIN MOTEL",
              category: "Hospitality",
              theme: "Taste theme",
              price: "Free",
              image: "assets/wed-des-temp-4.jpg",
              link: "/themes/austin-motel",
            },
            {
              name: "CHOMP",
              category: "Clothing",
              theme: "Dawn theme",
              price: "Free",
              image: "assets/wed-des-temp-5.jpg",
              link: "/themes/chomp",
            },
            {
              name: "FIADH",
              category: "Accessories",
              theme: "Dawn theme",
              price: "Free",
              image: "assets/wed-des-temp-6.jpg",
              link: "/themes/fiadh",
            },
            {
              name: "GOST",
              category: "Books",
              theme: "Taste theme",
              price: "Free",
              image: "assets/wed-des-temp-1.jpg",
              link: "/themes/gost",
            },
            {
              name: "MY SKIN FEELS",
              category: "Health & Beauty",
              theme: "Dawn theme",
              price: "Free",
              image: "assets/wed-des-temp-2.jpg",
              link: "/themes/my-skin-feels",
            },
            {
              name: "DAPPER BOI",
              category: "Clothing",
              theme: "Testament theme",
              price: "₱350",
              image: "assets/wed-des-temp-3.jpg",
              link: "/themes/dapper-boi",
            },
            {
              name: "AUSTIN MOTEL",
              category: "Hospitality",
              theme: "Taste theme",
              price: "Free",
              image: "assets/wed-des-temp-4.jpg",
              link: "/themes/austin-motel",
            },
            {
              name: "CHOMP",
              category: "Clothing",
              theme: "Dawn theme",
              price: "Free",
              image: "assets/wed-des-temp-5.jpg",
              link: "/themes/chomp",
            },
            {
              name: "FIADH",
              category: "Accessories",
              theme: "Dawn theme",
              price: "Free",
              image: "assets/wed-des-temp-6.jpg",
              link: "/themes/fiadh",
            },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="flex-shrink-0 w-96 mx-4 block group"
            >
              <div className="h-[560px] rounded-xl mb-3 overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-bold tracking-wide">{item.name}</h3>
              <p className="text-xs text-muted-foreground">{item.category}</p>
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-muted-foreground">
                  {item.theme}
                </span>
                <span className="text-xs font-semibold text-primary">
                  {item.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* No-Code Builder Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">
            Make your mark, no code needed
          </h2>
          <p className="section-subtext mx-auto">
            Unleash your brand with the online store editor's no-code tools. We
            made them for visionaries, not tech wizards.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:underline"
          >
            Try it out <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Grip,
              title: "Build with drag and drop",
              desc: "Effortlessly create new pages or switch up your layout with editable sections. Your site, your rules.",
              img: "/assets/builder-dragdrop.png",
            },
            {
              icon: PenTool,
              title: "Flex your style",
              desc: "Change fonts, colors, and styles with editable theme settings for a consistent, polished look.",
              img: "/assets/builder-images.png",
            },
            {
              icon: Image,
              title: "Transform product images",
              desc: "Level up your product photos with AI-enabled image editing. No design skills needed.",
              img: "/assets/builder-ai.png",
            },
          ].map((f, i) => (
            <div key={i} className="feature-card group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <f.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold">{f.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO & Marketing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">
            Get noticed with marketing & SEO tools
          </h2>
          <p className="section-subtext mx-auto">
            Sellery sites are optimized for discoverability so you can grow your
            reach while you sleep.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Search,
              title: "Integrated SEO controls",
              desc: "Auto-generated title tags, meta descriptions, and sitemaps.",
            },
            {
              icon: BookOpen,
              title: "Built-in blogging",
              desc: "Publish and manage content to keep your audience engaged.",
            },
            {
              icon: Link2,
              title: "Custom domain support",
              desc: "Find and claim your domain right within your admin.",
            },
            {
              icon: Smartphone,
              title: "Mobile-ready out of the box",
              desc: "Responsive design is the default with Sellery.",
            },
          ].map((f, i) => (
            <div key={i} className="feature-card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Ready */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">
            Every site is business-ready from day one
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              img: "/assets/feature-checkout.jpg",
              icon: CreditCard,
              title: "Unbeatable checkout",
              desc: "Every Sellery site comes with the world's best-converting checkout, built right in.",
            },
            {
              img: "/assets/feature-hosting.png",
              icon: Server,
              title: "Free, reliable hosting",
              desc: "Our globally distributed servers and speed-optimized storefronts won't leave visitors hanging.",
            },
            {
              img: "/assets/feature-security.png",
              icon: ShieldCheck,
              title: "Secure by default",
              desc: "All Sellery sites are PCI compliant and SSL certified, protecting your business and customer data.",
            },
          ].map((f, i) => (
            <div key={i} className="feature-card">
              <div className="aspect-square overflow-hidden">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <f.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">{f.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Steps CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="card-glass p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="section-heading mb-4">Start building for free</h2>
          <p className="section-subtext mx-auto mb-10">
            Get started with a free 3-day trial, then enjoy 3 months for ₱1.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Get started <ArrowRight className="w-5 h-5" />
          </a>

          <div className="grid sm:grid-cols-3 gap-8 mt-16 text-left">
            {[
              {
                step: "01",
                text: "Generate a site with AI. Or start by customizing a theme.",
              },
              {
                step: "02",
                text: "Use the online store editor to customize sections, menus, and navigation.",
              },
              {
                step: "03",
                text: "Add products and connect a payment provider to start selling.",
              },
            ].map((s, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-3xl font-bold text-primary/30">
                  {s.step}
                </span>
                <p className="text-sm text-muted-foreground font-medium">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="section-heading text-center mb-12">
          Frequently asked questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "What is a website builder?",
              a: "A website builder is a tool that allows you to create a website without needing to write code. Sellery's website builder lets you design, customize, and launch a professional online store with drag-and-drop simplicity.",
            },
            {
              q: "Is Sellery's website builder free?",
              a: "You can start with a free 3-day trial. After that, plans start at just ₱1/month for the first 3 months, giving you access to all the tools you need to build and grow your online business.",
            },
            {
              q: "Can I use my own domain name?",
              a: "Yes! You can purchase a new domain directly through Sellery or connect an existing domain you already own. Custom domains help establish your brand identity online.",
            },
            {
              q: "Do I need coding skills?",
              a: "Not at all. Sellery's website builder is designed for everyone. With drag-and-drop editing, customizable templates, and AI-powered tools, you can build a stunning site without writing a single line of code.",
            },
          ].map((item, i) => (
            <details key={i} className="group feature-card">
              <summary className="p-6 cursor-pointer flex justify-between items-center font-semibold list-none">
                {item.q}
                <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-sm text-muted-foreground">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-[1400px] mx-auto text-center">
          <span
            className="text-2xl tracking-tight"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontStyle: "italic",
            }}
          >
            Sellery
          </span>
          <p className="mt-4 text-sm text-muted-foreground">
            © 2026 Sellery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WebsiteBuilder;
