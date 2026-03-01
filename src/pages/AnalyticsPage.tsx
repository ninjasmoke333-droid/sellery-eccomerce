




import Navbar from "@/components/Navbar";

const chartCards = [
  { src: "/assets/chart-sessions-device.png", alt: "Sessions by device" },
  { src: "/assets/chart-customers-time.png", alt: "Customers over time" },
  { src: "/assets/chart-total-sales.png", alt: "Total sales" },
  { src: "/assets/chart-sales-country.png", alt: "Gross sales by country" },
  { src: "/assets/chart-sales-product.png", alt: "Sales by product name" },
  { src: "/assets/chart-sales-device.png", alt: "Gross sales by device" },
  { src: "/assets/chart-sessions-country.png", alt: "Sessions by country" },
  { src: "/assets/chart-sessions-time.png", alt: "Sessions over time" },
];

const AnalyticsPage = () => {
  return (
    
    
    <main>
        <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 text-center relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{  zIndex: 0 }}
        >
          <source src="/assets/anal-1.mp4" type="video/mp4" />
        </video>
        <div className="relative" style={{backgroundColor: "rgba(0,0,0,0.)", zIndex: 1 }}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Analytics and Reporting
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.1] mb-6">
            Make smart business decisions, quickly
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Real-time and reliable data about your store, no set-up required
          </p>
          <a
            href="#"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
          >
            View your analytics
          </a>
        </div>
      </section>

      {/* Scrolling Chart Cards */}
      <section className="py-8 overflow-hidden">
        <style>{`
    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `}</style>
        <div
          className="flex"
          style={{
            width: "fit-content",
            animation: "scroll-left 30s linear infinite",
          }}
        >
          {[...chartCards, ...chartCards].map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-3 rounded-xl overflow-hidden shadow-sm border border-border bg-card"
              style={{ width: 318, height: 243 }}
            >
              <img
                src={card.src}
                alt={card.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Feature Sections */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight">
          Fast, flexible, and relevant reporting
        </h2>

        {/* Feature 1 - Pre-built reports */}
        <FeatureRow
          title="Pre-built reports for commerce"
          description="Access reports that are designed for commerce insights. Immediately understand your store's performance with no additional work required, so you can respond faster and make optimizations."
          cta="See reports"
          image="/assets/analytics-sales.png"
          imageAlt="Sales analytics dashboard"
        />

        {/* Feature 2 - Deeper data */}
        <FeatureRow
          title="Deeper data exploration"
          description="Modify pre-built reports or create your own from scratch to answer questions specific to your business. Layer on additional metrics and dimensions to drill down deeper into your reporting."
          cta="Start exploring"
          image="/assets/analytics-conversion.png"
          imageAlt="Conversion rate analytics"
          reverse
        />

        {/* Feature 3 - Real-time */}
        <FeatureRow
          title="Real-time monitoring"
          description="Never miss a change in your store's performance with real-time data updates in your dashboard and across all reports. Drag, drop, and tailor your dashboard to see your most critical metrics at a glance."
          cta="View your dashboard"
          image="/assets/analytics-sessions.png"
          imageAlt="Sessions analytics"
        />
      </section>

      {/* Essential Analytics Grid */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          Check all of your essential analytics in one place
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <AnalyticsCard
            image="/assets/analytics-sales.png"
            title="Sales"
            description="Know how much money your store is making across channels."
          />
          <AnalyticsCard
            image="/assets/analytics-conversion.png"
            title="Conversion rate"
            description="Understand what it takes for site visitors to become customers."
          />
          <AnalyticsCard
            image="/assets/analytics-sessions.png"
            title="Sessions"
            description="See the site traffic your store is getting, and where your visitors come from."
          />
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
          >
            Go to your dashboard
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <Testimonial
            image="/assets/testimonial-1.png"
            quote="By using analytics and reporting to identify best sellers and sales trends, we were able to grow our revenue year over year by 50% at Christmas."
            name="Ruby Friel"
            role="Founder, Still Life Story"
          />
          <Testimonial
            image="/assets/testimonial-2.png"
            quote="Creating custom dashboards lets us focus on our core product performance without needing to export and clean the data. It allows us to stay nimble and reactive."
            name="Shelby Adams"
            role="Operations Manager, Cleverhood"
          />
        </div>
      </section>

      {/* Marketing Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/assets/analytics-marketing.png"
              alt="Marketing measurement"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
              Marketing measurement
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Manage your multichannel marketing by organizing marketing
              activities like email, social, ads, and organic traffic into
              Campaigns. Use channel marketing reports to better understand top
              channels, attribution, customer acquisition cost, and return on ad
              spend.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
              Benchmark your store based on similar stores
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Take advantage of aggregated platform insights to understand and
              compare your business performance to similar businesses.
            </p>
          </div>
          <div>
            <img
              src="/assets/analytics-benchmark.png"
              alt="Benchmark analytics"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Live View Section */}
      <section className="bg-primary text-primary-foreground py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Live view
            </h2>
            <p className="text-2xl sm:text-3xl font-semibold mb-6 opacity-80">
              Watch every sale roll in
            </p>
            <p className="text-lg opacity-70 mb-8 leading-relaxed">
              Follow flash sales, Black Friday Cyber Monday (BFCM), and
              promotions in real time with dynamic metrics, geographical data,
              and rich visualizations.
            </p>
            <a
              href="#"
              className="inline-block border-2 border-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              View live metrics
            </a>
          </div>
          <div>
            <img
              src="/assets/analytics-liveview.png"
              alt="Live view globe"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Measurement That Scales */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          Measurement that scales with your business
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ScaleCard
            title="Connect to your data"
            description="Access your data wherever you need it through our API or connect to analytics integrations available in our app store."
          />
          <ScaleCard
            title="Write custom queries"
            description="Query your data using a built-in query editor and our query language designed for commerce, available in every report."
          />
          <ScaleCard
            title="Access more apps"
            description="Tap into our ecosystem of apps and partners to meet all your supplemental data and measurement needs."
          />
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/analytics-connect.png"
            alt="Connect API"
            className="max-w-2xl w-full rounded-2xl"
            loading="lazy"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-24 px-4 bg-secondary">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Start measuring with Sellery today
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Try Sellery for free, and explore all the tools and services you need
          to start, run, and grow your business.
        </p>
        <a
          href="#"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
        >
          Start free trial
        </a>
      </section>
    </main>
  );
};

/* Sub-components */

const FeatureRow = ({
  title,
  description,
  cta,
  image,
  imageAlt,
  reverse = false,
}: {
  title: string;
  description: string;
  cta: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) => (
  <div
    className={`grid md:grid-cols-2 gap-12 items-center mb-24 ${reverse ? "md:[direction:rtl]" : ""}`}
  >
    <div className={reverse ? "md:[direction:ltr]" : ""}>
      <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
        {title}
      </h3>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        {description}
      </p>
      <a
        href="#"
        className="text-foreground font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity"
      >
        {cta}
      </a>
    </div>
    <div className={reverse ? "md:[direction:ltr]" : ""}>
      <img
        src={image}
        alt={imageAlt}
        className="w-full rounded-2xl"
        loading="lazy"
      />
    </div>
  </div>
);

const AnalyticsCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => (
  <div className="text-center">
    <img
      src={image}
      alt={title}
      className="w-full rounded-2xl mb-6"
      loading="lazy"
    />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Testimonial = ({
  image,
  quote,
  name,
  role,
}: {
  image: string;
  quote: string;
  name: string;
  role: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <img
      src={image}
      alt={name}
      className="w-20 h-20 rounded-full mb-6 object-cover"
      loading="lazy"
    />
    <blockquote className="text-lg font-medium leading-relaxed mb-4 italic">
      "{quote}"
    </blockquote>
    <p className="font-semibold">{name}</p>
    <p className="text-muted-foreground text-sm">{role}</p>
  </div>
);

const ScaleCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="p-6 rounded-2xl bg-secondary">
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export default AnalyticsPage;
