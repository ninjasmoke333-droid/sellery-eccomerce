import { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Paintbrush,
  Camera,
  PenTool,
  Wrench,
  Megaphone,
  ChevronDown,
  Plus,
  Mic,
  ArrowRight,
  Send,
  X,
} from "lucide-react";

import Navbar from "@/components/Navbar";

/* ─── Role Data ─── */
const roles = [
  {
    id: "designer",
    label: "Designer",
    icon: Paintbrush,
    headline: "Turn your store idea into a stunning design.",
    image: "/assets/sidekick-designer-preview.jpg",
  },
  {
    id: "photo-editor",
    label: "Photo editor",
    icon: Camera,
    headline: "Upgrade your phone photos to studio shots.",
    image: "/assets/sidekick-photo-editor.jpg",
  },
  {
    id: "writer",
    label: "Writer",
    icon: PenTool,
    headline: "Hook shoppers with irresistible product copy.",
    image: "/assets/sidekick-designer-preview.jpg",
  },
  {
    id: "tech-support",
    label: "Tech support",
    icon: Wrench,
    headline: "Lock in your domain and get set up to sell.",
    image: "/assets/sidekick-photo-editor.jpg",
  },
  {
    id: "marketer",
    label: "Marketer",
    icon: Megaphone,
    headline: "Launch your store and get noticed on social.",
    image: "/assets/sidekick-designer-preview.jpg",
  },
];

const prompts = [
  {
    cmd: "/product-description",
    text: "Write me product descriptions for SEO",
  },
  {
    cmd: "/pricing-strategy",
    text: "Analyze my pricing and find ways to boost sales",
  },
  { cmd: "/social-posts", text: "Create social media content for my products" },
  { cmd: "/weekly-summary", text: "Give me a weekly performance summary" },
  { cmd: "/discount-code", text: "Help me set up discounts and offers" },
  {
    cmd: "/email-campaign",
    text: "Build an effective email marketing campaign",
  },
  { cmd: "/low-stock-alert", text: "Make sure I never run out of inventory" },
  {
    cmd: "/build-collections",
    text: "Organize my products into smart collections",
  },
  { cmd: "/marketing-mix", text: "Help me optimize my ad spend by channel" },
  { cmd: "/shipping-audit", text: "Audit my shipping configurations" },
];

const updates = [
  {
    date: "JANUARY 6, 2026",
    title: "Payments and web performance data available in Sidekick",
    description:
      "Sidekick can now write queries for web performance and payments data, with expanded fulfillments and payouts capabilities.",
  },
  {
    date: "DECEMBER 10, 2025",
    title: "Start Sidekick conversations from Sellery Home",
    description:
      "With a new Sidekick chat input on Home, you can start every Sellery session with a Sidekick chat.",
  },
  {
    date: "DECEMBER 10, 2025",
    title: "Sidekick fullscreen mode keeps sidebar visible",
    description:
      "Get more room to work with fullscreen mode, while keeping access to your navigation sidebar.",
  },
];

const faqs = [
  {
    q: "Does using Sidekick cost money?",
    a: "No. Sidekick is included with your Sellery plan. Features and usage limits vary by plan.",
  },
  {
    q: "How do user permissions work in Sidekick?",
    a: "Every staff member can use Sidekick based on their admin permissions. It respects access controls, so team members only interact with data and features they're authorized to use.",
  },
  {
    q: "What makes Sidekick different from other AI tools?",
    a: "Sidekick knows your business. It has direct access to your Sellery data, understands commerce workflows, and takes action in your admin. Generic AI tools can't see your store or complete tasks for you.",
  },
  {
    q: "Can I use Sidekick in different languages?",
    a: "Yes. Sidekick adapts to your store's language settings and can help you in multiple languages.",
  },
  {
    q: "How do I get started with Sidekick?",
    a: "Just open any Sellery admin and look for the Sidekick icon. Click it and start chatting — no setup needed.",
  },
];

