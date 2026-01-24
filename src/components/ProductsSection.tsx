import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import smartBinWheelie from "@/assets/products/smart-bin-wheelie.jpeg";
import smartBinSorting from "@/assets/products/smart-bin-sorting.jpeg";
import smartBinOutdoor from "@/assets/products/smart-bin-outdoor.jpeg";
import smartBinDual from "@/assets/products/smart-bin-dual.jpeg";

const products = [
  {
    name: "GreenB Smart Wheelie Bin",
    description:
      "Our flagship smart waste bin with advanced IoT sensors for commercial and municipal use. Perfect for general waste collection.",
    image: smartBinWheelie,
    features: [
      "Real-time fill level monitoring",
      "Temperature & fire detection",
      "Solar-powered operation",
      "4G/LoRaWAN connectivity",
      "Weather-resistant design",
      "5+ year battery life",
    ],
    badge: "Most Popular",
  },
  {
    name: "GreenB Sorting Station",
    description:
      "Multi-compartment waste sorting station for offices and public spaces. Enables efficient recycling with color-coded compartments.",
    image: smartBinSorting,
    features: [
      "3-compartment sorting",
      "Smart fill detection per compartment",
      "Interactive waste guidance",
      "Mobile app integration",
      "Sleek modern design",
      "Easy maintenance access",
    ],
    badge: "Best for Offices",
  },
  {
    name: "GreenB Outdoor Bin",
    description:
      "Durable outdoor smart bin designed for parks, streets, and public areas. Built to withstand harsh weather conditions.",
    image: smartBinOutdoor,
    features: [
      "Vandal-resistant construction",
      "UV-protected exterior",
      "Automatic lid mechanism",
      "GPS location tracking",
      "Rain and dust proof",
      "High-capacity design",
    ],
    badge: "Outdoor Ready",
  },
  {
    name: "GreenB Dual Unit",
    description:
      "Compact dual-bin solution for high-traffic areas. Maximizes collection efficiency with minimal footprint.",
    image: smartBinDual,
    features: [
      "Dual waste compartments",
      "Compact footprint",
      "High-volume capacity",
      "Decorative leaf pattern",
      "Easy-empty design",
      "Modular configuration",
    ],
    badge: "Space Efficient",
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

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative bg-card rounded-3xl p-6 shadow-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full z-10">
                  {product.badge}
                </span>
              )}

              {/* Product Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-muted/30">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-greenb-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Details */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-5 text-sm">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.slice(0, 4).map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution for your organization?
          </p>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="border-primary text-primary hover:bg-primary/5 font-semibold px-8"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
