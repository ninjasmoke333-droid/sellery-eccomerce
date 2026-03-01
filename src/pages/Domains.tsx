import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Check,
  Search,
  Lock,
  Shield,
  Globe,
  Settings,
  ArrowRight,
  Mail,
  RefreshCw,
  Link2,
  MoveRight,
} from "lucide-react";

import Navbar from "@/components/Navbar";

const Domains = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const checkpoints = [
    "Powerful online store",
    "Instant domain configuration",
    "No technical setup",
    "Free, unlimited hosting",
  ];

  const featureCards = [
    {
      title: "Get online in minutes",
      description:
        "Make your corner of the internet as unique as your domain. Choose from hundreds of themes or design with the magic of AI.",
      image: "/assets/domains-storefront.png",
    },
    {
      title: "Instantly direct to your storefront",
      description:
        "Skip manual DNS configurations. Domains purchased through Sellery are automatically connected to your store.",
      image: "/assets/domains-hosting.png",
    },
  ];

  const featureCardsSmall = [
    {
      title: "Never miss a site visit",
      description:
        "Reliable, unlimited web hosting is included with every Sellery plan.",
      image: "/assets/domains-hosting.png",
    },
    {
      title: "Grow near and far",
      description:
        "Build local credibility by adding and managing up to 20 domains per store.",
      image: "/assets/domains-hosting.png",
    },
    {
      title: "Turn clicks to cash",
      description:
        "Every Sellery site comes with secure payment processing built right in.",
      image: "/assets/domains-hosting.png",
    },
  ];

  const managementFeatures = [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Settings and controls",
      description:
        "Configure DNS, CNAME, and A Records from your Sellery admin.",
    },
    {
      icon: <ArrowRight className="w-5 h-5" />,
      title: "Redirects",
      description: "Set up URL redirects to consolidate links and improve SEO.",
    },
    {
      icon: <Link2 className="w-5 h-5" />,
      title: "Connections",
      description:
        "Point your third-party domain to your Sellery store in a few clicks.",
    },
    {
      icon: <MoveRight className="w-5 h-5" />,
      title: "Transfers",
      description:
        "Migrate third-party domains to manage everything within Sellery.",
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Renewals",
      description:
        "Keep your domain active with automatic, hassle-free renewals.",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email forwarding",
      description: "Easily set up custom domain email forwarding addresses.",
    },
  ];

  const securityFeatures = [
    {
      icon: <Lock className="w-5 h-5" />,
      text: "Free, automatic SSL certificate.",
      sub: "No encryption purchase needed.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "WHOIS Privacy protection.",
      sub: "Included with eligible extensions.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      text: "24/7 support.",
      sub: "Chat, call, read guides, or watch videos.",
    },
  ];

  const faqs = [
    {
      q: "Is Sellery a domain registrar?",
      a: "Sellery sells domains as a reseller through accredited registrar partners. Your domain is registered in your name and managed from your Sellery admin, and you can transfer it out at any time.",
    },
    {
      q: "What are the benefits of buying a domain through Sellery?",
      a: "Seamless setup with auto-connection to your store, one dashboard for everything, hosting included, automatic SSL, consolidated billing, free email forwarding, and 24/7 support.",
    },
    {
      q: "How much does a domain cost?",
      a: "Domain prices vary by extension (TLD). With Sellery, domains typically start at $9 USD/year, billed annually. This includes registration, automatic renewal, and free WHOIS privacy protection.",
    },
    {
      q: "Do I need to purchase hosting?",
      a: "No. All Sellery plans come with secure web hosting that includes unlimited bandwidth, fast servers, and automatic updates.",
    },
    {
      q: "What is a domain and why should I buy one?",
      a: "A domain is your web address — the digital equivalent of a store's physical address. A custom domain helps customers find you and builds a professional online presence.",
    },
  ];

  const resources = [
    {
      title: "Domain pricing explained",
      description:
        "How much should you pay for a custom domain? We compare prices across registrars, categories, and TLDs.",
      link: "#",
    },
    {
      title: "Choosing the right domain",
      description:
        "Tips on picking the perfect domain name for your business or personal brand.",
      link: "#",
    },
    {
      title: "Domain SEO explained",
      description:
        "Your choice of domain name can significantly impact SEO rankings.",
      link: "#",
    },
    {
      title: "Tips for domain registration",
      description:
        "Top considerations and how-to's for registering your business's custom domain name.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "hsl(0 0% 0%)" }}>
      <Navbar />

      {/* ═══════ HERO SECTION ═══════ */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 domains-hero-dots">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight leading-tight"
            style={{
              color: "hsl(var(--foreground))",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Set up shop with the perfect domain
          </h1>
          <p
            className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
            style={{ color: "hsl(0 0% 70%)" }}
          >
            Register, host, and manage it from the same place you do business.
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div
              className="relative flex items-center rounded-full overflow-hidden"
              style={{ background: "hsl(0 0% 15%)" }}
            >
              <Search
                className="absolute left-5 w-6 h-6"
                style={{ color: "hsl(0 0% 50%)" }}
              />
              <input
                type="text"
                placeholder="Search domains"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="domains-search-input pl-14 pr-44 text-lg"
              />
              <button className="domains-search-btn absolute right-2 text-base font-semibold">
                Search domains
              </button>
            </div>
          </div>

          {/* Checkpoints */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {checkpoints.map((cp) => (
              <div key={cp} className="flex items-center gap-3">
                <span className="sellery-green-check">
                  <Check
                    className="w-4 h-4"
                    style={{ color: "hsl(0 0% 0%)" }}
                  />
                </span>
                <span
                  className="text-base font-medium"
                  style={{ color: "hsl(0 0% 80%)" }}
                >
                  {cp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHITE SECTIONS ═══════ */}
      <div className="domains-section-white">
        {/* Your domain, ready for business */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-16 leading-tight"
            style={{
              color: "hsl(0 0% 100%)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Your domain, ready for business
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {featureCards.map((card) => (
              <div key={card.title} className="domains-feature-card">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-lg leading-relaxed font-medium"
                    style={{ color: "hsl(0 0% 90%)" }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featureCardsSmall.map((card) => (
              <div key={card.title} className="domains-feature-card">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed font-medium"
                    style={{ color: "hsl(0 0% 90%)" }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Name it, claim it, manage it */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
            style={{
              color: "hsl(0 0% 100%)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Name it, claim it, manage it.
            <br />
            <span style={{ color: "hsl(0 0% 85%)" }}>All in one place.</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {managementFeatures.map((feat) => (
              <div key={feat.title} className="domains-management-card">
                <div className="sellery-green-text mb-4">{feat.icon}</div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "hsl(0 0% 100%)" }}
                >
                  {feat.title}
                </h3>
                <p
                  className="text-base leading-relaxed font-medium"
                  style={{ color: "hsl(0 0% 85%)" }}
                >
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Security section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-16 leading-tight"
            style={{
              color: "hsl(0 0% 100%)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Rest easy with a secure domain
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {securityFeatures.map((feat) => (
              <div key={feat.text} className="flex items-start gap-4">
                <span className="sellery-green-text mt-1">{feat.icon}</span>
                <div>
                  <p
                    className="font-bold text-lg mb-1"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    {feat.text}
                  </p>
                  <p
                    className="text-base font-medium"
                    style={{ color: "hsl(0 0% 85%)" }}
                  >
                    {feat.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Connect to a world of possibility */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-16 leading-tight"
            style={{
              color: "hsl(0 0% 100%)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Connect to a world of possibility
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="domains-feature-card">
              <img
                src="/assets/domains-seo.png"
                alt="Rank higher"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "hsl(0 0% 100%)" }}
                >
                  Rank higher
                </h3>
                <p
                  className="text-lg leading-relaxed font-medium"
                  style={{ color: "hsl(0 0% 90%)" }}
                >
                  Show search engines you mean business with your custom domain
                  and Sellery's built-in SEO features.
                </p>
              </div>
            </div>
            <div className="domains-feature-card">
              <img
                src="/assets/domains-credibility.png"
                alt="Build credibility"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "hsl(0 0% 100%)" }}
                >
                  Build business credibility
                </h3>
                <p
                  className="text-lg leading-relaxed font-medium"
                  style={{ color: "hsl(0 0% 90%)" }}
                >
                  A custom domain lets you claim your corner of the internet
                  with a professional online presence.
                </p>
              </div>
            </div>
          </div>

          <div className="domains-feature-card">
            <img
              src="/assets/domains-extensions.png"
              alt="Domain extensions"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-8">
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                Stand out with the right domain extension
              </h3>
              <p
                className="text-lg leading-relaxed font-medium"
                style={{ color: "hsl(0 0% 90%)" }}
              >
                Pick from hundreds of TLDs to target a specific audience,
                establish a niche, or expand into global markets.
              </p>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-12"
            style={{
              color: "hsl(0 0% 100%)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((r) => (
              <a
                key={r.title}
                href={r.link}
                className="group domains-management-card hover:shadow-lg transition-shadow"
              >
                <h3
                  className="font-bold text-lg mb-3 group-hover:underline"
                  style={{ color: "hsl(0 0% 100%)" }}
                >
                  {r.title}
                </h3>
                <p
                  className="text-base mb-4 leading-relaxed font-medium"
                  style={{ color: "hsl(0 0% 85%)" }}
                >
                  {r.description}
                </p>
                <span className="text-base font-semibold sellery-green-text">
                  Read more →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-12"
            style={{
              color: "hsl(0 0% 100%)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            FAQs
          </h2>
          <div
            className="max-w-3xl space-y-0 divide-y"
            style={{ borderColor: "hsl(0 0% 30%)" }}
          >
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full flex items-center justify-between py-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span
                    className="font-bold text-lg pr-4"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className="w-6 h-6 flex-shrink-0 transition-transform"
                    style={{
                      color: "hsl(0 0% 80%)",
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0)",
                    }}
                  />
                </button>
                {openFaq === i && (
                  <div
                    className="pb-6 text-base leading-relaxed font-medium"
                    style={{ color: "hsl(0 0% 85%)" }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
            style={{
              color: "hsl(0 0% 100%)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Not ready to buy a custom domain?
          </h2>
          <p
            className="text-xl md:text-2xl mb-10 font-semibold"
            style={{ color: "hsl(0 0% 85%)" }}
          >
            Start building with a free Sellery-branded subdomain and decide on a
            custom domain later.
          </p>
          <a
            href="/signup"
            className="inline-block px-10 py-4 rounded-full text-lg font-bold transition-all sellery-green-bg hover:opacity-90"
            style={{ color: "hsl(0 0% 0%)" }}
          >
            Start for free
          </a>
        </section>
      </div>
    </div>
  );
};

export default Domains;
