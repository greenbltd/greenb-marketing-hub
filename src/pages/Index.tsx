import { CTASection } from "@/components/CTASection";
import { FAQBlock, type FAQItem } from "@/components/FAQBlock";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeSolutions } from "@/components/HomeSolutions";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ImpactSection } from "@/components/ImpactSection";
import { ProductsSection } from "@/components/ProductsSection";
import { Seo } from "@/components/Seo";
import { TeamSection } from "@/components/TeamSection";

const faqs: FAQItem[] = [
  { question: "What does GreenB do?", answer: "GreenB combines smart waste management, connected bins, recycling participation and EcoRewards to help communities turn waste into environmental and economic value." },
  { question: "Who can work with GreenB?", answer: "Individuals, businesses, institutions, communities and public-sector teams can explore the solution that fits their waste or recycling goals." },
  { question: "How do I request a Smart Bin or consultation?", answer: "Use the contact form to share your location, waste streams and intended use. The GreenB team can then recommend the next step." },
  { question: "How does EcoRewards work?", answer: "Collect accepted recyclables, request collection through the GreenB app, receive verification and participate in the applicable rewards programme." },
];

const Index = () => (
  <div className="min-h-screen">
    <Seo title="GreenB | Smart Waste Management, Circular Economy & Real Impact" description="GreenB combines AI, IoT, smart bins, recycling and EcoRewards to create smarter waste management and real circular-economy impact." path="/" />
    <Header />
    <main>
      <HeroSection />
      <HomeSolutions />
      <AboutSection />
      <HowItWorksSection />
      <ProductsSection />
      <ImpactSection />
      <TeamSection />
      <FAQBlock items={faqs} heading="Frequently asked questions" />
      <ContactSection />
      <CTASection title="Ready to create real impact from waste?" description="Request a Smart Bin, join GreenB EcoRewards or talk to GreenB about a partnership." primary={{ label: "Contact GreenB", to: "/contact" }} secondary={{ label: "Explore Solutions", to: "/solutions" }} />
    </main>
    <Footer />
  </div>
);

export default Index;
