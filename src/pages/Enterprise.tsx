import Footer from "@/components/Footer";
import Navbar from "../components/Navbar"; // or "./Navbar" depending on your file structure
import { useState, useEffect, useRef } from "react";
// Make sure Navbar is imported from your existing component, e.g.:
// import Navbar from "./Navbar";

// ─── CSS Variables & Global ──────────────────────────────────────
const globalStyles = `
  :root {
    --shopify-green: 95, 209, 103;
    --shopify-green-hex: #5fd167;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', system-ui, sans-serif; }
  .enterprise-page {
    background: #0a0a0a;
    color: #fff;
    min-height: 100vh;
    overflow-x: hidden;
  }
  /* scrollbar */
  .enterprise-page::-webkit-scrollbar { width: 6px; }
  .enterprise-page::-webkit-scrollbar-track { background: #111; }
  .enterprise-page::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }

  /* marquee */
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track { animation: marquee 30s linear infinite; }

  /* fade-up reveal */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* glowing pill buttons */
  .btn-primary {
    display: inline-flex; align-items: center; justify-content: center;
    background: hsl(var(--shopify-green));
    color: #000;
    font-weight: 600; font-size: 0.875rem;
    padding: 0.65rem 1.5rem;
    border-radius: 999px;
    border: none; cursor: pointer;
    transition: box-shadow 0.3s, transform 0.15s;
    text-decoration: none;
  }
  .btn-primary:hover {
    box-shadow: 0 0 24px rgba(95,209,103,0.45);
    transform: translateY(-1px);
  }
  .btn-outline {
    display: inline-flex; align-items: center; justify-content: center;
    background: transparent;
    color: #fff;
    font-weight: 500; font-size: 0.875rem;
    padding: 0.65rem 1.5rem;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.25);
    cursor: pointer;
    transition: border-color 0.3s, background 0.3s;
    text-decoration: none;
  }
  .btn-outline:hover {
    border-color: rgba(255,255,255,0.6);
    background: rgba(255,255,255,0.05);
  }

  /* tabs */
  .tab-btn {
    background: none; border: none; color: rgba(255,255,255,0.45);
    font-size: 0.85rem; font-weight: 500; padding: 0.5rem 1rem;
    border-radius: 999px; cursor: pointer;
    transition: color 0.2s, background 0.2s;
    white-space: nowrap;
  }
  .tab-btn.active {
    color: #000;
    background: hsl(var(--shopify-green));
  }
  .tab-btn:not(.active):hover { color: #fff; background: rgba(255,255,255,0.08); }
`;




// ─── Reveal Hook ─────────────────────────────────────────────────
function useReveal() {
  const refs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } });
    }, { threshold: 0.15 });
    refs.current.forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  const addRef = (el) => { if (el && !refs.current.includes(el)) refs.current.push(el); };
  return addRef;
}

