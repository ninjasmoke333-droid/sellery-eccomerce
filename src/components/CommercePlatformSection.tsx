import { useState } from "react";

const sellingPoints = [
  { text: "Sell online and in person.", highlighted: true },
  { text: "Sell locally and globally.", highlighted: false },
  { text: "Sell direct and wholesale.", highlighted: false },
  { text: "Sell on desktop and mobile.", highlighted: false },
];

const showcaseImages = [
  {
    url: "https://cdn.shopify.com/b/shopify-brochure2-assets/c65bc0c2daf1df2c109d1f9c14444a57.webp?originalWidth=1045&originalHeight=800",
    link: "glossier.com",
    size: "large",
  },
  {
    url: "https://cdn.shopify.com/b/shopify-brochure2-assets/82f295147d6f32cd1533aa843f68b0c2.webp?originalWidth=454&originalHeight=800",
    link: "thesill.com",
    size: "small",
  },
  {
    url: "https://cdn.shopify.com/b/shopify-brochure2-assets/92b0585e60e00efb6ceaf2aec6a66027.webp?originalWidth=1046&originalHeight=800",
    link: "vacation.inc",
    size: "large",
  },
  {
    url: "https://cdn.shopify.com/b/shopify-brochure2-assets/e919a4c2c7484b87699b2e6f5d020690.webp?originalWidth=454&originalHeight=800",
    link: "aurabora.com",
    size: "small",
  },
  {
    url: "https://cdn.shopify.com/b/shopify-brochure2-assets/268717f14ffc87467a9aeb1e6f5a7719.webp?originalWidth=1046&originalHeight=800",
    link: "kitandace.com",
    size: "large",
  },
  {
    url: "https://cdn.shopify.com/b/shopify-brochure2-assets/f11495397635517ec5ee47c2b360dd04.webp?originalWidth=1032&originalHeight=800",
    link: "supersmalls.com",
    size: "large",
  },
];

const CommercePlatformSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 lg:mb-16">
          <h2 className="section-title mb-6">
            The one commerce platform behind it all
          </h2>
          <div className="flex flex-wrap gap-2 text-xl sm:text-2xl lg:text-3xl">
            {sellingPoints.map((point, index) => (
              <span
                key={index}
                className={point.highlighted ? "text-foreground" : "text-muted-foreground"}
              >
                {point.text}
              </span>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {showcaseImages.map((image, index) => (
            <a
              key={index}
              href={`https://${image.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-lg ${
                image.size === "large" ? "col-span-2 row-span-2" : "col-span-1 row-span-2"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.url}
                alt={image.link}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className={`absolute inset-0 bg-background/60 flex items-end p-4 transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}>
                <span className="text-sm font-medium text-foreground underline underline-offset-4">
                  {image.link}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommercePlatformSection;
