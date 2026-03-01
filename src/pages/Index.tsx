import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CommercePlatformSection from "@/components/CommercePlatformSection";
import EntrepreneursSection from "@/components/EntrepreneursSection";
import SellEverywhereSection from "@/components/SellEverywhereSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CommercePlatformSection />
        <EntrepreneursSection />
        <SellEverywhereSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
