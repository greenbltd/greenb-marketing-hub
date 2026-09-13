import { Building2, Landmark, Users } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageIntro } from "@/components/PageIntro";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";

export default function PartnersPage() {
  return <SiteLayout>
    <Seo title="Partner With GreenB | Waste and Recycling" description="Explore GreenB partnership models for businesses, communities and public-sector waste and recycling programmes." path="/partners" />
    <PageIntro eyebrow="Partnerships" title="Build a practical waste or recycling programme together" description="GreenB works with organizations interested in connected collection, recycling participation and community-focused circular initiatives." action={{ label: "Partner With GreenB", to: "/contact" }} />
    <section className="section-padding"><div className="container mx-auto container-padding"><div className="grid gap-6 md:grid-cols-3">{[
      { icon: Building2, title: "Business programmes", text: "Explore smart collection points, workplace recycling and EcoRewards participation." },
      { icon: Landmark, title: "Public-sector initiatives", text: "Discuss connected waste infrastructure and community participation programmes." },
      { icon: Users, title: "Community collaboration", text: "Plan accessible campaigns that help residents separate and return recyclable materials." },
    ].map((item) => <article key={item.title} className="bg-card p-8 shadow-sm"><item.icon className="h-10 w-10 text-primary" /><h2 className="mt-6 text-2xl font-bold">{item.title}</h2><p className="mt-4 text-muted-foreground">{item.text}</p></article>)}</div></div></section>
    <CTASection title="Start a partnership conversation" description="Share your organization, location and programme goals with GreenB." primary={{ label: "Contact GreenB", to: "/contact" }} />
  </SiteLayout>;
}