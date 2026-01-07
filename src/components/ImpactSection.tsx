import { Leaf, Droplets, Wind, TreePine } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const impactStats = [
  {
    icon: Leaf,
    value: 40,
    suffix: "%",
    label: "Reduction in Collection Costs",
    description: "Optimized routes mean fewer trucks on the road",
  },
  {
    icon: Wind,
    value: 35,
    suffix: "%",
    label: "Lower Carbon Emissions",
    description: "Less fuel consumption, cleaner air",
  },
  {
    icon: Droplets,
    value: 60,
    suffix: "%",
    label: "Increase in Recycling Rates",
    description: "Smart sorting leads to better recycling",
  },
  {
    icon: TreePine,
    value: 50000,
    suffix: "+",
    label: "Trees Saved Annually",
    description: "Through reduced paper waste and recycling",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + "K";
    }
    return num.toString();
  };

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-primary-foreground">
      {formatNumber(count)}
      {suffix}
    </div>
  );
}

export function ImpactSection() {
  return (
    <section id="impact" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Making a <span className="gradient-text">Real Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every smart bin deployed contributes to a cleaner, healthier planet.
            Here's the measurable impact we've achieved together.
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group overflow-hidden rounded-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-greenb-600 to-greenb-700 transition-transform group-hover:scale-105" />
              <div className="relative p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-primary-foreground font-semibold mt-2 mb-2">
                  {stat.label}
                </div>
                <p className="text-primary-foreground/70 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Environmental Benefits */}
        <div className="mt-16 bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border/50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Join the Green Revolution
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our smart waste management solutions don't just save money—they
                save the planet. By implementing GREENB technology, cities have
                seen dramatic improvements in waste collection efficiency,
                recycling rates, and overall environmental health.
              </p>
              <ul className="space-y-3">
                {[
                  "Reduced greenhouse gas emissions",
                  "Cleaner streets and public spaces",
                  "Improved community health outcomes",
                  "Data-driven sustainability planning",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-greenb-100 to-greenb-200 flex items-center justify-center">
                <div className="text-center">
                  <Leaf className="w-24 h-24 text-primary mx-auto mb-4" />
                  <p className="text-xl font-semibold text-greenb-700">
                    Smarter Waste
                  </p>
                  <p className="text-greenb-600">Cleaner Future</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
