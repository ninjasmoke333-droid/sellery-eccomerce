import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import videoSrc from '@/assets/sellery-vid-1.mp4';

const rotatingTexts = [
  "big thing",
  "store they line up for",
  "one to watch",
  "category creator",
  "unicorn startup",
  "household name",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
    poster="https://cdn.shopify.com/b/shopify-brochure2-assets/e7e2c7d1a0e1b6a0c8c6d7d0d6d0d6d0.jpg"
  >
    <source
      src="/assets/sellery-vid-1.mp4"
      type="video/mp4"
    />
  </video>
  {/* Overlay with gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
</div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          {/* Animated Title */}
          <h1 className="hero-title mb-8">
            <span className="block">Be the next</span>
            <div className="relative h-[1.2em] overflow-hidden mb-2">
              {rotatingTexts.map((text, index) => (
                <span
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-all duration-700 ${
                    index === currentIndex
                      ? "opacity-100 translate-y-0"
                      : index < currentIndex
                      ? "opacity-0 -translate-y-full"
                      : "opacity-0 translate-y-full"
                  }`}
                  style={{
                    fontFamily: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
                    fontWeight: 800,
                    fontStyle: 'italic',
                    letterSpacing: '-0.025em',
                    lineHeight: 1,
                    color: 'hsl(var(--foreground))',
                    display: 'inline-block',
                  }}
                >
                  {text}
                </span>
              ))}
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-md">
            Dream big, build fast, and grow far on Shopify.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="btn-primary">
              Start for free
            </a>
            <button className="btn-secondary">
              <Play className="w-5 h-5" />
              Why we build Sellery
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - optional, you might want to remove this for bottom alignment */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;