const SYSTEM_PROMPT = `You are Sidekick, an enthusiastic and helpful AI assistant for Sellery (an e-commerce platform similar to Shopify). You help store owners with:

- Designing their online store and choosing themes
- Editing and optimizing product photos
- Writing compelling product descriptions and SEO content
- Setting up domains and technical configurations
- Marketing strategies and social media content
- Pricing strategies and sales optimization
- Inventory management
- Email campaigns and promotions
- Shipping configurations
- Product organization and collections

Keep responses concise, friendly, and actionable. Use emojis sparingly. Focus on practical e-commerce advice.`;

const SidekickPage = () => {
  const [activeRole, setActiveRole] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const [cooldownTimer, setCooldownTimer] = useState(0);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (messageText = input) => {
    if (!messageText.trim() || isLoading) return;

    // Rate limiting: Max 30 requests per minute (Groq limit)
    if (requestCount >= 25) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Whoa, slow down there! 😅 Please wait a moment before sending more messages.",
        },
      ]);
      return;
    }

    // Cooldown between messages (2 seconds)
    if (cooldownTimer > 0) {
      return;
    }

    const userMessage = { role: "user", content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Increment request counter
    setRequestCount((prev) => prev + 1);

    // Reset counter after 1 minute
    setTimeout(() => {
      setRequestCount((prev) => Math.max(0, prev - 1));
    }, 60000);

    // Start 2-second cooldown
    setCooldownTimer(2);
    const cooldownInterval = setInterval(() => {
      setCooldownTimer((prev) => {
        if (prev <= 1) {
          clearInterval(cooldownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...messages.map((msg) => ({
                role: msg.role,
                content: msg.content,
              })),
              { role: "user", content: messageText },
            ],
            temperature: 0.7,
            max_tokens: 1000,
          }),
        },
      );

      const data = await response.json();

      // Handle rate limit errors
      if (!response.ok) {
        if (response.status === 429) {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content:
                "I'm getting a lot of questions right now! Please try again in a minute. 😊",
            },
          ]);
          return;
        }
        throw new Error(data.error?.message || "API request failed");
      }

      const assistantMessage = {
        role: "assistant",
        content: data.choices[0].message.content,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling Groq API:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickPrompt = (promptText) => {
    setInput(promptText);
    setIsChatExpanded(true);
    setTimeout(() => sendMessage(promptText), 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <div className="flex-1 max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
              Starting a business?{" "}
              <span className="glow-text">You've got backup.</span>
            </h1>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Start for free
            </a>
          </div>

          {/* INTERACTIVE Sidekick Chat Card */}
          <div
            className="chat-mockup p-6 w-full max-w-sm lg:max-w-md animate-fade-in-up relative"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Header */}
            <div className="text-center mb-4">
              <p className="text-muted-foreground text-sm">I'm Sidekick!</p>
              <p className="font-semibold">Your AI Sellery expert</p>
            </div>

            {/* Mascot */}
            <div className="flex justify-center mb-6">
              <img
                src="/assets/sellery-sidekick-mascot.png"
                alt="Sellery Sidekick mascot"
                className="w-40 h-40 object-contain"
              />
            </div>

            {/* Chat Messages (when expanded) */}
            {isChatExpanded && messages.length > 0 && (
              <div className="mb-4 max-h-64 overflow-y-auto space-y-3 bg-secondary/30 rounded-xl p-3">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                        msg.role === "user"
                          ? "bg-sellery-green text-white"
                          : "bg-secondary text-foreground"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-secondary text-foreground rounded-2xl px-4 py-2 text-sm">
                      <span className="inline-flex gap-1">
                        <span
                          className="animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        >
                          ●
                        </span>
                        <span
                          className="animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        >
                          ●
                        </span>
                        <span
                          className="animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        >
                          ●
                        </span>
                      </span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}

            {/* Chat input */}
            <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2.5 relative">
              <Sparkles className="w-5 h-5 text-sellery-green flex-shrink-0" />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && !cooldownTimer && sendMessage()
                }
                onFocus={() => setIsChatExpanded(true)}
                placeholder={
                  cooldownTimer > 0
                    ? `Wait ${cooldownTimer}s...`
                    : "Ask anything"
                }
                className="bg-transparent text-sm flex-1 outline-none placeholder:text-muted-foreground"
                disabled={isLoading || cooldownTimer > 0}
              />
              {input.trim() && !cooldownTimer && (
                <button
                  onClick={() => sendMessage()}
                  disabled={isLoading}
                  className="text-sellery-green hover:opacity-70 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                </button>
              )}
              <Plus className="w-4 h-4 text-muted-foreground" />
              <Mic className="w-4 h-4 text-sellery-purple" />
            </div>

            {/* Quick prompts */}
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                "help me pick a theme",
                "add product photos",
                "customize my design",
              ].map((p) => (
                <button
                  key={p}
                  onClick={() => handleQuickPrompt(p)}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-sellery-green/10 transition-colors cursor-pointer"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Expand/Collapse button */}
            {messages.length > 0 && (
              <button
                onClick={() => setIsChatExpanded(!isChatExpanded)}
                className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
              >
                {isChatExpanded ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <Sparkles className="w-5 h-5" />
                )}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ─── MEET SIDEKICK: ROLE CARDS ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4">
          Meet Sidekick.{" "}
          <span className="text-muted-foreground">
            Your launch team in one tool.
          </span>
        </h2>

        {/* Role tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-10">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeRole === i
                    ? "bg-sellery-green text-white shadow-lg"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
                style={
                  activeRole === i
                    ? { boxShadow: "0 0 20px hsl(var(--shopify-green) / 0.4)" }
                    : {}
                }
              >
                <Icon className="w-4 h-4" />
                {role.label}
              </button>
            );
          })}
        </div>

        {/* Active role showcase */}
        <div className="role-card max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-sellery-green text-sm font-semibold mb-2">
                {roles[activeRole].label}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {roles[activeRole].headline}
              </h3>
              <div className="flex items-center gap-2">
                <img
                  src="/assets/sellery-sidekick-mascot.png"
                  alt=""
                  className="w-10 h-10 rounded-full object-contain bg-secondary"
                />
                <span className="text-sm text-muted-foreground">
                  Powered by Sellery Sidekick
                </span>
              </div>
            </div>
            <div className="flex-1 min-h-[300px] md:min-h-[400px]">
              <img
                src={roles[activeRole].image}
                alt={roles[activeRole].label}
                className="w-full h-full object-cover rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── POPULAR PROMPTS MARQUEE ─── */}
      <section className="py-20 overflow-hidden">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 px-4">
          Popular prompts to get you started
        </h2>
        <div className="relative">
          <div
            className="flex animate-marquee"
            style={{ width: "max-content" }}
          >
            {[...prompts, ...prompts].map((p, i) => (
              <div key={i} className="prompt-card mx-2">
                <p className="text-sellery-green font-mono text-sm font-bold mb-1">
                  {p.cmd}
                </p>
                <p className="text-muted-foreground text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Give it a try <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ─── UPDATES / CHANGELOG ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
          Sidekick keeps getting smarter
        </h2>
        <div className="space-y-8">
          {updates.map((u, i) => (
            <div key={i} className="border-l-2 border-sellery-green pl-6">
              <p className="text-xs font-semibold tracking-widest text-muted-foreground mb-1">
                {u.date}
              </p>
              <h3 className="text-lg font-bold mb-2">{u.title}</h3>
              <p className="text-muted-foreground text-sm">{u.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <img
              src="/assets/sellery-sidekick-mascot.png"
              alt="Sellery Sidekick"
              className="w-24 h-24 object-contain"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Sidekick's on standby. <span className="glow-text">Let's go!</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Say the word and Sidekick will get you selling.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Start for free
          </a>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[800px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
          Questions?
        </h2>
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="font-semibold text-base pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openFaq === i ? "200px" : "0",
                  opacity: openFaq === i ? 1 : 0,
                }}
              >
                <p className="text-muted-foreground text-sm pb-5">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-20" />
    </div>
  );
};

export default SidekickPage;
