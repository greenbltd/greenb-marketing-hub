import { Target, Eye, Leaf, TrendingUp, MapPin, Recycle } from "lucide-react";

const metrics = [
  { icon: TrendingUp, value: "10,000+", label: "Smart Bins Deployed" },
  { icon: MapPin, value: "50+", label: "Cities & Areas Served" },
  { icon: Recycle, value: "2M+ kg", label: "Waste Recycled" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To revolutionize waste management through innovative IoT technology, creating cleaner and more sustainable communities worldwide.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where every piece of waste is intelligently managed, leading to zero-waste cities and a healthier planet for future generations.",
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description:
      "Every smart bin we deploy reduces carbon emissions, optimizes collection routes, and increases recycling rates by up to 40%.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            About GreenB
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Building a{" "}
            <span className="gradient-text">Sustainable Future</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            GreenB is at the forefront of smart waste management technology,
            combining IoT innovation with environmental responsibility.
          </p>
        </div>

        {/* Mission, Vision, Impact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((item, index) => (
            <div
              key={item.title}
              className="feature-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics Section */}
        <div className="bg-gradient-to-br from-greenb-600 to-greenb-700 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">
                  {metric.value}
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
