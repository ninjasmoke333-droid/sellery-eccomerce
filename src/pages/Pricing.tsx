import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";

// ─── DATA ────────────────────────────────────────────────────────────────────

const PLANS = [
  {
    name: "Basic",
    tag: "Most Popular",
    tagline: "For solo entrepreneurs",
    monthlyPrice: 39,
    yearlyPrice: 19,
    trialPrice: 1,
    credits: "$3,500",
    cashback: "1%",
    thirdPartyFee: "2%",
    features: [
      "10 inventory locations",
      "24/7 chat support",
      "In-person selling by phone or POS device",
      "2 staff accounts",
      "Basic analytics & reports",
      "Unlimited products",
      "SSL certificate included",
      "Free subdomain (mystore.sellery.com)",
    ],
  },
  {
    name: "Grow",
    tag: null,
    tagline: "For small teams",
    monthlyPrice: 105,
    yearlyPrice: 49,
    trialPrice: 1,
    credits: "$5,000",
    cashback: "1%",
    thirdPartyFee: "1%",
    features: [
      "10 inventory locations",
      "24/7 chat support",
      "5 staff accounts",
      "In-person selling by phone or POS device",
      "Advanced analytics & reports",
      "Unlimited products",
      "SSL certificate included",
      "Free subdomain",
      "Abandoned cart recovery",
      "Gift cards",
    ],
  },
  {
    name: "Advanced",
    tag: null,
    tagline: "As your business scales",
    monthlyPrice: 399,
    yearlyPrice: 299,
    trialPrice: 1,
    credits: "$7,000",
    cashback: "1%",
    thirdPartyFee: "0.6%",
    features: [
      "10 inventory locations",
      "Enhanced 24/7 chat support",
      "15 staff accounts",
      "Local storefronts by market",
      "In-person selling by phone or POS device",
      "Custom report builder",
      "Third-party calculated shipping rates",
      "Unlimited products",
      "SSL certificate included",
      "Advanced fraud detection",
      "Multi-currency selling",
    ],
  },
  {
    name: "Plus",
    tag: null,
    tagline: "For more complex businesses",
    monthlyPrice: null,
    yearlyPrice: 2300,
    trialPrice: null,
    credits: null,
    cashback: null,
    thirdPartyFee: "Competitive rates",
    features: [
      "200 inventory locations",
      "Priority 24/7 phone support",
      "Unlimited staff accounts",
      "Local storefronts by market",
      "Fully customizable checkout",
      "Up to 200 POS Pro locations",
      "Sell wholesale / B2B",
      "Dedicated account manager",
      "Custom integrations & APIs",
      "SLA-backed uptime guarantee",
      "Advanced fraud & chargeback tools",
    ],
  },
];