// ─── Enterprise Page Body ───────────────────────────────────────
export default function EnterprisePage() {
  const addRef = useReveal();

  // tabs state
  const [solutionTab, setSolutionTab] = useState("B2C");
  const [whyTab, setWhyTab] = useState("checkout");
  const [partnerTab, setPartnerTab] = useState("service");

  const solutionCards = {
    "B2C": {
      title: "B2C",
      desc: "Outshine competitors with expressive storefronts, the world's best-converting checkout, and fully customisable solutions across your frontend and backend.",
      gradient: "linear-gradient(135deg, #1a2a1a 0%, #0f1a0f 100%)",
    },
    "B2B": {
      title: "B2B",
      desc: "Conduct wholesale commerce on a global scale with B2B selling essentials reimagined for modern enterprise — from hyper-personalised experiences to self-serve buying.",
      gradient: "linear-gradient(135deg, #1a1a2a 0%, #0f0f1a 100%)",
    },
    "Retail": {
      title: "Retail",
      desc: "Conquer retail with a connected platform that gives you a unified customer view, a powerful POS app, and fully integrated hardware for every retail use case.",
      gradient: "linear-gradient(135deg, #2a1a1a 0%, #1a0f0f 100%)",
    },
  };

  const whyCards = {
    checkout: {
      title: "The world's best-converting checkout",
      desc: "Sellery's conversion rate outpaces the competition by up to 36%. When Shop Pay is used, it can rise up to 50%.",
    },
    storefronts: {
      title: "Fast & immersive global storefronts",
      desc: "With 300 points of presence worldwide, Sellery's infrastructure won't leave your customers hanging.",
    },
    developers: {
      title: "Tools by developers, for developers",
      desc: "Robust documentation, CLI tools, and flexible APIs make for a world-class developer experience.",
    },
  };

  const partners = {
    service: ["WPP", "Globant", "Ranosys", "Viseo", "SAI Digital", "CLEARgo", "Overdose", "SmartOSC", "CQL"],
    technology: ["Salesforce", "SAP", "Adobe", "Oracle", "Microsoft", "AWS", "Google Cloud", "Stripe", "PayPal"],
  };

  // ── Section: Hero ──
  const HeroSection = () => (
    <section style={{
      position: "relative", zIndex: 0, minHeight: "90vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", textAlign: "center", padding: "6rem 1.5rem 4rem",
      background: "linear-gradient(180deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)",
      overflow: "hidden",
    }}>
      {/* bg glow */}
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(95,209,103,0.08) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-10%", left: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(95,209,103,0.04) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div className="reveal" ref={addRef} style={{ position: "relative", zIndex: 1, maxWidth: 780 }}>
        <span style={{
          display: "inline-block", background: "rgba(95,209,103,0.12)", border: "1px solid rgba(95,209,103,0.25)",
          color: "hsl(var(--shopify-green))", fontSize: "0.75rem", fontWeight: 600,
          letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.35rem 1rem", borderRadius: 999, marginBottom: 28,
        }}>
          Sellery for Enterprise
        </span>
        <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 4.2rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", marginBottom: 24 }}>
          The world's most<br />
          <span style={{ color: "hsl(var(--shopify-green))" }}>innovative</span> commerce platform
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: 560, margin: "0 auto 36px" }}>
          Unlock unprecedented growth on the platform that keeps enterprises ahead. Built for scale, designed for speed.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#" className="btn-primary">Get in touch</a>
          <a href="#" className="btn-outline">Try Sellery</a>
        </div>
      </div>
    </section>
  );

  // ── Section: Logo Marquee ──
  const MarqueeSection = () => {
    const logos = ["Secretlab", "Rhinoshield", "Mattel", "Banana Republic", "Glossier", "Tommy Hilfiger", "Nike", "Allbirds", "Dollar Shave Club", "Gymshark"];
    return (
      <section style={{ padding: "2.5rem 0", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", overflow: "hidden", background: "#0d0d0d" }}>
        <div className="marquee-track" style={{ display: "flex", gap: 48, whiteSpace: "nowrap", width: "max-content" }}>
          {[...logos, ...logos].map((name, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
              <div style={{ width: 32, height: 32, borderRadius: 6, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem", fontWeight: 700 }}>{name[0]}</span>
              </div>
              <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.82rem", fontWeight: 500 }}>{name}</span>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // ── Section: Recognition Cards ──
  const RecognitionSection = () => {
    const cards = [
      { tag: "Partnerships", title: "Sellery & Oracle launch new partnership", desc: "New partnership pairs Oracle's market-leading finance and supply chain apps with Sellery's unified commerce platform.", link: "Read the announcement" },
      { tag: "IDC Recognition", title: "Sellery named Leader in IDC B2C Commerce Platforms", desc: "Recognised as a leader in IDC's evaluation of commerce solutions for retailers from $100M and beyond.", link: "Read the report" },
      { tag: "Analyst Recognition", title: "Named a Leader in the 2025 Gartner® Magic Quadrant™", desc: "Leader for Digital Commerce for the 3rd consecutive year — positioned highest for Ability to Execute.", link: "Read the report" },
    ];
    return (
      <section style={{ padding: "4rem 1.5rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {cards.map((c, i) => (
            <div key={i} className="reveal" ref={addRef} style={{ animationDelay: `${i * 0.1}s` }}>
              <div style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "1.75rem",
                height: "100%", display: "flex", flexDirection: "column",
                transition: "border-color 0.3s, transform 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(95,209,103,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <span style={{ color: "hsl(var(--shopify-green))", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>{c.tag}</span>
                <h3 style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.4, marginBottom: 10 }}>{c.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", lineHeight: 1.55, flex: 1 }}>{c.desc}</p>
                <a href="#" style={{ color: "hsl(var(--shopify-green))", fontSize: "0.78rem", fontWeight: 500, textDecoration: "none", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 4 }}>
                  {c.link} <span style={{ fontSize: "0.9rem" }}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // ── Section: Solutions (Tabbed) ──
  const SolutionsSection = () => (
    <section style={{ padding: "5rem 1.5rem", maxWidth: 1100, margin: "0 auto" }}>
      <div className="reveal" ref={addRef} style={{ textAlign: "center", marginBottom: 48 }}>
        <span style={{ color: "hsl(var(--shopify-green))", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em" }}>Solutions</span>
        <h2 style={{ color: "#fff", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.02em", marginTop: 10, marginBottom: 12 }}>
          One platform for every way you sell
        </h2>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", maxWidth: 520, margin: "0 auto" }}>
          Operate your B2C, B2B, and retail markets with software built for customisation, productivity, and revenue growth.
        </p>
      </div>

      {/* Tabs */}
      <div className="reveal" ref={addRef} style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 32, background: "rgba(255,255,255,0.04)", borderRadius: 999, padding: 4, width: "fit-content", margin: "0 auto 32px" }}>
        {["B2C", "B2B", "Retail"].map(t => (
          <button key={t} className={`tab-btn ${solutionTab === t ? "active" : ""}`} onClick={() => setSolutionTab(t)}>{t}</button>
        ))}
      </div>

      {/* Card */}
      <div className="reveal" ref={addRef} style={{
        background: solutionCards[solutionTab].gradient,
        border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "3rem",
        display: "flex", gap: "3rem", alignItems: "center", flexWrap: "wrap",
      }}>
        <div style={{ flex: 1, minWidth: 260 }}>
          <h3 style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 700, marginBottom: 16, letterSpacing: "-0.02em" }}>{solutionCards[solutionTab].title}</h3>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.7 }}>{solutionCards[solutionTab].desc}</p>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "hsl(var(--shopify-green))", fontSize: "0.82rem", fontWeight: 500, textDecoration: "none", marginTop: 24 }}>
            Explore {solutionTab} <span>→</span>
          </a>
        </div>
        {/* Placeholder visual */}
        <div style={{ flex: "0 0 320px", height: 200, background: "rgba(255,255,255,0.04)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.75rem", fontWeight: 500 }}>[ {solutionTab} Visual ]</span>
        </div>
      </div>
    </section>
  );

  // ── Section: Advantages Grid ──
  const AdvantagesSection = () => {
    const items = [
      { icon: "⚡", title: "Accelerate innovation", desc: "Innovate and launch at lightning speed, on the only platform that's consistently first-to-market with new capabilities." },
      { icon: "📈", title: "Increase revenue", desc: "Increase top-line revenue with the best-converting checkout on the planet, and reach more customers on more channels." },
      { icon: "🔥", title: "Optimise performance", desc: "Handle the highest volumes possible and always stay connected with 99.9% uptime and less than 50ms response time." },
      { icon: "🧩", title: "Build with flexibility", desc: "Evolve your commerce architecture and transform your customer experiences with a flexible commerce operating system." },
      { icon: "💰", title: "Lower cost of ownership", desc: "Sellery's TCO is on average 33% better than its competitors', making it the industry's most cost-effective platform." },
      { icon: "👨‍💻", title: "Improve development impact", desc: "Use your developer resources to drive growth with unique builds, while relying on Sellery for infrastructure." },
    ];
    return (
      <section style={{ padding: "5rem 1.5rem", maxWidth: 1100, margin: "0 auto" }}>
        <div className="reveal" ref={addRef} style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ color: "hsl(var(--shopify-green))", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em" }}>Sellery Advantages</span>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.02em", marginTop: 10 }}>
            The platform built for future-proofing
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {items.map((item, i) => (
            <div key={i} className="reveal" ref={addRef} style={{ animationDelay: `${(i % 3) * 0.1}s` }}>
              <div style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16, padding: "1.75rem", height: "100%",
                transition: "border-color 0.3s, background 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(95,209,103,0.2)"; e.currentTarget.style.background = "rgba(95,209,103,0.03)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              >
                <span style={{ fontSize: "1.4rem", display: "block", marginBottom: 14 }}>{item.icon}</span>
                <h4 style={{ color: "#fff", fontSize: "0.88rem", fontWeight: 600, marginBottom: 8 }}>{item.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // ── Section: Stats Bar ──
  const StatsSection = () => {
    const stats = [
      { value: "$1.4B", label: "R&D Spend in 2024" },
      { value: "Millions", label: "Of Businesses Worldwide" },
      { value: "Thousands", label: "Of Commerce Engineers" },
      { value: "175+", label: "Countries Served" },
    ];
    return (
      <section style={{ padding: "3.5rem 1.5rem", background: "linear-gradient(90deg, rgba(95,209,103,0.04), rgba(95,209,103,0.08), rgba(95,209,103,0.04))", borderTop: "1px solid rgba(95,209,103,0.1)", borderBottom: "1px solid rgba(95,209,103,0.1)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24, textAlign: "center" }}>
          {stats.map((s, i) => (
            <div key={i} className="reveal" ref={addRef}>
              <div style={{ color: "#fff", fontSize: "1.6rem", fontWeight: 700, letterSpacing: "-0.02em" }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // ── Section: Why Sellery (Tabbed) ──
  const WhySection = () => (
    <section style={{ padding: "5rem 1.5rem", maxWidth: 1100, margin: "0 auto" }}>
      <div className="reveal" ref={addRef} style={{ textAlign: "center", marginBottom: 48 }}>
        <span style={{ color: "hsl(var(--shopify-green))", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em" }}>Why Sellery</span>
        <h2 style={{ color: "#fff", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.02em", marginTop: 10 }}>
          Commerce to the core
        </h2>
      </div>

      {/* feature pills row */}
      <div className="reveal" ref={addRef} style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 40, flexWrap: "wrap" }}>
        {[
          { icon: "⚡", text: "Lightning-fast innovation" },
          { icon: "🌐", text: "Enterprise scale" },
          { icon: "🎯", text: "Unparalleled efficiency" },
        ].map((p, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 999, padding: "0.5rem 1rem",
          }}>
            <span style={{ fontSize: "0.85rem" }}>{p.icon}</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.78rem", fontWeight: 500 }}>{p.text}</span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="reveal" ref={addRef} style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 28, background: "rgba(255,255,255,0.04)", borderRadius: 999, padding: 4, width: "fit-content", margin: "0 auto 28px" }}>
        {[
          { key: "checkout", label: "Best Checkout" },
          { key: "storefronts", label: "Global Storefronts" },
          { key: "developers", label: "Developer Tools" },
        ].map(t => (
          <button key={t.key} className={`tab-btn ${whyTab === t.key ? "active" : ""}`} onClick={() => setWhyTab(t.key)}>{t.label}</button>
        ))}
      </div>

      {/* Card */}
      <div className="reveal" ref={addRef} style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
        border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "2.5rem",
        display: "flex", gap: "2.5rem", alignItems: "center", flexWrap: "wrap",
      }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <h3 style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 600, marginBottom: 10 }}>{whyCards[whyTab].title}</h3>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.7 }}>{whyCards[whyTab].desc}</p>
        </div>
        <div style={{ flex: "0 0 360px", height: 180, background: "rgba(255,255,255,0.04)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "0.75rem" }}>[ Visual Placeholder ]</span>
        </div>
      </div>
    </section>
  );

  // ── Section: Global Commerce Stats ──
  const GlobalStatsSection = () => {
    const stats = [
      { value: "$1.1T", label: "in global commerce", sub: "Since Sellery's inception" },
      { value: "875M+", label: "unique online shoppers", sub: "Purchasing from merchants in 2024" },
      { value: "12%+", label: "of all US ecommerce", sub: "Powered by Sellery" },
    ];
    return (
      <section style={{ padding: "4rem 1.5rem", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
          {stats.map((s, i) => (
            <div key={i} className="reveal" ref={addRef} style={{ textAlign: "center", padding: "2rem 1rem", borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <div style={{ color: "#fff", fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em" }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", marginTop: 4 }}>{s.label}</div>
              <div style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.72rem", marginTop: 4 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // ── Section: Partners ──
  const PartnersSection = () => (
    <section style={{ padding: "5rem 1.5rem", maxWidth: 1100, margin: "0 auto" }}>
      <div className="reveal" ref={addRef} style={{ textAlign: "center", marginBottom: 48 }}>
        <span style={{ color: "hsl(var(--shopify-green))", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em" }}>Partner Ecosystem</span>
        <h2 style={{ color: "#fff", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.02em", marginTop: 10 }}>
          Established partnerships with the best in commerce
        </h2>
      </div>

      {/* Tabs */}
      <div className="reveal" ref={addRef} style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 32, background: "rgba(255,255,255,0.04)", borderRadius: 999, padding: 4, width: "fit-content", margin: "0 auto 32px" }}>
        <button className={`tab-btn ${partnerTab === "service" ? "active" : ""}`} onClick={() => setPartnerTab("service")}>Service Partners</button>
        <button className={`tab-btn ${partnerTab === "technology" ? "active" : ""}`} onClick={() => setPartnerTab("technology")}>Technology Partners</button>
      </div>

      <div className="reveal" ref={addRef}>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", textAlign: "center", marginBottom: 28, maxWidth: 500, margin: "0 auto 28px" }}>
          {partnerTab === "service"
            ? "Launch quickly and innovate at scale with the world's best agencies and system integrators."
            : "Leverage Sellery's app ecosystem and enterprise partners to work with your existing stack or build new functionality."}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          {partners[partnerTab].map((name, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12, padding: "0.7rem 1.4rem", display: "flex", alignItems: "center", gap: 10,
              transition: "border-color 0.3s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(95,209,103,0.3)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
            >
              <div style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "hsl(var(--shopify-green))", fontSize: "0.7rem", fontWeight: 700 }}>{name[0]}</span>
              </div>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", fontWeight: 500 }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ── Section: CTA ──
  const CTASection = () => (
    <section style={{
      margin: "2rem 1.5rem 4rem", borderRadius: 24,
      background: "linear-gradient(135deg, #141414, #1a1f1a)",
      border: "1px solid rgba(95,209,103,0.15)",
      padding: "5rem 2rem", textAlign: "center", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: "-30%", right: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(95,209,103,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="reveal" ref={addRef} style={{ position: "relative", zIndex: 1 }}>
        <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 14 }}>
          Powering enterprise businesses
        </h2>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", maxWidth: 460, margin: "0 auto 32px" }}>
          Speak with our enterprise team on how to bring Sellery into your tech stack.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#" className="btn-primary">Get in touch</a>
          <a href="#" className="btn-outline">Try Sellery</a>
        </div>
      </div>
    </section>
  );

  

  // ─── RENDER ──────────────────────────────────────────────────
  return (
    <>
      
      <div className="enterprise-page">
        <Navbar />
        <HeroSection />
        <MarqueeSection />
        <RecognitionSection />
        <SolutionsSection />
        <AdvantagesSection />
        <StatsSection />
        <WhySection />
        <GlobalStatsSection />
        <PartnersSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}