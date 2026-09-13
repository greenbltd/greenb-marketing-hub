import { Eye, Leaf, Recycle, Target } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", description: "Make responsible waste management more visible, practical and rewarding through useful technology." },
  { icon: Eye, title: "Our Vision", description: "Communities where waste is managed intelligently and recyclable materials remain in productive use." },
  { icon: Leaf, title: "Our Approach", description: "Connect infrastructure, information and participation rather than treating them as separate challenges." },
];

const pillars = [
  { icon: Recycle, title: "Circular participation", text: "EcoRewards helps people and organizations take part in recycling through clear collection pathways." },
  { icon: Target, title: "Operational visibility", text: "Connected monitoring supports more informed collection planning and service decisions." },
  { icon: Leaf, title: "Evidence-led impact", text: "GreenB presents project-specific impact results only when the underlying figures are verified and approved for publication." },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">About GreenB</span>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Building a <span className="gradient-text">Sustainable Future</span></h2>
          <p className="text-lg text-muted-foreground">GreenB brings together smart waste management, recycling participation and circular-economy thinking to help communities and organizations act on waste more intelligently.</p>
        </div>
        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => <article key={title} className="feature-card group"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20"><Icon className="h-7 w-7 text-primary" /></div><h3 className="mb-3 text-xl font-semibold">{title}</h3><p className="leading-relaxed text-muted-foreground">{description}</p></article>)}
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-greenb-600 to-greenb-700 p-8 text-primary-foreground md:p-12">
          <div className="mb-10 max-w-2xl"><p className="text-sm font-semibold uppercase tracking-widest text-greenb-200">What GreenB connects</p><h3 className="mt-3 text-3xl font-bold">Technology, participation and measurable progress</h3></div>
          <div className="grid gap-8 md:grid-cols-3">{pillars.map(({ icon: Icon, title, text }) => <article key={title}><Icon className="mb-4 h-8 w-8 text-greenb-200" /><h4 className="text-xl font-bold">{title}</h4><p className="mt-3 text-primary-foreground/80">{text}</p></article>)}</div>
        </div>
      </div>
    </section>
  );
}