const FEATURES_COMPARISON = [
  {
    category: "Online Store",
    rows: [
      {
        name: "Unlimited products",
        basic: true,
        grow: true,
        advanced: true,
        plus: true,
      },
      {
        name: "SSL certificate",
        basic: true,
        grow: true,
        advanced: true,
        plus: true,
      },
      {
        name: "Free subdomain",
        basic: true,
        grow: true,
        advanced: true,
        plus: true,
      },
      {
        name: "Custom domain support",
        basic: true,
        grow: true,
        advanced: true,
        plus: true,
      },
      {
        name: "Abandoned cart recovery",
        basic: false,
        grow: true,
        advanced: true,
        plus: true,
      },
      {
        name: "Gift cards",
        basic: false,
        grow: true,
        advanced: true,
        plus: true,
      },
      {
        name: "Multi-currency selling",
        basic: false,
        grow: false,
        advanced: true,
        plus: true,
      },
      {
        name: "Local storefronts by market",
        basic: false,
        grow: false,
        advanced: true,
        plus: true,
      },
    ],
  },
  {
    category: "Staff & Support",
    rows: [
      {
        name: "Staff accounts",
        basic: "2",
        grow: "5",
        advanced: "15",
        plus: "Unlimited",
      },
      {
        name: "24/7 chat support",
        basic: true,
        grow: true,
        advanced: true,
        plus: true,
      },
      {
        name: "Enhanced support",
        basic: false,
        grow: false,
        advanced: true,
        plus: true,
      },
      {
        name: "Priority phone support",
        basic: false,
        grow: false,
        advanced: false,
        plus: true,
      },
      {
        name: "Dedicated account manager",
        basic: false,
        grow: false,
        advanced: false,
        plus: true,
      },
    ],
  },
  {
    category: "Selling & Inventory",
    rows: [
      {
        name: "Inventory locations",
        basic: "10",
        grow: "10",
        advanced: "10",
        plus: "200",
      },
      {
        name: "In-person selling (POS)",
        basic: true,
        grow: true,
        advanced: true,
        plus: true,
      },
      {
        name: "POS Pro locations",
        basic: "1",
        grow: "1",
        advanced: "1",
        plus: "200",
      },
      {
        name: "Sell wholesale / B2B",
        basic: false,
        grow: false,
        advanced: false,
        plus: true,
      },
      {
        name: "Fully customizable checkout",
        basic: false,
        grow: false,
        advanced: false,
        plus: true,
      },
    ],
  },
  {
    category: "Analytics & Tools",
    rows: [
      {
        name: "Basic analytics",
        basic: true,
        grow: true,
        advanced: true,
        plus: true,
      },
      {
        name: "Advanced reports",
        basic: false,
        grow: true,
        advanced: true,
        plus: true,
      },
      {
        name: "Custom report builder",
        basic: false,
        grow: false,
        advanced: true,
        plus: true,
      },
      {
        name: "Advanced fraud detection",
        basic: false,
        grow: false,
        advanced: true,
        plus: true,
      },
    ],
  },
];

