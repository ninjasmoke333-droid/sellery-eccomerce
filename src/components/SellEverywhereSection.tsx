const features = [
  {
    badge: "Online and in person",
    title: "Sell here, there, and everywhere",
    description: "Get a stunning store that's made to sell. Design fast with AI, choose a stylish theme, or build completely custom for full control.",
    linkText: "Get a stunning store",
    image: "https://cdn.shopify.com/b/shopify-brochure2-assets/64809df6a89121d7102d083e2c906364.png?originalWidth=1454&originalHeight=1730",
  },
];

const subFeatures = [
  {
    title: "In-person point of sale",
    description: "Sell face to face and keep offline and online sales in sync with Shopify POS.",
    linkText: "Shopify POS",
  },
  {
    title: "Publish across channels",
    description: "Show up where shoppers scroll, search, and shop with multichannel integration.",
    linkText: "multichannel integration",
  },
  {
    title: "Powered by the world's best checkout",
    description: "Shopify Checkout is fast, fully customizable, and optimized to close more sales.",
    linkText: "Shopify Checkout",
  },
];

const SellEverywhereSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Feature */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="inline-block text-sm text-muted-foreground mb-4">
              {features[0].badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              {features[0].title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              <a href="#" className="text-foreground underline underline-offset-4 hover:text-shopify-green transition-colors">
                {features[0].linkText}
              </a>{" "}
              that's made to sell. Design fast with AI, choose a stylish theme, or build completely custom for full control.
            </p>
          </div>
          <div className="relative">
            <img
              src={features[0].image}
              alt="POS Hardware"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Sub Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {subFeatures.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h4>
              <p className="text-muted-foreground">
                {feature.description.split(feature.linkText)[0]}
                <a href="#" className="text-foreground underline underline-offset-4 hover:text-shopify-green transition-colors">
                  {feature.linkText}
                </a>
                {feature.description.split(feature.linkText)[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellEverywhereSection;
