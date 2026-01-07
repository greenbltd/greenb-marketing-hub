import { Wifi, Bell, Truck, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Wifi,
    title: "Smart Bin Sensors",
    description:
      "Advanced IoT sensors continuously monitor fill levels, temperature, and bin status in real-time.",
    color: "bg-greenb-500",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description:
      "When bins reach capacity, our system automatically sends alerts to the mobile app and central dashboard.",
    color: "bg-greenb-400",
  },
  {
    icon: Truck,
    title: "Optimized Collection",
    description:
      "AI-powered route optimization ensures efficient pickup schedules, reducing fuel costs and emissions.",
    color: "bg-greenb-500",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Comprehensive insights and reports help municipalities make data-driven waste management decisions.",
    color: "bg-greenb-400",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Smart, <span className="gradient-text">Sustainable</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our end-to-end IoT solution transforms waste management from reactive
            to proactive, saving time and resources.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-greenb-200 via-greenb-400 to-greenb-200 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={step.title} className="relative group">
                {/* Card */}
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-md">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-5`}
                  >
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