const FAQS = [
  {
    q: "What is Sellery and how does it work?",
    a: "Sellery is an all-in-one commerce platform built for independent business owners to start, run, and grow their businesses online, in-store, and everywhere in between. You can create and customize an online store, sell across multiple channels, manage products and inventory, and run marketing campaigns — all from one dashboard.",
  },
  {
    q: "How much does Sellery cost?",
    a: "You can try Sellery free for 3 days, no credit card required. After your trial, choose a plan that fits your business. All plans start at just $1/month for the first 3 months. Pay yearly to save 25% on Basic, Grow, and Advanced plans.",
  },
  {
    q: "Are there third-party transaction fees?",
    a: "Third-party transaction fees apply only if you use a third-party payment provider instead of Sellery Payments. Basic: 2%, Grow: 1%, Advanced: 0.6%. Using Sellery Payments eliminates these extra fees entirely.",
  },
  {
    q: "Can I cancel my account at any time?",
    a: "Yes. On monthly plans you can cancel anytime. If you're on a yearly or multi-year Plus plan, you can cancel when your term commitment expires.",
  },
  {
    q: "Can I change my plan later on?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time on most plans. Sellery Plus subscribers on a 1-year term can upgrade to a 3-year term whenever they like.",
  },
  {
    q: "Do you offer any discounts?",
    a: "Yes — we offer a 25% discount for yearly subscriptions on Basic, Grow, and Advanced plans. Plus plans on a 3-year term come with lower monthly costs and reduced platform fees.",
  },
  {
    q: "Is Sellery PCI compliant?",
    a: "Yes, Sellery is certified Level 1 PCI DSS compliant. All your data and your customers' information is ultra secure.",
  },
  {
    q: "Is there a setup fee?",
    a: "No. There are zero setup fees on any plan. You pay only your monthly or yearly subscription rate.",
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const CellValue = ({ val }: { val: boolean | string }) => {
  if (val === true)
    return (
      <Check
        className="w-5 h-5 mx-auto"
        style={{ color: "hsl(var(--shopify-green))" }}
      />
    );
  if (val === false)
    return <span className="block mx-auto w-5 h-0.5 bg-white/20 rounded" />;
  return <span className="text-white/60 text-sm text-center block">{val}</span>;
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const Pricing = () => {
  const [yearly, setYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "#0a0a0a",
        fontFamily: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <Navbar />
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 flex items-start justify-center"
          style={{ pointerEvents: "none" }}
        >
          <div
            style={{
              width: "700px",
              height: "400px",
              background:
                "radial-gradient(ellipse, hsl(var(--shopify-green) / 0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
              marginTop: "60px",
            }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Plans &amp; pricing
          </h1>
          <p className="text-white/60 text-lg md:text-xl mb-2">
            Start for free, then enjoy
          </p>
          <p
            className="text-2xl md:text-3xl font-bold mb-8"
            style={{ color: "hsl(var(--shopify-green))" }}
          >
            $1/month for 3 months
          </p>
          <p className="text-white/40 text-sm mb-8">
            Plus, earn up to $7,000 in credits as you sell.
          </p>

          {/* Email CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white/8 border border-white/15 text-white placeholder-white/35 text-sm focus:outline-none focus:border-white/40 transition-colors"
              style={{ background: "rgba(255,255,255,0.08)" }}
            />
            <button
              className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold text-black transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                background: "hsl(var(--shopify-green))",
                boxShadow: "0 0 16px hsl(var(--shopify-green) / 0.35)",
              }}
            >
              Start for free
            </button>
          </div>
        </div>
      </section>

      {/* ── BILLING TOGGLE ──────────────────────────────────────────── */}
      <section className="px-4 pb-6">
        <div className="flex items-center justify-center gap-4">
          <span
            className={`text-sm ${yearly ? "text-white/40" : "text-white/80"}`}
          >
            Pay monthly
          </span>
          <button
            onClick={() => setYearly(!yearly)}
            className="relative w-12 h-6 rounded-full transition-colors duration-300"
            style={{
              background: yearly
                ? "hsl(var(--shopify-green))"
                : "rgba(255,255,255,0.2)",
            }}
          >
            <span
              className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300"
              style={{
                transform: yearly ? "translateX(24px)" : "translateX(0)",
              }}
            />
          </button>
          <span
            className={`text-sm ${yearly ? "text-white/80" : "text-white/40"}`}
          >
            Pay yearly
            <span
              className="ml-1.5 text-xs font-semibold px-1.5 py-0.5 rounded-full"
              style={{
                background: "hsl(var(--shopify-green) / 0.15)",
                color: "hsl(var(--shopify-green))",
              }}
            >
              save 25%
            </span>
          </span>
        </div>
      </section>

      {/* ── PLAN CARDS ──────────────────────────────────────────────── */}
      <section className="px-4 pb-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLANS.map((plan, i) => {
            const isPlus = plan.name === "Plus";
            const isBasic = plan.name === "Basic";
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                className="relative rounded-2xl flex flex-col"
                style={{
                  background: isBasic
                    ? "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)"
                    : "rgba(255,255,255,0.04)",
                  border: isBasic
                    ? "1px solid hsl(var(--shopify-green) / 0.4)"
                    : "1px solid rgba(255,255,255,0.1)",
                  boxShadow: isBasic
                    ? "0 0 24px hsl(var(--shopify-green) / 0.12), inset 0 1px 0 rgba(255,255,255,0.08)"
                    : "inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Most Popular badge */}
                {isBasic && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full text-black whitespace-nowrap"
                      style={{
                        background: "hsl(var(--shopify-green))",
                        boxShadow: "0 0 10px hsl(var(--shopify-green) / 0.4)",
                      }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold mb-0.5">{plan.name}</h3>
                    <p className="text-white/40 text-xs">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    {!isPlus && (
                      <p className="text-white/50 text-xs mb-1">
                        $1/month for first 3 months
                      </p>
                    )}
                    <div className="flex items-end gap-1">
                      <span
                        className="text-4xl font-extrabold"
                        style={{ lineHeight: 1 }}
                      >
                        ${price}
                      </span>
                      <span className="text-white/40 text-sm mb-1">
                        USD/month
                      </span>
                    </div>
                    <p className="text-white/30 text-xs mt-1">
                      {isPlus
                        ? "billed yearly, on a 3-year term"
                        : yearly
                          ? "billed yearly"
                          : "billed monthly"}
                    </p>
                  </div>

                  {/* Credits / Cashback */}
                  {!isPlus && (
                    <div className="flex flex-col gap-1 mb-4 pt-3 border-t border-white/8">
                      <p className="text-white/50 text-xs flex items-center gap-1.5">
                        <Check
                          className="w-3.5 h-3.5"
                          style={{ color: "hsl(var(--shopify-green))" }}
                        />
                        Earn {plan.cashback} back on sales
                      </p>
                      <p className="text-white/50 text-xs flex items-center gap-1.5">
                        <Check
                          className="w-3.5 h-3.5"
                          style={{ color: "hsl(var(--shopify-green))" }}
                        />
                        Get up to {plan.credits} in credits
                      </p>
                    </div>
                  )}

                  {/* Card rates */}
                  <div className="mb-4">
                    <p className="text-white/40 text-xs mb-1">
                      Card rates starting at
                    </p>
                    <p className="text-white/70 text-xs flex items-center gap-1.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "hsl(var(--shopify-green))" }}
                      />
                      {plan.thirdPartyFee}
                      {isPlus ? "" : " 3rd-party payment providers"}
                    </p>
                  </div>

                  {/* Standout features */}
                  <div className="mb-5 flex-1">
                    <p className="text-white/35 text-xs font-semibold uppercase tracking-wider mb-2">
                      Standout features
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {plan.features.slice(0, 6).map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check
                            className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                            style={{ color: "hsl(var(--shopify-green))" }}
                          />
                          <span className="text-white/60 text-xs">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    className="w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-95"
                    style={
                      isPlus
                        ? {
                            background: "transparent",
                            border: "1px solid hsl(var(--shopify-green))",
                            color: "hsl(var(--shopify-green))",
                          }
                        : {
                            background: "hsl(var(--shopify-green))",
                            color: "#000",
                            boxShadow:
                              "0 0 12px hsl(var(--shopify-green) / 0.3)",
                          }
                    }
                  >
                    {isPlus ? "Try Plus" : "Try for free"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── WHAT EVERY PLAN GETS YOU ────────────────────────────────── */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ letterSpacing: "-0.02em" }}
        >
          What every plan gets you
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "World's best checkout",
              desc: "Sellery checkout converts 15% better on average than other commerce platforms. Built-in fraud detection keeps your revenue safe.",
              icon: "🛒",
            },
            {
              title: "In-person selling",
              desc: "Sell in person and keep inventory synced with online sales — all with Sellery POS on any device.",
              icon: "🏪",
            },
            {
              title: "Multiple sales channels",
              desc: "Promote and sell products on Instagram, TikTok, Google, and other channels from one dashboard.",
              icon: "📱",
            },
            {
              title: "In-depth analytics",
              desc: "Access reports to track store performance and identify optimisation opportunities at every stage.",
              icon: "📊",
            },
            {
              title: "Commerce apps",
              desc: "Use apps for everything from product sourcing to customizing your store experience.",
              icon: "🧩",
            },
            {
              title: "24/7 support",
              desc: "Get help whenever you need it with round-the-clock chat support on every plan.",
              icon: "💬",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="text-base font-semibold mb-1.5">{item.title}</h3>
              <p className="text-white/45 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FULL COMPARISON TABLE (expandable) ─────────────────────── */}
      <section className="px-4 py-8 max-w-5xl mx-auto">
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="w-full flex items-center justify-center gap-2 text-white/50 hover:text-white/80 text-sm font-medium transition-colors"
        >
          Full list of features
          {showComparison ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {showComparison && (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 text-white/40 text-xs font-semibold uppercase tracking-wider w-2/5">
                    Feature
                  </th>
                  {["Basic", "Grow", "Advanced", "Plus"].map((n) => (
                    <th
                      key={n}
                      className="py-3 text-white/60 text-xs font-semibold text-center"
                    >
                      {n}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURES_COMPARISON.map((section) => (
                  <>
                    <tr key={`cat-${section.category}`}>
                      <td
                        colSpan={5}
                        className="pt-5 pb-2 text-xs font-bold uppercase tracking-wider"
                        style={{ color: "hsl(var(--shopify-green))" }}
                      >
                        {section.category}
                      </td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr
                        key={row.name}
                        className="border-b border-white/6"
                        style={{ borderColor: "rgba(255,255,255,0.06)" }}
                      >
                        <td className="py-2.5 text-white/65 text-xs">
                          {row.name}
                        </td>
                        <td className="py-2.5 text-center">
                          <CellValue val={row.basic} />
                        </td>
                        <td className="py-2.5 text-center">
                          <CellValue val={row.grow} />
                        </td>
                        <td className="py-2.5 text-center">
                          <CellValue val={row.advanced} />
                        </td>
                        <td className="py-2.5 text-center">
                          <CellValue val={row.plus} />
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* ── ALTERNATIVE SOLUTIONS ───────────────────────────────────── */}
      <section className="px-4 py-12 max-w-3xl mx-auto">
        <h2
          className="text-2xl font-bold text-center mb-8"
          style={{ letterSpacing: "-0.02em" }}
        >
          Alternative solutions for your business
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              name: "Starter",
              price: "$5",
              desc: "Sell instantly through social media and messaging apps or a simple online store.",
            },
            {
              name: "Retail",
              price: "$89",
              desc: "In-person selling tools with advanced staff, inventory, and loyalty features.",
            },
          ].map((alt) => (
            <div
              key={alt.name}
              className="p-5 rounded-xl flex flex-col"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-lg font-bold">{alt.name}</h3>
                <span className="text-white/40 text-sm">
                  {alt.price} USD/month
                </span>
              </div>
              <p className="text-white/45 text-xs leading-relaxed mb-4 flex-1">
                {alt.desc}
              </p>
              <button
                className="self-start text-xs font-semibold transition-colors hover:opacity-70"
                style={{ color: "hsl(var(--shopify-green))" }}
              >
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUSTED BY ──────────────────────────────────────────────── */}
      <section className="px-4 py-12 text-center">
        <h2
          className="text-2xl font-bold mb-8"
          style={{ letterSpacing: "-0.02em" }}
        >
          Join millions of merchants on Sellery
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-30">
          {[
            "Allbirds",
            "Gymshark",
            "Brooklinen",
            "Patagonia",
            "Crate & Barrel",
            "Death Wish Coffee",
          ].map((brand) => (
            <span
              key={brand}
              className="text-sm font-semibold uppercase tracking-widest text-white"
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="px-4 py-16 max-w-3xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-10"
          style={{ letterSpacing: "-0.02em" }}
        >
          Frequently asked questions
        </h2>
        <div className="flex flex-col gap-2">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-medium text-white/85">
                  {faq.q}
                </span>
                <ChevronDown
                  className="w-4 h-4 flex-shrink-0 text-white/35 transition-transform duration-200"
                  style={{
                    transform:
                      openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openFaq === i ? "200px" : "0",
                  opacity: openFaq === i ? 1 : 0,
                }}
              >
                <p className="px-5 pb-4 text-white/45 text-xs leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────────── */}
      <section className="px-4 py-20 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ pointerEvents: "none" }}
        >
          <div
            style={{
              width: "600px",
              height: "300px",
              background:
                "radial-gradient(ellipse, hsl(var(--shopify-green) / 0.1) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-3"
            style={{ letterSpacing: "-0.03em", lineHeight: 1.15 }}
          >
            Everything you need to sell online,
            <br /> all in one place.
          </h2>
          <p className="text-white/40 text-sm mb-6">
            Whether you're building a website, managing inventory, or responding
            to customers — Sellery has you covered.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:flex-1 px-4 py-3 rounded-lg text-white placeholder-white/35 text-sm focus:outline-none focus:border-white/40 transition-colors"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            />
            <button
              className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold text-black transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                background: "hsl(var(--shopify-green))",
                boxShadow: "0 0 16px hsl(var(--shopify-green) / 0.35)",
              }}
            >
              Start for free
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer
        className="px-4 py-10 border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              heading: "Sellery",
              links: [
                "About",
                "Careers",
                "Press & Media",
                "Partners",
                "Affiliates",
                "Legal",
              ],
            },
            {
              heading: "Support",
              links: [
                "Merchant Support",
                "Help Center",
                "Hire a Partner",
                "Academy",
                "Community",
              ],
            },
            {
              heading: "Developers",
              links: ["Sellery.dev", "API Documentation", "Dev Degree"],
            },
            {
              heading: "Products",
              links: ["Shop", "Sellery Plus", "Enterprise"],
            },
          ].map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/35 text-xs hover:text-white/60 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="max-w-5xl mx-auto mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="text-white/25 text-xs">
            © 2025 Sellery. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white/25 text-xs hover:text-white/45 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/25 text-xs hover:text-white/45 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
