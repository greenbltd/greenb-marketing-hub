import { CircleCheck, Recycle } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageIntro } from "@/components/PageIntro";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";

export default function RecyclingPage() {
  return <SiteLayout>
    <Seo title="Recycling With GreenB | Circular Participation" description="Learn how GreenB supports recycling participation through material separation, collection and EcoRewards." path="/recycling" />
    <PageIntro eyebrow="Recycling" title="Keep useful materials in circulation" description="Good recycling starts with clear separation, responsible preparation and a collection route that connects materials to their next use." />
    <section className="section-padding"><div className="container mx-auto container-padding"><div className="grid gap-12 lg:grid-cols-2"><div><Recycle className="h-12 w-12 text-primary" /><h2 className="mt-6 text-3xl font-bold">Simple preparation matters</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">GreenB helps participants understand accepted categories and request collection through EcoRewards. Current acceptance depends on programme guidance and location.</p></div><div className="space-y-4">{["Separate materials by the categories requested.", "Keep recyclables free from unsafe or unsuitable waste.", "Check current acceptance guidance in the GreenB app.", "Arrange collection through EcoRewards where available."].map((item) => <div key={item} className="flex gap-3 border-b border-border pb-4"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><p>{item}</p></div>)}</div></div></div></section>
    <CTASection title="Make recycling participation rewarding" description="Use the GreenB app to explore EcoRewards and request an eligible collection." primary={{ label: "Open GreenB App", to: "https://greenbapp.com", external: true }} secondary={{ label: "Learn About EcoRewards", to: "/ecorewards" }} />
  </SiteLayout>;
}