import { useState } from "react";
import { ChevronDown, Menu, X, Play } from "lucide-react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm"
      style={{ zIndex: 1000 }}
    >
      <nav
        className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
        style={{ position: "relative", zIndex: 1001 }}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a
              href="/"
              className="flex items-center gap-2"
              onMouseEnter={() => setSolutionsOpen(false)}
            >
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
              <span
                className="text-3xl md:text-3xl tracking-tight"
                style={{
                  fontFamily: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: 800,
                  fontStyle: "italic",
                  letterSpacing: "-0.025em",
                  lineHeight: 1,
                  color: "hsl(var(--foreground))",
                  display: "inline-block",
                }}
              >
                Sellery
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <div
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
              >
                <button className="nav-link">
                  Solutions <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <a
                href="/pricing"
                className="nav-link"
                onMouseEnter={() => setSolutionsOpen(false)}
              >
                Pricing
              </a>

              <div
                className="relative"
                onMouseEnter={() => setResourcesOpen(true)}
              >
                <button className="nav-link">
                  Resources <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <a
                href="/Enterprise"
                className="nav-link"
                onMouseEnter={() => setResourcesOpen(false)}
              >
                Enterprise
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-sm font-medium hover:bg-secondary/80 transition-colors"
              >
                <span className="text-base">❄️</span>
                Winter Edition
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a href="/Login" className="hidden sm:block nav-link">
              Log in
            </a>
            <a
              href="/Enterprisecontactform"
              className="relative text-sm text-white inline-block"
            >
              <span className="relative z-10">Start for free</span>
              {/* Green glowing underline */}
              <span
                className="absolute bottom-0 left-0 w-full"
                style={{
                  height: "2px",
                  background: "hsl(var(--shopify-green))",
                  boxShadow:
                    "0 0 8px hsl(var(--shopify-green)), 0 0 12px hsl(var(--shopify-green) / 0.5)",
                  animation: "glow-pulse 2s ease-in-out infinite",
                }}
              />
              <style>{`
    @keyframes glow-pulse {
      0%, 100% {
        opacity: 1;
        box-shadow: 0 0 8px hsl(var(--shopify-green)), 0 0 12px hsl(var(--shopify-green) / 0.5);
      }
      50% {
        opacity: 0.8;
        box-shadow: 0 0 12px hsl(var(--shopify-green)), 0 0 20px hsl(var(--shopify-green) / 0.6);
      }
    }
  `}</style>
            </a>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ────────────────────────────────────────────────
          Dropdown moved here — outside <nav>, inside <header>
          All styles are 100% unchanged
      ──────────────────────────────────────────────── */}
      <div
        className="fixed  left-0 right-0 top-0"
        onMouseEnter={() => setSolutionsOpen(true)}
        onMouseLeave={() => setSolutionsOpen(false)}
        style={{
          opacity: solutionsOpen ? 1 : 0,
          visibility: solutionsOpen ? "visible" : "hidden",
          transform: solutionsOpen ? "translateY(0)" : "translateY(-20px)",
          transition:
            "opacity 0.6s ease, transform 0.10s ease, visibility 0.2s",
          pointerEvents: solutionsOpen ? "auto" : "none",
          height: "100vh",
          background: "#000000",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          paddingTop: "64px",
          top: "-10px",
          zIndex: 150,
        }}
      >
        <style>{`
    @media (max-width: 767px) {
      /* Apply to this dropdown on mobile */
      .dropdown-outer {  /* add className="dropdown-outer" to this div */
        height: auto !important;           /* override inline 100vh */
        padding: 16px !important;
      }
      .video-card {  /* add className="video-card" to your 230x230 wrappers */
        height: 180px !important;
        width: 100% !important;
      }
    }

    @media (min-width: 1024px) {
      .dropdown-outer {
        max-width: 1280px !important;
        margin: 0 auto !important;
        left: 50% !important;
        right: auto !important;
        transform: translateX(-50%) translateY(0) !important;
      }
    }
      @media (min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2) and (min-width: 800px) {
  /* High-zoom adjustments */
  .dropdown-outer {
    transform: scale(0.8) translateX(-50%) !important; /* counter-scale if needed */
    max-height: 70vh !important;
  }
}
  `}</style>
        <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 justify-start pt-6">
            <div></div>
            <div>
              <Link
                to="/start"
                className="group block px-4 py-3 text-white/80 hover:bg-white/5 rounded transition-colors"
              >
                <div className="flex flex-col items-start gap-3">
                  <div
                    className="rounded-xl overflow-hidden flex-shrink-0"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      width: "220px",
                      height: "220px",
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/assets/solutions-2.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <h3 className="text-white font-semibold">
                      Get started now
                    </h3>
                    <span className="text-left text-white/70">
                      Build your brand and show the world.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <a
                href="/Sell"
                className="group block px-4 py-3 text-white/80 hover:bg-white/5 rounded transition-colors"
              >
                <div className="flex flex-col items-start gap-3">
                  <div
                    className="rounded-xl overflow-hidden flex-shrink-0"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      width: "220px",
                      height: "220px",
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/assets/solutions-3.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    {" "}
                    {/* ← gap-0.5 = very small gap */}
                    <h3 className="text-white font-semibold">Use Sellery</h3>
                    <span className="text-left text-white/70">
                      Get more customers and clients.
                    </span>{" "}
                    {/* optional: lower opacity for subtitle feel */}
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a
                href="Afiiliate"
                className="group block px-4 py-3 text-white/80 hover:bg-white/5 rounded transition-colors"
              >
                <div className="flex flex-col items-start gap-3">
                  <div
                    className="rounded-xl overflow-hidden flex-shrink-0"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      width: "220px",
                      height: "220px",
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/assets/solutions-4.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    {" "}
                    {/* ← gap-0.5 = very small gap */}
                    <h3 className="text-white font-semibold">
                      Affiliated with household names
                    </h3>
                    <span className="text-left text-white/70">
                      Stand alongside businesses of all sizes.
                    </span>{" "}
                    {/* optional: lower opacity for subtitle feel */}
                  </div>
                </div>
              </a>
            </div>

            <div className="flex flex-col gap-6 ">
              {/* First video box */}
              <div className="pb-3">
                <h4
                  style={{
                    color: "hsl(var(--shopify-green))",
                    textShadow:
                      "0 0 8px hsl(var(--shopify-green)), 0 0 12px hsl(var(--shopify-green))",
                    animation: "glow-pulse 2s ease-in-out infinite",
                  }}
                >
                  Built into every store
                </h4>

                <style>{`
      @keyframes glow-pulse {
        0%, 100% {
          text-shadow: 0 0 8px hsl(var(--shopify-green)), 0 0 12px hsl(var(--shopify-green));
        }
        50% {
          text-shadow: 0 0 12px hsl(var(--shopify-green)), 0 0 20px hsl(var(--shopify-green));
        }
      }
    `}</style>
              </div>

              <div className="flex flex-col gap-7">
                <Link to="/CheckoutPage">
                  <div
                    className="rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      width: "200px",
                      height: "120px",
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/assets/solutions-5.mp4" type="video/mp4" />
                      <img
                        src="/path/to/fallback-image1.jpg"
                        alt="Feature 1 fallback"
                        className="w-full h-full object-cover"
                      />
                    </video>
                  </div>
                </Link>
                <div className="flex flex-col items-start gap-0.5">
                  {" "}
                  {/* ← gap-0.5 = very small gap */}
                  <h3 className="text-white font-semibold">
                    XO card usage with sql database
                  </h3>
                  <span className="text-left text-white/70">
                    Proven to have true scalability and reliability.
                  </span>{" "}
                  {/* optional: lower opacity for subtitle feel */}
                </div>

                <Link to="/SidekickPage" className="block">
                  <div className="flex flex-col gap-7">
                    {/* Second image box */}
                    <div
                      className="rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        width: "200px",
                        height: "120px",
                      }}
                    >
                      <img
                        src="\assets\sellery-sidekick-mascot.png"
                        alt="Privacy and GDPR safety"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-0.5">
                      <h3 className="text-white font-semibold">
                        Sellery Sidekick Ai Assistant
                      </h3>
                      <span className="text-left text-white/70">
                        give me a try, i can help with all your eccomerce needs.
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* resources drop down */}

      <div
        className="fixed  left-0 right-0 top-10"
        onMouseEnter={() => setResourcesOpen(true)}
        onMouseLeave={() => setResourcesOpen(false)}
        style={{
          opacity: resourcesOpen ? 1 : 0,
          visibility: resourcesOpen ? "visible" : "hidden",
          transform: resourcesOpen ? "translateY(0)" : "translateY(-20px)",
          transition:
            "opacity 0.6s ease, transform 0.10s ease, visibility 0.2s",
          pointerEvents: resourcesOpen ? "auto" : "none",
          height: "100vh",
          background: "#000000",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          paddingTop: "64px",
          top: "0px",
          zIndex: 150,
        }}
      >
        <style>{`
    @media (max-width: 767px) {
      /* Apply to this dropdown on mobile */
      .dropdown-outer {  /* add className="dropdown-outer" to this div */
        height: auto !important;           /* override inline 100vh */
        padding: 16px !important;
      }
      .video-card {  /* add className="video-card" to your 230x230 wrappers */
        height: 180px !important;
        width: 100% !important;
      }
    }

    @media (min-width: 1024px) {
      .dropdown-outer {
        max-width: 1280px !important;
        margin: 0 auto !important;
        left: 50% !important;
        right: auto !important;
        transform: translateX(-50%) translateY(0) !important;
      }
    }
      @media (min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2) and (min-width: 800px) {
  /* High-zoom adjustments */
  .dropdown-outer {
    transform: scale(0.8) translateX(-50%) !important; /* counter-scale if needed */
    max-height: 70vh !important;
  }
}
  `}</style>

        <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-5 pl-10 pt-4 pb-3 justify-around">
            {/* ── COLUMN 1: Help & Support ────────────────────────── */}
            <div className="flex flex-col gap-1 min-w-[210px]">
              <h4
                className="text-xs font-semibold uppercase tracking-widest mb-5 pl-3"
                style={{ color: "hsl(var(--shopify-green))" }}
              >
                BUILD YOUR WEBSITE
              </h4>

              {[
                {
                  title: "Website Builder",
                  sub: "Get 24/7 support",
                  link: "/WebsiteBuilder",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M10 6a3 3 0 0 1 3 3c0 1.5-2 2-2 3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <circle cx="10" cy="15" r="0.75" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  title: "Themess",
                  sub: "Uniform with your shops theme",
                  link: "/ThemeStore",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M3 4h6a2 2 0 0 1 2 2v9a1 1 0 0 0-2 0H3V4z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 4h-6a2 2 0 0 0-2 2v9a1 1 0 0 1 2 0h6V4z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Domains",
                  sub: "Find the right domain for your business",
                  link: "/Domains",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 3L2 7l8 4 8-4-8-4z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 9v4a4 4 0 0 0 8 0V9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M16 8v6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Sellery Sidekick",
                  sub: "Business strategy tips",
                  link: "/SidekickPage",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect
                        x="2"
                        y="3"
                        width="16"
                        height="13"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M6 8h8M6 11h5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
              ].map((item) =>
                item.link ? (
                  <Link
                    key={item.title}
                    to={item.link}
                    className="group flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-white/5"
                  >
                    <span className="mt-0.5 text-white/40 group-hover:text-white/70 transition-colors flex-shrink-0">
                      {item.icon}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-white/85 text-sm font-medium group-hover:text-white transition-colors">
                        {item.title}
                      </span>
                      <span className="text-white/40 text-xs">{item.sub}</span>
                    </div>
                  </Link>
                ) : (
                  <a
                    key={item.title}
                    href="#"
                    className="group flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-white/5"
                  >
                    <span className="mt-0.5 text-white/40 group-hover:text-white/70 transition-colors flex-shrink-0">
                      {item.icon}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-white/85 text-sm font-medium group-hover:text-white transition-colors">
                        {item.title}
                      </span>
                      <span className="text-white/40 text-xs">{item.sub}</span>
                    </div>
                  </a>
                ),
              )}
            </div>

            {/* ── COLUMN 2: Popular Topics ────────────────────────── */}
            <div className="flex flex-col gap-1 min-w-[220px]">
              <h4
                className="text-xs font-semibold uppercase tracking-widest mb-5 pl-3"
                style={{ color: "hsl(var(--shopify-green))" }}
              >
                Sell Anywhere
              </h4>

              {[
                {
                  title: "Online",
                  sub: "Learn from successful merchants",
                  link: "/Online",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle
                        cx="7"
                        cy="6"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M2 17c0-3 2-5 5-5s5 2 5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="14"
                        cy="7"
                        r="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M14 12c2 0 4 1.5 4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Point of Sale",
                  sub: "The point of sale for every sale",
                  link: "/PosPage",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M10 6v4l3 2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Social & Marketplaces",
                  sub: "Sell your products anywhere",
                  link: "/SalesChannels",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 2L3 6v6c0 4 3 6 7 7 4-1 7-3 7-7V6l-7-4z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 10l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Global & International",
                  sub: "Sell across Borders",
                  link: "/International",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M3 14l4-4 3 3 7-8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 5h4v4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Ecommerce SEO",
                  sub: "Improve your search ranking",
                  link: "/B2BEcommerce",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle
                        cx="8.5"
                        cy="8.5"
                        r="5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 12l4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Social media strategy",
                  sub: "Turn social into sales",
                  link: "/Markets",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle
                        cx="5"
                        cy="10"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="15"
                        cy="5"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="15"
                        cy="15"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M7.2 9l5.6-3M7.2 11l5.6 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  ),
                },
              ].map((item) =>
                item.link ? (
                  <Link
                    key={item.title}
                    to={item.link}
                    className="group flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-white/5"
                  >
                    <span className="mt-0.5 text-white/40 group-hover:text-white/70 transition-colors flex-shrink-0">
                      {item.icon}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-white/85 text-sm font-medium group-hover:text-white transition-colors">
                        {item.title}
                      </span>
                      <span className="text-white/40 text-xs">{item.sub}</span>
                    </div>
                  </Link>
                ) : (
                  <a
                    key={item.title}
                    href="#"
                    className="group flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-white/5"
                  >
                    <span className="mt-0.5 text-white/40 group-hover:text-white/70 transition-colors flex-shrink-0">
                      {item.icon}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-white/85 text-sm font-medium group-hover:text-white transition-colors">
                        {item.title}
                      </span>
                      <span className="text-white/40 text-xs">{item.sub}</span>
                    </div>
                  </a>
                ),
              )}
            </div>

            {/* ── COLUMN 3: Essential Tools ───────────────────────── */}
            <div className="flex flex-col gap-6 lg:gap-5">
              <div className="flex flex-col gap-1 min-w-[180px]">
                <h4
                  className="text-xs font-semibold uppercase tracking-widest mb-5 pl-3"
                  style={{ color: "hsl(var(--shopify-green))" }}
                >
                  Essential tools
                </h4>
                {[
                  {
                    title: "Marketing",
                    link: "/MarketingPage",
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="14"
                          height="14"
                          rx="3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <circle
                          cx="7.5"
                          cy="7.5"
                          r="1.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        />
                        <path
                          d="M3 14l4-3 3 2 4-4 3 5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Analytics",
                    link: "/AnalyticsPage",
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="4"
                          width="16"
                          height="12"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <circle
                          cx="7"
                          cy="8.5"
                          r="1.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        />
                        <path
                          d="M2 13l4-3 3 2 5-4 4 5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Orders",
                    link: "/OrdersPage",
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5 2h7l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 2v4h4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 9h6M7 12h4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "QR code generator",
                    link: "/QRGeneratorPage",
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="6"
                          height="6"
                          rx="1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <rect
                          x="12"
                          y="2"
                          width="6"
                          height="6"
                          rx="1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <rect
                          x="2"
                          y="12"
                          width="6"
                          height="6"
                          rx="1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 10h2v2h-2zM16 10h2v2h-2zM12 14h2v2h-2zM16 14h2v2h-2z"
                          fill="currentColor"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Ai Chat Bot",
                    link: "/SidekickPage",
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="6"
                          height="6"
                          rx="1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <rect
                          x="12"
                          y="2"
                          width="6"
                          height="6"
                          rx="1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <rect
                          x="2"
                          y="12"
                          width="6"
                          height="6"
                          rx="1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 10h2v2h-2zM16 10h2v2h-2zM12 14h2v2h-2zM16 14h2v2h-2z"
                          fill="currentColor"
                        />
                      </svg>
                    ),
                  },
                ].map((item) =>
                  item.link ? (
                    <Link
                      key={item.title}
                      to={item.link}
                      className="group flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-white/5"
                    >
                      <span className="mt-0.5 text-white/40 group-hover:text-white/70 transition-colors flex-shrink-0">
                        {item.icon}
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-white/85 text-sm font-medium group-hover:text-white transition-colors">
                          {item.title}
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <a
                      key={item.title}
                      href="#"
                      className="group flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-white/5"
                    >
                      <span className="mt-0.5 text-white/40 group-hover:text-white/70 transition-colors flex-shrink-0">
                        {item.icon}
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-white/85 text-sm font-medium group-hover:text-white transition-colors">
                          {item.title}
                        </span>
                      </div>
                    </a>
                  ),
                )}
              </div>
            </div>

            {/* ── COLUMN 3: always evolving ───────────────────────── */}
            <div className="flex flex-col gap-4 lg:gap-2 justify-end">
              <h4
                className="text-xs font-semibold uppercase tracking-widest mb-5 pb-0"
                style={{ color: "hsl(var(--shopify-green))" }}
              >
                Always Evolving
              </h4>
              <div className="flex flex-col gap-1 min-w-[180px] h-full pb-6 pt-0">
                <div
                  className="rounded-xl overflow-hidden pt-0"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",

                    height: "120px",
                  }}
                >
                  <img
                    src="/assets/editions-1.png"
                    alt="Solutions feature"
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-4">
            <button className="w-full flex items-center justify-between py-2 text-foreground">
              Solutions <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#" className="block py-2 text-foreground">
              Pricing
            </a>
            <button className="w-full flex items-center justify-between py-2 text-foreground">
              Resources <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#" className="block py-2 text-foreground">
              Enterprise
            </a>
            <a href="#" className="block py-2 text-foreground">
              Log in
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-sm font-medium"
            >
              <span className="text-base">❄️</span>
              Winter Edition
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
