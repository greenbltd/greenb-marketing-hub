import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-greenb-900/90 via-greenb-800/80 to-greenb-700/70" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-greenb-400/10 rounded-full blur-3xl animate-float delay-300" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto container-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Smart Waste Management. Circular Economy. Real Impact.
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up delay-100 leading-tight">
            Smart Waste Management.
            <span className="block mt-2">
              Circular Economy. <span className="text-greenb-300">Real Impact.</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            GreenB combines AI, IoT, smart bins, recycling and GREENB EcoRewards to
            help people and organizations turn waste into environmental and economic value.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-glow hover:shadow-glow-lg transition-all"
            >
              <a href="https://greenbapp.com" target="_blank" rel="noopener noreferrer">
                Explore GreenB Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#about")}
              className="bg-transparent border-2 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-colors"
            >
              <Play className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          <div className="mt-20 border-t border-primary-foreground/20 pt-8 text-sm text-primary-foreground/75 animate-fade-in-up delay-500">
            AI-enabled insight · IoT monitoring · Recycling participation · Community partnerships
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
