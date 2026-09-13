import { BarChart3, Leaf, Recycle, Route } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageIntro } from "@/components/PageIntro";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";

export default function ImpactPage() {
  return <SiteLayout>
    <Seo title="Environmental Impact | GreenB" description="See how GreenB solutions support more visible collection, recycling participation and responsible resource use." path="/impact" />
    <PageIntro eyebrow="Environmental impact" title="Practical tools for better waste decisions" description="GreenB focuses on the conditions that can support cleaner spaces, more informed collection and stronger circular participation." />
    <section className="section-padding"><div className="container mx-auto container-padding"><div className="grid gap-6 md:grid-cols-3">{[
      { icon: Route, title: "Informed collection", text: "Current bin information can help teams plan collection around actual service needs." },
      { icon: Recycle, title: "Recycling participation", text: "EcoRewards gives people and organizations a clearer route to participate in recycling." },
      { icon: BarChart3, title: "Visible operations", text: "Monitoring creates information that can support accountability and future improvements." },
    ].map((item) => <article key={item.title} className="border-t-4 border-primary bg-card p-8 shadow-sm"><item.icon className="h-9 w-9 text-primary" /><h2 className="mt-6 text-2xl font-bold">{item.title}</h2><p className="mt-4 text-muted-foreground">{item.text}</p></article>)}</div><div className="mt-16 grid items-center gap-10 bg-muted/30 p-8 md:p-12 lg:grid-cols-2"><Leaf className="mx-auto h-28 w-28 text-primary" /><div><h2 className="text-3xl font-bold">Measure before making claims</h2><p className="mt-4 leading-relaxed text-muted-foreground">GreenB is committed to presenting environmental outcomes responsibly. Project-specific results should be based on verified operational data rather than general estimates.</p></div></div></div></section>
    <CTASection title="Build a measurable waste programme" description="Talk with GreenB about the information and collection process your organization needs." primary={{ label: "Contact GreenB", to: "/contact" }} />
  </SiteLayout>;
}