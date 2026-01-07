import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import smartBinImage from "@/assets/smart-bin-product.jpg";

const features = [
  "Real-time fill level monitoring",
  "Temperature & fire detection",
  "Solar-powered operation",
  "4G/LoRaWAN connectivity",
  "Weather-resistant design",
  "5+ year battery life",
];

const products = [
  {
    name: "GreenB Smart Bin Pro",
    description:
      "Our flagship smart waste bin with advanced IoT sensors for commercial and municipal use.",
    image: smartBinImage,
    features: features,
    badge: "Most Popular",
  },
];

export function ProductsSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Smart Solutions for{" "}
            <span className="gradient-text">Modern Cities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our range of IoT-enabled waste management solutions designed
            for efficiency and sustainability.
          </p>
        </div>

        {/* Product Showcase */}
        {products.map((product) => (
          <div
            key={product.name}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Product Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-greenb-400/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="relative bg-card rounded-3xl p-8 shadow-xl border border-border/50">
                {product.badge && (
                  <span className="absolute top-6 right-6 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                {product.name}
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                {product.description}
              </p>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                >
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToContact}
                  className="border-primary text-primary hover:bg-primary/5 font-semibold px-8"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
