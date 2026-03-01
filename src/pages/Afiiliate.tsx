import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight, Zap, TrendingUp, Activity, Settings, DollarSign, Code, Award, BarChart3, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";


const words = ["innovative", "scaled", "powerful", "trusted"];

const logos = [
  { name: "Glossier", text: "Glossier." },
  { name: "JB Hi-Fi", text: "JB HI-FI" },
  { name: "Mattel", text: "MATTEL" },
  { name: "Staples", text: "staples" },
  { name: "Dollar Shave Club", text: "DOLLAR SHAVE CLUB" },
  { name: "Everlane", text: "EVERLANE" },
  { name: "Quicksilver", text: "QUIKSILVER" },
];

const reports = [
  {
    label: "IDC RECOGNITION",
    title: "Sellery named Leader in IDC B2C Commerce Platforms, 2024",
    description: "Sellery was recognized as a leader in IDC's evaluation of commerce solutions for retailers from $100 million and beyond.",
    icon: Award,
  },
  {
    label: "POS MARKET REPORT",
    title: "EY shares a report on the retail industry and the role of technology within it",
    description: "Sellery POS stands out as an example of a POS system that allows mid-market and enterprise retailers to realize benefits.",
    icon: BarChart3,
  },
  {
    label: "SITE SPEED AUDIT",
    title: "Sellery has the fastest server speed in commerce",
    description: "Faster site speed impacts everything—from revenue to operations. Measure your site's performance.",
    icon: Zap,
  },
];

const solutions = [
  { id: "b2c", title: "B2C", description: "Outshine competitors with expressive storefronts, the world's best-converting checkout, and fully customizable solutions.", icon: "🛍️", color: "from-green-500/20" },
  { id: "b2b", title: "B2B", description: "Conduct wholesale commerce on a global scale with B2B selling essentials reimagined for modern enterprise.", icon: "🏢", color: "from-blue-500/20" },
  { id: "retail", title: "Retail", description: "Conquer retail with a connected platform that gives you a unified customer view and powerful POS app.", icon: "🏪", color: "from-purple-500/20" },
];

const advantages = [
  { icon: Zap, title: "Accelerate innovation", description: "Innovate and launch at lightning speed, on the only platform that's consistently first-to-market." },
  { icon: TrendingUp, title: "Increase revenue", description: "Increase top-line revenue with the best-converting checkout on the planet." },
  { icon: Activity, title: "Optimize performance", description: "Handle the highest volumes with 99.9% uptime and less than 50ms response time." },
  { icon: Settings, title: "Build with flexibility", description: "Evolve your commerce architecture with a flexible commerce operating system." },
  { icon: DollarSign, title: "Lower cost of ownership", description: "Sellery's TCO is on average 33% better than its competitors'." },
  { icon: Code, title: "Improve development impact", description: "Use your developer resources to drive growth with unique builds." },
];

const stats = [
  { value: "$1.4B", label: "R&D spend in 2024", description: "Sellery invested $1.4B into the future of commerce." },
  { value: "Millions", label: "Of businesses", description: "Millions of brands in 175+ countries rely on Sellery." },
  { value: "Thousands", label: "Of engineers", description: "100% focused on making commerce better." },
];

const bottomStats = [
  { value: "$1.1T", label: "in global commerce", subtext: "Since Sellery's inception" },
  { value: "875M+", label: "unique online shoppers", subtext: "Purchasing in 2024" },
  { value: "12%", label: "of all US ecommerce", subtext: "Powered by Sellery" },
];

const features = [
  { id: "checkout", title: "The world's best-converting checkout", description: "Sellery's conversion rate outpaces the competition by up to 36%.", icon: "💳" },
  { id: "storefronts", title: "Fast and immersive global storefronts", description: "With 300 points of presence worldwide, we won't leave customers hanging.", icon: "🌍" },
  { id: "developers", title: "Tools by developers, for developers", description: "Robust documentation, CLI tools, and flexible APIs.", icon: "💻" },
];

