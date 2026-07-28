import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ToolsGrid from "@/components/ToolsGrid";
import HowItWorks from "@/components/HowItWorks";
import { TrustSection, Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ToolsGrid />
        <HowItWorks />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}
