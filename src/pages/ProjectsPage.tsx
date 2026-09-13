import { ClipboardCheck, Lightbulb, Settings, Waypoints } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageIntro } from "@/components/PageIntro";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";

export default function ProjectsPage() {
  const stages = [
    { icon: ClipboardCheck, title: "Understand", text: "Review the sites, waste streams, service process and participation goals." },
    { icon: Lightbulb, title: "Design", text: "Define suitable equipment, collection workflows and programme communication." },
    { icon: Settings, title: "Implement", text: "Support deployment, operational setup and team orientation." },
    { icon: Waypoints, title: "Review", text: "Use available information to evaluate operations and identify improvements." },
  ];
  return <SiteLayout>
    <Seo title="GreenB Projects | Smart Waste Programmes" description="Learn how GreenB approaches smart waste, recycling and EcoRewards projects without unverified case-study claims." path="/projects" />
    <PageIntro eyebrow="Projects & case studies" title="A clear path from waste challenge to working programme" description="Every environment is different. GreenB begins with the operating need and builds an appropriate technology and participation approach." />
    <section className="section-padding"><div className="container mx-auto container-padding"><h2 className="text-3xl font-bold sm:text-4xl">Our project approach</h2><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{stages.map((stage, index) => <article key={stage.title} className="border-t-4 border-primary bg-card p-6 shadow-sm"><span className="text-sm font-bold text-primary">0{index + 1}</span><stage.icon className="mt-6 h-8 w-8 text-primary" /><h3 className="mt-4 text-xl font-bold">{stage.title}</h3><p className="mt-3 text-sm text-muted-foreground">{stage.text}</p></article>)}</div><div className="mt-14 border-l-4 border-primary bg-muted/30 p-8"><h2 className="text-2xl font-bold">Verified case studies are being prepared</h2><p className="mt-3 max-w-3xl text-muted-foreground">GreenB will publish project names, partner details and measured outcomes only when they are approved and supported by verified information.</p></div></div></section>
    <CTASection title="Discuss your project" description="Tell GreenB about your collection environment, participants and intended outcomes." primary={{ label: "Start a Project Conversation", to: "/contact" }} />
  </SiteLayout>;
}