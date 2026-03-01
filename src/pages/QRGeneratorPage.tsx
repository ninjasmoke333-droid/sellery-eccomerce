// QRGeneratorPage.tsx
import { useState, useEffect, useRef } from "react";
import {
  Download,
  Link as LinkIcon,
  QrCode,
  Sparkles,
  Copy,
  Check,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar"; // Adjust path if needed
import { QRCodeSVG } from "qrcode.react";


// For real QR generation we'll use a library like qrcode.react in a real project
// Here we simulate with placeholder + actual <canvas> approach for demo

const QRGeneratorPage = () => {
  const [url, setUrl] = useState("https://yourstore.com/products/best-seller");
  const [qrColor, setQrColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState(280);
  const [copied, setCopied] = useState(false);
  const [generated, setGenerated] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Simple QR simulation – in real app use 'qrcode' or 'qrcode.react'
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Fake QR code pattern (real one would come from library)
    ctx.fillStyle = qrColor;

    // Simple mock QR pattern
    const block = size / 25;
    // finder patterns
    ctx.fillRect(block * 2, block * 2, block * 7, block * 7);
    ctx.fillRect(size - block * 9, block * 2, block * 7, block * 7);
    ctx.fillRect(block * 2, size - block * 9, block * 7, block * 7);

    // timing patterns
    for (let i = 0; i < 21; i += 2) {
      ctx.fillRect(block * (i + 8), block * 6, block, block);
      ctx.fillRect(block * 6, block * (i + 8), block, block);
    }

    // random data modules
    for (let y = 0; y < 21; y++) {
      for (let x = 0; x < 21; x++) {
        if ((x < 9 && y < 9) || (x > 11 && y < 9) || (x < 9 && y > 11))
          continue; // skip finder areas
        if (Math.random() > 0.65) {
          ctx.fillRect(block * x, block * y, block, block);
        }
      }
    }

    setGenerated(true);
  }, [url, qrColor, bgColor, size]);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const link = document.createElement("a");
    link.download = "sellery-qr-code.png";
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
              Create QR Codes <span className="glow-text">in seconds.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Generate beautiful, trackable QR codes for your products, menus,
              Wi-Fi, business cards — anything. Fully branded, Sellery style.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#generator"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Start Creating <ArrowRight className="w-5 h-5" />
              </a>
              <button className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
                <Sparkles className="w-5 h-5 text-sellery-green" />
                See Examples
              </button>
            </div>
          </div>

          {/* Preview Card */}
          <div className="relative w-full max-w-md animate-fade-in-up">
            <div className="bg-gradient-to-br from-secondary via-background to-secondary/60 rounded-3xl p-8 shadow-2xl border border-border/40">
              <div
                className="rounded-2xl overflow-hidden shadow-xl"
                style={{
                  background: bgColor,
                  width: "220px",
                  height: "220px",
                  padding: "20px",
                }}
              >
                <QRCodeSVG
                  value={url.trim() || "https://example.com"} // fallback if empty
                  size={size} // or fixed 180 if you prefer
                  fgColor={qrColor}
                  bgColor={bgColor}
                  level="H" // "L","M","Q","H" — H = highest error correction
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                />
              </div>
              <p className="text-center text-muted-foreground text-sm">
                Your brand • Your colors • Your link
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section
        id="generator"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <div className="bg-secondary/40 rounded-3xl p-8 md:p-12 border border-border/50 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left – Controls */}
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium mb-2  items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-sellery-green" />
                  Destination URL or Text
                </label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://yourstore.com/products/..."
                  className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sellery-green/40 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    QR Color
                  </label>
                  <input
                    type="color"
                    value={qrColor}
                    onChange={(e) => setQrColor(e.target.value)}
                    className="w-full h-12 bg-transparent rounded-lg cursor-pointer border border-border overflow-hidden"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Background
                  </label>
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-full h-12 bg-transparent rounded-lg cursor-pointer border border-border overflow-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Size (px)
                </label>
                <input
                  type="range"
                  min="180"
                  max="600"
                  step="20"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full accent-sellery-green"
                />
                <div className="text-right text-sm text-muted-foreground mt-1">
                  {size} × {size}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={handleDownload}
                  disabled={!generated}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-secondary hover:bg-secondary/80 font-medium transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download PNG
                </button>

                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-secondary hover:bg-secondary/80 font-medium transition-colors"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                  {copied ? "Copied!" : "Copy URL"}
                </button>
              </div>
            </div>

            {/* Right – Preview + Usage */}
            <div className="flex flex-col items-center justify-center gap-8">
              <div
                className="rounded-2xl overflow-hidden shadow-xl"
                style={{
                  background: bgColor,
                  width: "220px",
                  height: "220px",
                  padding: "20px",
                }}
              >
                <QRCodeSVG
                  value={url.trim() || "https://example.com"} // fallback if empty
                  size={size} // or fixed 180 if you prefer
                  fgColor={qrColor}
                  bgColor={bgColor}
                  level="H" // "L","M","Q","H" — H = highest error correction
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                />
              </div>

              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold">Ready to use</h3>
                <p className="text-muted-foreground">
                  Add to product pages • packaging • receipts • social posts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
          One QR for every moment
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Product Page",
              desc: "Link directly to any product or collection",
              img: "/assets/product-page.jpg",
            },
            {
              title: "In-Store Experience",
              desc: "Let customers scan to add items to cart instantly",
              img: "/assets/in-store-experience.jpg",
            },
            {
              title: "Wi-Fi & Contact",
              desc: "Share store Wi-Fi or contact details effortlessly",
              img: "/assets/wifi-contact.jpg",
            },
            {
              title: "Social Proof",
              desc: "Drive reviews, Instagram follows, TikTok",
              img: "/assets/social-proof.jpg",
            },
            {
              title: "Business Card",
              desc: "Modern digital vCard – no typing required",
              img: "/assets/business-card.jpg",
            },
            {
              title: "Menu / Catalog",
              desc: "Perfect for cafes, pop-ups, events",
              img: "/assets/menu-catalog.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-secondary/30 border border-border hover:border-sellery-green/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-video relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-white/80 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="p-5 rounded-full bg-sellery-green/10">
              <QrCode className="w-12 h-12 text-sellery-green" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Ready to connect the real world{" "}
            <span className="glow-text">to your store?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Create unlimited QR codes — no credit card required.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-primary-foreground font-semibold text-xl hover:opacity-90 transition-opacity shadow-2xl"
          >
            Start Generating Now <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32" />
    </div>
  );
};

export default QRGeneratorPage;
