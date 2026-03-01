import { ArrowDown, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";



const MarketingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 section-padding relative overflow-hidden">
        {/* Decorative wavy lines */}
        <svg
          className="absolute top-16 right-0 w-[60%] h-[500px] opacity-20 pointer-events-none"
          viewBox="0 0 800 500"
          fill="none"
        >
          <path
            d="M400,50 Q500,100 600,80 Q700,60 800,100"
            stroke="hsl(var(--border))"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M350,80 Q450,130 550,110 Q650,90 800,130"
            stroke="hsl(var(--border))"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M300,110 Q400,160 500,140 Q600,120 800,160"
            stroke="hsl(var(--border))"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
              Unify your marketing
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Find more customers, build profitable relationships, and make
              strategic decisions with unbiased data—all from one place.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full text-base hover:opacity-90 transition-opacity"
            >
              Start free trial
            </a>
          </div>

          <div className="relative z-10 flex justify-center md:justify-end">
            <div className="bg-card rounded-xl shadow-xl overflow-hidden max-w-[280px] border border-border">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="w-6 h-6 rounded-full bg-shopify-green" />
                <span className="text-sm font-medium text-foreground">
                  Bond_skin
                </span>
                <span className="ml-auto text-muted-foreground">•••</span>
              </div>
              <img
                src="/assets/hero-product.png"
                alt="Product showcase"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="flex items-center justify-between px-4 py-3 bg-primary">
                <span className="text-primary-foreground text-sm font-medium">
                  Shop Now
                </span>
                <ArrowRight className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-20">
          {[
            { label: "Find customers", href: "#find-customers" },
            { label: "Automate your marketing", href: "#automate-marketing" },
            { label: "Enhance with analytics", href: "#analytics" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-between px-6 py-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow group"
            >
              <span className="text-base font-semibold text-foreground">
                {item.label}
              </span>
              <ArrowDown className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          ))}
        </div>
      </section>

      {/* Find Customers Section */}
      <section
        id="find-customers"
        className="py-20 md:py-28 bg-section-bg rounded-t-[2rem]"
      >
        <div className="section-padding">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
              Find Customers
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Get your business in front
              <br className="hidden md:block" /> of millions of customers
            </h2>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              tag="Social media"
              title="Sell on social channels"
              description="Reach more customers by sharing your products directly to platforms like Facebook, Instagram, TikTok, Pinterest, Snapchat, and more."
              link={{ label: "Explore social channels", href: "#" }}
            />
            <FeatureCard
              tag="Marketplace connect"
              title="Sell on marketplaces"
              description="List your products on the world's leading online marketplaces—like Amazon, Walmart, Target+, and eBay—from one central location."
              link={{ label: "Get the app", href: "#" }}
            />
            <FeatureCard
              tag="Shop App"
              title="Tap into millions of mobile shoppers"
              description="Enable the Shop channel, a mobile-first shopping experience that drives discovery, improves conversion, and keeps customers engaged."
              link={{ label: "Explore Shop", href: "#" }}
            />
            <FeatureCard
              tag="Shop campaigns"
              title="Risk-free ad campaigns"
              description="Target shoppers across Shop, online stores and top ad platforms. Set your customer acquisition cost and ROAS, and let Shop do the rest."
              link={{ label: "Explore Shop Campaigns", href: "#" }}
            />
            <FeatureCard
              tag="Audiences"
              title="Find more customers on ad platforms"
              description="Get your ads in front of the most interested buyers, with custom audience lists generated by commerce insights. Drive up to 2x more retargeting conversions."
              link={{ label: "Explore Audiences", href: "#" }}
            />
            <FeatureCard
              tag="Collabs"
              title="Drive sales with influencers"
              description="Find and manage influential creators. They can spread the word about your products to their fans on platforms like Instagram, YouTube, and TikTok."
              link={{ label: "Explore Collabs", href: "#" }}
            />
            <FeatureCard
              tag="Collective"
              title="Sell through retailers"
              description="Grow sales by selling your products through quality stores. In just a few clicks reach new customers and push up profits. They sell, you ship."
              link={{ label: "Explore Collective", href: "#" }}
              className="md:col-span-2 lg:col-span-1"
            />
          </div>
        </div>
      </section>

      {/* Automate Marketing Section */}
      <section id="automate-marketing" className="py-20 md:py-28 bg-background">
        <div className="section-padding">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
              Automate your marketing
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Turn browsers into customers
            </h2>
          </div>

          <div className="bg-section-bg rounded-2xl p-8 md:p-12 lg:p-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Marketing automation tools built directly in
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
              Capture leads via forms, then send branded emails that convert.
              Reach the right customers at the right time with automations, then
              refine your marketing efforts further with audience segmentation.
              Manage all customer interactions and convert more sales with
              Inbox.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-foreground font-semibold hover:underline underline-offset-4"
            >
              Explore marketing automation tools
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="py-20 md:py-28 bg-section-bg">
        <div className="section-padding">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
              Enhance with analytics
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Optimize with data you can trust
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Maintain an unbiased view of your data, all from one place, with
              deep integrations between your store and key channels.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src="/assets/analytics-dashboard.png"
              alt="Analytics dashboard showing marketing data"
              className="w-full rounded-2xl shadow-lg"
            />
            <div className="space-y-8">
              {[
                {
                  title: "Reports, Attribution, ROAS",
                  desc: "See where orders are coming from and how much you're spending to get them.",
                },
                {
                  title: "A unified view of customers",
                  desc: "Get a trusted view of customer behavior across your online store, email, messaging, and ad platforms.",
                },
                {
                  title: "Take action",
                  desc: "Optimize your ad spend, improve targeting, and personalize customer experiences.",
                },
                {
                  title: "Built in privacy and consent",
                  desc: "Ensure compliance, protect privacy, and honor customers' consent by default.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-b border-border pb-6 last:border-0"
                >
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-foreground font-semibold hover:underline underline-offset-4"
              >
                Explore analytics
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Build Knowledge Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="section-padding">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
              Build your knowledge
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Master your marketing skills
            </h2>
          </div>

          {/* Academy Card */}
          <div className="mb-12 rounded-2xl overflow-hidden relative">
            <img
              src="/assets/academy-bg.png"
              alt="Academy"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-primary/60 flex flex-col justify-end p-8 md:p-12">
              <span className="inline-block bg-shopify-green text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                New
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Learn marketing fundamentals
              </h3>
              <p className="text-primary-foreground/80 mb-4 max-w-lg">
                Optimize your use of marketing products to expand your customer
                base, increase sales, and grow your business.
              </p>
              <a
                href="#"
                className="text-primary-foreground font-semibold underline underline-offset-4 hover:opacity-80"
              >
                Take the course
              </a>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Rank higher in search results",
                desc: "Step-by-step guidance on how SEO works and getting your shop found on Google.",
                link: "SEO guide",
              },
              {
                title: "Make better business decisions using data",
                desc: "Proven strategies to use customer data to inform your marketing and increase sales.",
                link: "Data strategies",
              },
              {
                title: "Use email to drive sales",
                desc: "Four email marketing strategies to deliver the best email marketing campaigns.",
                link: "Email marketing",
              },
              {
                title: "Increase sales productivity by 25%",
                desc: "Explore engagement data from leading platforms and tools to maximize your ROI.",
                link: "Marketing insights",
              },
            ].map((item) => (
              <div key={item.title} className="group cursor-pointer">
                <h4 className="text-base font-bold text-foreground mb-2 group-hover:underline underline-offset-4">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.desc}
                </p>
                <span className="text-sm font-semibold text-foreground inline-flex items-center gap-1">
                  {item.link} <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Solutions Section */}
      <section className="py-20 md:py-28 bg-section-bg">
        <div className="section-padding">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
              More solutions
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Every tool to power your business
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: "/assets/pos-system.png",
                title: "Sell everywhere",
                desc: "Sell wherever your customers are—online, in person, and everywhere else.",
                link: "Discover more",
              },
              {
                img: "/assets/fulfillment.png",
                title: "Fulfill orders faster and for less",
                desc: "From deep discounts on shipping to centralized order management—it's all included.",
                link: "Discover more",
              },
              {
                img: "/assets/apps-illustration.png",
                title: "More commerce apps",
                desc: "The App Store features 8,000 apps, vetted and tested to help you sell smarter and faster.",
                link: "Visit now",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.desc}
                  </p>
                  <a
                    href="#"
                    className="text-sm font-semibold text-foreground inline-flex items-center gap-1 group-hover:underline underline-offset-4"
                  >
                    {item.link} <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="section-padding text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Start selling with Sellery today
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Try Sellery for free, and explore all the tools and services you
            need to start, run, and grow your business.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full text-base hover:opacity-90 transition-opacity"
          >
            Start free trial
          </a>
        </div>
      </section>
    </div>
  );
};

/* Feature Card Component */
const FeatureCard = ({
  tag,
  title,
  description,
  link,
  className = "",
}: {
  tag: string;
  title: string;
  description: string;
  link: { label: string; href: string };
  className?: string;
}) => (
  <div
    className={`bg-card rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow group ${className}`}
  >
    <span className="text-xs font-semibold text-shopify-green uppercase tracking-wider">
      {tag}
    </span>
    <h3 className="text-xl font-bold text-foreground mt-3 mb-3">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
      {description}
    </p>
    <a
      href={link.href}
      className="text-sm font-semibold text-foreground inline-flex items-center gap-1 group-hover:underline underline-offset-4"
    >
      {link.label} <ArrowRight className="w-3 h-3" />
    </a>
  </div>
);

export default MarketingPage;
