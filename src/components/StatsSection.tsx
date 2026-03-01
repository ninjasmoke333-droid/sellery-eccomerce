const stats = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    label: "300 points of presence",
    description: "so your store loads instantly everywhere",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    label: "Every 26 seconds",
    description: "an entrepreneur on Shopify makes their first sale",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    label: "175 countries",
    description: "with merchants selling on Shopify",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "MILLIONS",
    description: "of merchants on Shopify",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    label: "$1,000,000,000,000",
    description: "total sales and counting",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    label: "$4,200,000",
    description: "sales per minute during peak sales times",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            There's no better place for you to build
          </h2>
        </div>

        {/* Checkout Stats */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center">
            The world's best-converting checkout
          </h3>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-5xl sm:text-6xl font-bold text-shopify-green">15</span>
                <span className="text-3xl font-bold text-shopify-green">%</span>
              </div>
              <p className="text-muted-foreground">Higher conversions</p>
            </div>
            <div className="text-center">
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-5xl sm:text-6xl font-bold text-shopify-green">150M</span>
                <span className="text-3xl font-bold text-shopify-green">+</span>
              </div>
              <p className="text-muted-foreground">High-intent shoppers</p>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            <a href="#" className="text-foreground underline underline-offset-4 hover:text-shopify-green transition-colors">
              Shopify Checkout
            </a>{" "}
            converts 15% higher on average than other commerce platforms and exposes your brand to 150 million buy-ready shoppers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-xl bg-card hover:bg-secondary/30 transition-colors">
              <div className="text-shopify-green mb-4">{stat.icon}</div>
              <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                {stat.label}
              </h4>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Performance Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-card">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Rock steady and blazing fast
            </h3>
            <p className="text-muted-foreground">
              Shopify puts your store within 50 milliseconds of every shopper on the planet, with the capacity to handle even the most epic product drops.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-card">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Shopify keeps you at the cutting edge
            </h3>
            <p className="text-muted-foreground">
              Our fleet of 4000+ world-class developers never stops leveraging the latest tech to make your business stronger, faster, and more successful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
