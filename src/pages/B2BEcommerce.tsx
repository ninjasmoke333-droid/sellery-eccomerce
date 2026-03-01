import { useState } from "react";
import {
  Users,
  BookOpen,
  DollarSign,
  BarChart3,
  Settings,
  Globe,
  Code,
  Workflow,
  UserPlus,
  ShieldCheck,
  FileCheck,
  Palette,
  ClipboardList,
  Wallet,
  RotateCcw,
  CreditCard,
  Percent,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";





const featureTabs = [
  {
    title: "Cater to every customer",
    description:
      "Curate end-to-end buying with custom pricing, product publishing, quantity rules, and payment terms. Represent companies with multiple buyers and locations, and manage purchasing permissions with ease.",
    image: "/assets/feature-catalogs.jpg",
  },
  {
    title: "Personalize your storefront",
    description:
      "Build a powerful storefront with personalized content for every buyer. Choose from out-of-the-box B2B themes, build custom with Liquid, or go headless with our storefront and customer account APIs.",
    image: "/assets/feature-storefront.jpg",
  },
  {
    title: "Delight with self-checkout",
    description:
      "Scale your operations by letting customers make purchases with quick bulk-ordering tools, and manage their accounts with an intuitive and customizable portal.",
    image: "/assets/feature-checkout2.jpg",
  },
  {
    title: "Elevate your sales reps",
    description:
      "Enable your team to place orders and access information for their assigned accounts with permission levels specific to your business.",
    image: "/assets/feature-salesrep.jpg",
  },
];

const platformFeatures = [
  {
    title: "Reduce tech debt",
    description:
      "Streamline business operations, create brand consistency, and cut development costs by running B2B and DTC on the same platform.",
  },
  {
    title: "Launch faster",
    description:
      "Set up your store in weeks, not months, with a scaled composable framework and hundreds of innovative platform updates every year.",
  },
  {
    title: "Access all of Sellery, for B2B",
    description:
      "Use innovative features with wholesale, including product bundles, discounts, and workflow automation with Sellery Flow.",
  },
  {
    title: "Tap into the largest app ecosystem",
    description:
      "Customize your store and extend the platform to fit your business needs with our epic ecosystem of more than 8,000 apps.",
  },
];

const buyingFeatures = [
  {
    icon: Users,
    title: "Company profiles",
    desc: "Represent multiple buyers and locations with unique permission levels, payment terms, tax exemptions, and payment methods.",
  },
  {
    icon: BookOpen,
    title: "Customer-specific catalogs",
    desc: "Offer a curated buying experience with product catalogs assigned to a specific buyer or location.",
    badge: "new",
  },
  {
    icon: DollarSign,
    title: "Quantity rules",
    desc: "Create customer-specific conditional rules for products and variants, including minimums and maximums, case packs, and increments.",
  },
  {
    icon: BarChart3,
    title: "Volume pricing",
    desc: "Easily implement quantity price breaks to get your B2B customers buying in larger quantities.",
  },
  {
    icon: Settings,
    title: "Store personalization",
    desc: "Optimize the experience for B2B customers by surfacing relevant content to the right audience in one store.",
    badge: "new",
  },
  {
    icon: Globe,
    title: "Headless storefronts",
    desc: "Gain total control over your buyer experience with APIs and developer tools along with your tech stack.",
    badge: "new",
  },
  {
    icon: Code,
    title: "Custom B2B solutions",
    desc: "Build the solution your business needs with our suite of B2B APIs and compatible apps.",
  },
];

const workflowFeatures = [
  {
    icon: Workflow,
    title: "Workflow automations",
    desc: "Our proprietary automation tool now does more for B2B with support for companies and company locations.",
    badge: "new",
  },
  {
    icon: UserPlus,
    title: "Company account requests",
    desc: "Add an account request form to your store. Buyer information is automatically saved as a company.",
    badge: "new",
  },
  {
    icon: ShieldCheck,
    title: "Sales rep permissions",
    desc: "Add sales reps as staff in the admin with the permissions they need to only access assigned customers.",
    badge: "new",
  },
  {
    icon: FileCheck,
    title: "Checkout to draft",
    desc: "Simplify workflows and quotes with the ability to submit for review on your online store and approve before fulfilling.",
  },
  {
    icon: Palette,
    title: "B2B-optimized theme",
    desc: "Accelerate your store setup with Trade, our out-of-the-box theme designed for wholesale.",
    badge: "new",
  },
  {
    icon: ClipboardList,
    title: "PO numbers",
    desc: "Capture PO numbers on orders and at checkout, visible in the admin, within customer accounts, and on the Orders API.",
  },
];

const purchasingFeatures = [
  {
    icon: ClipboardList,
    title: "Quick bulk ordering",
    desc: "Show buyers a list of all products and variants so they can easily order sizes, colors, and more.",
    badge: "new",
  },
  {
    icon: Wallet,
    title: "Flexible payment options",
    desc: "Streamline the order process with payment terms and the ability to send invoices for payment.",
  },
  {
    icon: RotateCcw,
    title: "Easy reordering",
    desc: "Encourage repeat orders by making it easy for buyers to reorder past purchases from their customer account.",
  },
  {
    icon: CreditCard,
    title: "Vaulted credit cards",
    desc: "Speed up payment by securely storing customer credit cards on file for use at checkout and on draft orders.",
  },
  {
    icon: Percent,
    title: "Custom discounts",
    desc: "Offer promotional discounts on top of wholesale prices, tailored to your B2B buyers.",
    badge: "new",
  },
];

const testimonials = [
  {
    quote:
      "Our B2B process was manual and time consuming. In order to scale, we needed an easier way to cater to these B2B customers. That's where B2B on Sellery comes in.",
    company: "Brooklinen",
    role: "Head of Wholesale",
  },
  {
    quote:
      "We can set up a new retailer in the wholesale website to make the user experience highly personalized to that customer.",
    company: "SwimOutlet",
    role: "Director of Operations",
  },
  {
    quote:
      "The constant updates to B2B on Sellery have left us pleasantly surprised. It seems like these releases are highly tailored to the needs of B2B merchants.",
    company: "BioLab Sciences",
    role: "CTO",
  },
];

const faqItems = [
  {
    q: "What is B2B on Sellery?",
    a: "The best of Sellery, now available for wholesale. B2B on Sellery is a suite of first-party features integrated right in the admin. That means access to advanced customization for themes, pricing, and checkout as part of your Plus plan.",
  },
  {
    q: "How does it work?",
    a: "B2B on Sellery gives you the freedom to choose between one online store for both DTC and wholesale—or a dedicated B2B store. Your buyers will have customer-specific pricing, payment terms, tax exemptions, and more.",
  },
  {
    q: "What features does this B2B ecommerce solution have?",
    a: "Everything you need: company profiles, product publishing and pricing, flexible payment options, B2B checkout, customer accounts, custom themes, discounts, Functions, and APIs.",
  },
  {
    q: "Is B2B on Sellery included in my plan?",
    a: "If you're on a Plus plan, B2B on Sellery is included at no extra cost.",
  },
  {
    q: "Can I integrate my ERP with Sellery?",
    a: "Absolutely. We're working with global ERP partners so that businesses can integrate their essential business data and start selling wholesale fast. You can also connect your ERP through APIs.",
  },
];

const logoNames = [
  "Momofuku",
  "Laura Mercier",
  "Life Fitness",
  "YETI",
  "Brooklinen",
];

const B2BEcommerce = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pb-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <div className="pt-12 lg:pt-0">
              <p className="section-label mb-4">B2B Commerce Platform</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                B2B and DTC,
                <br />
                all in one place
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Run your wholesale and direct-to-consumer businesses on a single
                platform without compromises.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="#" className="btn-primary">
                  Start for free
                </a>
                <a href="#contact-sales" className="btn-outline">
                  Get in touch
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Already on Sellery?{" "}
                <a
                  href="#"
                  className="text-primary underline underline-offset-4"
                >
                  Upgrade to Plus
                </a>{" "}
                to unlock B2B selling.
              </p>
            </div>
            <div className="relative">
              <img
                src="/assets/hero-b2b.png" // ← change to your actual filename
                alt="B2B Commerce Platform showing wholesale pricing and product management"
                className="rounded-2xl w-full shadow-2xl shadow-primary/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Award Banner */}
      <section className="py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-border rounded-2xl px-6 py-4 flex items-center gap-3 justify-center text-center">
            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
            <p className="text-foreground text-sm sm:text-base">
              Sellery named a Leader in 2024{" "}
              <a
                href="#"
                className="text-primary underline underline-offset-4 font-medium"
              >
                Forrester Wave™: Commerce Solutions for B2B
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-60">
            {logoNames.map((name) => (
              <span
                key={name}
                className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Tabs Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">custom wholesale experiences</p>
            <h2 className="section-heading mb-4">B2B that means business</h2>
            <p className="section-subheading mx-auto">
              Everything you need, right out of the box, to shape the right
              experience for every customer.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {featureTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                {featureTabs[activeTab].title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {featureTabs[activeTab].description}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src={featureTabs[activeTab].image}
                alt={featureTabs[activeTab].title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unified Platform Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">all-in-one solution</p>
            <h2 className="section-heading mb-4">
              A unified platform for omnichannel growth
            </h2>
            <p className="section-subheading mx-auto">
              With over 2 decades of commerce excellence, Sellery is helping B2B
              businesses evolve and innovate quickly.
            </p>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden border border-border max-w-4xl mx-auto">
            <img
              src="/assets/feature-unified.jpg"
              alt="Unified DTC and B2B platform"
              className="w-full"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((f, i) => (
              <div key={i} className="feature-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">B2B features</p>
            <h2 className="section-heading mb-4">
              Next-level wholesale features, right out of the box
            </h2>
          </div>

          {/* Customized buying */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Customized buying experiences
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {buyingFeatures.map((f, i) => (
                <FeatureCard key={i} {...f} />
              ))}
            </div>
          </div>

          {/* Optimized workflows */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Optimized workflows
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {workflowFeatures.map((f, i) => (
                <FeatureCard key={i} {...f} />
              ))}
            </div>
          </div>

          {/* Self-serve purchasing */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Self-serve purchasing
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {purchasingFeatures.map((f, i) => (
                <FeatureCard key={i} {...f} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">endless integrations</p>
            <h2 className="section-heading mb-4">
              All your critical systems, all connected
            </h2>
            <p className="section-subheading mx-auto">
              Sellery works as a standalone system or fits right into your tech
              stack to streamline your operations.
            </p>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden border border-border max-w-4xl mx-auto">
            <img
              src="/assets/feature-integrations.jpg"
              alt="Integration diagram"
              className="w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="feature-card">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Robust integration solutions
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Integrate with your preferred ERP, OMS, and CMS tools for
                seamless data syncing, or use APIs with connectors to build
                custom integrations.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Unlimited flexibility
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tailor your business solutions with headless storefront APIs,
                inject custom data with metafields, write custom logic with
                Functions, and customize your checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/assets/testimonial-bg.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-10"
              />
              <div className="relative p-8 sm:p-12 lg:p-16">
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                <div className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {testimonials[activeTestimonial].company}
                  </span>{" "}
                  — {testimonials[activeTestimonial].role}
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeTestimonial === i
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label mb-3">Popular questions</p>
              <h2 className="section-heading">
                All you need to know about B2B on Sellery
              </h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="feature-card cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-foreground pr-4">
                      {item.q}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openFaq === i && (
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28" id="contact-sales">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-8">
            Wholesale commerce designed for
            <br className="hidden sm:block" /> scale and customization
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="btn-primary gap-2">
              Start for free <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="btn-outline">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Sellery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  desc,
  badge,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  badge?: string;
}) => (
  <div className="feature-card group">
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-sm font-semibold text-foreground">{title}</h4>
          {badge && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-1.5 py-0.5 rounded">
              {badge}
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);

export default B2BEcommerce;
