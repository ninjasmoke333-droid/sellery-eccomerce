const entrepreneurs = [
  {
    title: "Get started fast",
    description: "Solo seller Megan Bre Camp started",
    brand: "Summer Solace Tallow",
    suffix: "to sell her organic candles and skincare online and at local farmers markets.",
    image: "https://cdn.shopify.com/b/shopify-brochure2-assets/4ce35eba1e546a23ff875c3eba8b5705.jpg?originalWidth=914&originalHeight=600",
  },
  {
    title: "Grow as big as you want",
    description: "Athleisure brand",
    brand: "Gymshark",
    suffix: "grew from working out of a garage to the global juggernaut it is today, with $500M+ sales annually.",
    image: "https://cdn.shopify.com/b/shopify-brochure2-assets/2083b4178afc5db338c7d6081f8a5838.jpg?originalWidth=916&originalHeight=600",
  },
  {
    title: "Raise the bar",
    description: "With the help of Shopify for enterprise,",
    brand: "Mattel",
    suffix: "sells their iconic toys direct to customers around the world.",
    image: "https://cdn.shopify.com/b/shopify-brochure2-assets/7c3d68ca99f2f743df8cb1187bbd2cb1.jpg?originalWidth=914&originalHeight=600",
  },
];

const EntrepreneursSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-lg text-muted-foreground mb-4">For everyone from entrepreneurs to enterprise</h3>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-foreground max-w-4xl">
            Millions of merchants of every size have collectively made over{" "}
            <span className="text-shopify-green font-semibold">$1,000,000,000,000</span> in sales on Shopify.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {entrepreneurs.map((item, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground">
                {item.description}{" "}
                <span className="text-foreground font-semibold">{item.brand}</span>{" "}
                {item.suffix}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a href="#" className="btn-outline">
            Pick a plan that fits
          </a>
        </div>
      </div>
    </section>
  );
};

export default EntrepreneursSection;
