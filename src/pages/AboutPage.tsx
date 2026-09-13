import { Eye, Leaf, Target } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageIntro } from "@/components/PageIntro";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { TeamSection } from "@/components/TeamSection";

export default function AboutPage() {
  return <SiteLayout>
    <Seo title="About GreenB | Circular Waste Technology" description="Learn how GreenB combines smart waste technology, recycling participation and practical circular-economy solutions." path="/about" />
    <PageIntro eyebrow="About GreenB" title="Technology for a cleaner, more circular future" description="GreenB brings together connected waste management and recycling participation to help people and organizations handle resources more responsibly." />
    <section className="section-padding"><div className="container mx-auto container-padding"><div className="grid gap-6 md:grid-cols-3">{[
      { icon: Target, title: "Our mission", text: "Make responsible waste management more visible, practical and rewarding through useful technology." },
      { icon: Eye, title: "Our vision", text: "Communities where waste is managed intelligently and recyclable materials remain in productive use." },
      { icon: Leaf, title: "Our approach", text: "Connect infrastructure, information and participation rather than treating them as separate challenges." },
    ].map((item) => <article key={item.title} className="border-t-4 border-primary bg-card p-8 shadow-sm"><item.icon className="h-9 w-9 text-primary" /><h2 className="mt-6 text-2xl font-bold">{item.title}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{item.text}</p></article>)}</div></div></section>
    <TeamSection />
    <CTASection title="Work with GreenB" description="Explore a technology, recycling or community partnership with our team." primary={{ label: "Partner With GreenB", to: "/contact" }} />
  </SiteLayout>;
}