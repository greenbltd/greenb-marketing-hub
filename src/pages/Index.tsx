import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ProductsSection } from "@/components/ProductsSection";
import { TeamSection } from "@/components/TeamSection";
import { ImpactSection } from "@/components/ImpactSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <ProductsSection />
        <TeamSection />
        <ImpactSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