const partners = ["Deloitte", "IBM", "KPMG", "VML", "WPP", "Accenture", "EY", "Cognizant"];

const footerLinks = {
  Solutions: ["B2C Commerce", "B2B Commerce", "Retail", "International"],
  Resources: ["Help Center", "Blog", "Documentation", "API Reference"],
  Company: ["About Us", "Careers", "Press", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Security"],
};

const Afiiliate = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState("b2c");
  const [activeFeature, setActiveFeature] = useState("checkout");

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const activeSolution = solutions.find((s) => s.id === activeTab);
  const activeFeatureData = features.find((f) => f.id === activeFeature);

  return (
    
      <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center hero-gradient pt-2">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url('/assets/afil-comp-1.png')`,
              opacity: 0.15
            }}
          />
          
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: "2s" }} />
          </div>
          
          <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border hover:bg-secondary transition-colors mb-8">
              <span>The Winter '26 Edition is here</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="section-label">SELLERY FOR ENTERPRISE</p>
                <h1 className="section-title">
                  The world's most{" "}
                  <span className={`text-gradient-animated inline-block transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
                    {words[currentWordIndex]}
                  </span>
                  <br />commerce platform
                </h1>
                <p className="section-description mb-10">Unlock unprecedented growth on the platform that keeps enterprises ahead.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="btn-primary">Get in touch <ArrowRight className="w-4 h-4" /></a>
                  <a href="#" className="btn-secondary">Try Sellery</a>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="glass-card rounded-3xl p-8 glow-green">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-transparent rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">🛒</div>
                      <a className="text-xl font-semibold text-foreground/80"
                      href="/Enterprise"
                      >Enterprise Commerce</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Marquee */}
      <div className="relative overflow-hidden py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-12 mx-6">
              {["MATTEL", "POPPI", "TECOVAS", "DRSQUATCH", "GLOSSIER", "RUGGABLE", "ALO", "VUORI", "ALLBIRDS"].map((brand) => (
                <div key={`${setIndex}-${brand}`} className="text-gray-600 text-xl font-bold tracking-wide">
                  {brand}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>

        {/* REPORTS SECTION */}
        <section className="py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {reports.map((report, i) => (
                <a key={i} href="#" className="feature-card p-8 group cursor-pointer">
                  <p className="section-label">{report.label}</p>
                  <div className="flex items-center gap-3 mb-4"><report.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{report.title}</h3>
                  <p className="text-muted-foreground mb-6">{report.description}</p>
                  <div className="flex items-center gap-2 text-primary font-medium">Read the report <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS SECTION */}
        <section className="py-20 lg:py-32 bg-card/30">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="section-label">SOLUTIONS</p>
              <h2 className="section-title">One platform for every way you sell</h2>
              <p className="section-description mx-auto">Operate your B2C, B2B, and retail markets with software built for customization, productivity, and revenue growth.</p>
            </div>
            <div className="flex justify-center gap-2 mb-12">
              {solutions.map((s) => (
                <button key={s.id} onClick={() => setActiveTab(s.id)} className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === s.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>{s.title}</button>
              ))}
            </div>
            {activeSolution && (
              <div className="feature-card p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className={`aspect-video rounded-2xl bg-gradient-to-br ${activeSolution.color} to-transparent flex items-center justify-center`}>
                    <span className="text-8xl">{activeSolution.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">{activeSolution.title}</h3>
                    <p className="text-lg text-muted-foreground mb-8">{activeSolution.description}</p>
                    <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">Explore {activeSolution.title} <ArrowRight className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ADVANTAGES SECTION */}
        <section className="py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="section-label">SELLERY ADVANTAGES</p>
              <h2 className="section-title">The platform built for future-proofing</h2>
              <p className="section-description mx-auto">Sellery is the enterprise commerce operating system for immediate success and future resilience.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((a, i) => (
                <div key={i} className="feature-card p-8 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <a.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{a.title}</h3>
                  <p className="text-muted-foreground">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-20 lg:py-32 bg-card/30">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="stat-value mb-2">{s.value}</div>
                  <div className="text-xl font-semibold text-primary mb-2">{s.label}</div>
                  <p className="text-muted-foreground">{s.description}</p>
                </div>
              ))}
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-20" />
            <div className="grid md:grid-cols-3 gap-8">
              {bottomStats.map((s, i) => (
                <div key={i} className="glass-card rounded-2xl p-8 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{s.value}</div>
                  <div className="text-lg font-semibold mb-1">{s.label}</div>
                  <p className="text-sm text-muted-foreground">{s.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="section-label">WHY SELLERY</p>
              <h2 className="section-title">Commerce to the core</h2>
              <p className="section-description mx-auto">Sellery is named a Leader for the 2nd consecutive year in the Gartner® Magic Quadrant™.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                {features.map((f) => (
                  <button key={f.id} onClick={() => setActiveFeature(f.id)} className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${activeFeature === f.id ? "bg-primary/10 border-l-4 border-primary" : "bg-card/50 hover:bg-card border-l-4 border-transparent"}`}>
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{f.icon}</span>
                      <div>
                        <h3 className={`text-lg font-semibold mb-2 ${activeFeature === f.id ? "text-primary" : ""}`}>{f.title}</h3>
                        <p className="text-muted-foreground text-sm">{f.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              {activeFeatureData && (
                <div className="feature-card p-8 lg:p-12">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-9xl block mb-6">{activeFeatureData.icon}</span>
                      <div className="flex items-center justify-center gap-2 text-primary">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">Industry Leading</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* PARTNERS SECTION */}
        <section className="py-20 lg:py-32 bg-card/30">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="section-label">PARTNER ECOSYSTEM</p>
              <h2 className="section-title">Established partnerships with the best</h2>
              <p className="section-description mx-auto">Partner with top organizations that work with the world's biggest brands.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Service partners</h3>
                <p className="text-muted-foreground">Launch quickly and innovate at scale with the world's best agencies.</p>
              </div>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Technology partners</h3>
                <p className="text-muted-foreground">Leverage Sellery's app ecosystem and enterprise partners.</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              {partners.map((p, i) => (
                <div key={i} className="px-6 py-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors">
                  <span className="text-lg font-bold text-muted-foreground">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
          </div>
          <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-3xl p-8 lg:p-16 text-center glow-green">
              <p className="section-label">POWERING ENTERPRISE BUSINESSES</p>
              <h2 className="section-title max-w-3xl mx-auto">Speak with our enterprise team</h2>
              <p className="section-description mx-auto mb-10">Get personalized guidance from our team of commerce experts.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="btn-primary text-lg px-8 py-4">Get in touch <ArrowRight className="w-5 h-5" /></a>
                <a href="#" className="btn-secondary text-lg px-8 py-4">Start free trial</a>
              </div>
              <div className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2"><span className="text-primary">✓</span><span>No credit card required</span></div>
                <div className="flex items-center gap-2"><span className="text-primary">✓</span><span>Free 14-day trial</span></div>
                <div className="flex items-center gap-2"><span className="text-primary">✓</span><span>Cancel anytime</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-16 border-t border-border/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5 L20 35 M15 8 L15 32 M25 8 L25 32 M18 6 Q14 3 12 7 M22 6 Q26 3 28 7" stroke="hsl(var(--shopify-green))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-2xl tracking-tight" style={{ fontWeight: 800, fontStyle: "italic" }}>Sellery</span>
              </Link>
              <p className="text-sm text-muted-foreground">The world's most innovative commerce platform.</p>
            </div>
            {Object.entries(footerLinks).map(([cat, links]) => (
              <div key={cat}>
                <h4 className="font-semibold mb-4">{cat}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2026 Sellery. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Afiiliate;
