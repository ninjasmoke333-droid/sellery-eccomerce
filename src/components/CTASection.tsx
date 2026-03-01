const steps = [
  { number: "01", text: "Add your first product" },
  { number: "02", text: "Customize your store" },
  { number: "03", text: "Set up payments" },
];

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title mb-8">
            Start selling in no time
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <span className="text-4xl font-bold text-shopify-green mb-2 block">
                {step.number}
              </span>
              <p className="text-lg text-foreground">{step.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="#" className="btn-primary text-lg px-8 py-4">
            Take your shot
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
