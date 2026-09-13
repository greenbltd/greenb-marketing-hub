import { ArrowRight, BarChart3, Gift, RadioTower, Recycle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { PageIntro } from "@/components/PageIntro";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";

const solutions = [
  { icon: RadioTower, title: "Smart Waste Management", text: "Connected sensors and monitoring tools create a clearer view of bin status and collection needs.", to: "/smart-waste-management" },
  { icon: Recycle, title: "Smart Bins", text: "Durable waste units designed for connected monitoring across commercial and public environments.", to: "/smart-bin" },
  { icon: Gift, title: "GreenB EcoRewards", text: "A participation programme that links recyclable collection with rewards through the GreenB app.", to: "/ecorewards" },
  { icon: BarChart3, title: "Operational Insight", text: "Useful information supports collection planning, service visibility and sustainability reporting.", to: "/impact" },
];

export default function SolutionsPage() {
  return <SiteLayout>
    <Seo title="GreenB Solutions | Smart Waste and EcoRewards" description="Explore GreenB smart waste management, connected bins and EcoRewards solutions for individuals, businesses and communities." path="/solutions" />
    <PageIntro eyebrow="GreenB solutions" title="Connected tools for waste, recycling and circular participation" description="GreenB combines smart equipment, operational visibility and rewarding recycling participation to support cleaner communities." />
    <section className="section-padding"><div className="container mx-auto container-padding"><div className="grid gap-6 md:grid-cols-2">{solutions.map((item) => <article key={item.title} className="border-t-4 border-primary bg-card p-8 shadow-md"><item.icon className="h-10 w-10 text-primary" /><h2 className="mt-6 text-2xl font-bold">{item.title}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{item.text}</p><Button asChild variant="link" className="mt-4 px-0"><Link to={item.to}>Learn more <ArrowRight /></Link></Button></article>)}</div></div></section>
    <CTASection title="Find the right GreenB solution" description="Tell us about your collection environment, recycling goals or partnership idea." primary={{ label: "Contact GreenB", to: "/contact" }} />
  </SiteLayout>;
}