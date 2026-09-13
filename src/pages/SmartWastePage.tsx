import { BarChart3, Bell, BrainCircuit, RadioTower, Route, ScanLine } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageIntro } from "@/components/PageIntro";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";

const capabilities = [
  { icon: RadioTower, title: "IoT connectivity", text: "Connected equipment can transmit operational status to a central view." },
  { icon: ScanLine, title: "Smart sensors", text: "Sensors monitor conditions such as fill level and bin status." },
  { icon: Bell, title: "Mobile notifications", text: "Status alerts help teams respond when attention is required." },
  { icon: Route, title: "Collection planning", text: "Current information supports better-informed pickup schedules and routes." },
  { icon: BarChart3, title: "Data dashboards", text: "Operational information is organized for monitoring and reporting." },
  { icon: BrainCircuit, title: "AI-assisted insight", text: "Data can support smarter decisions as collection patterns develop." },
];

export default function SmartWastePage() {
  return <SiteLayout>
    <Seo title="Smart Waste Management | GreenB" description="Discover GreenB connected waste monitoring with IoT sensors, status alerts, collection planning and operational dashboards." path="/smart-waste-management" />
    <PageIntro eyebrow="Smart Waste Management" title="See collection needs clearly. Act with better information." description="GreenB connects smart sensors, notifications and operational insight to help waste teams move from fixed assumptions to informed collection." action={{ label: "Request a Consultation", to: "/contact" }} />
    <section className="section-padding"><div className="container mx-auto container-padding"><h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">A connected operating picture</h2><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{capabilities.map((item) => <article key={item.title} className="bg-card p-7 shadow-sm"><item.icon className="h-9 w-9 text-primary" /><h3 className="mt-5 text-xl font-bold">{item.title}</h3><p className="mt-3 text-muted-foreground">{item.text}</p></article>)}</div></div></section>
    <section className="section-padding bg-muted/30"><div className="container mx-auto container-padding"><div className="grid gap-10 lg:grid-cols-2"><div><p className="text-sm font-semibold uppercase tracking-widest text-primary">How it works</p><h2 className="mt-4 text-3xl font-bold">From bin status to collection action</h2></div><ol className="space-y-6">{["Sensors monitor the connected waste point.", "Status information becomes visible to the operating team.", "Notifications highlight bins that may need attention.", "Teams use the information to plan collection and review activity."].map((step, index) => <li key={step} className="flex gap-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary font-bold text-primary-foreground">{index + 1}</span><p className="pt-1 text-lg text-foreground">{step}</p></li>)}</ol></div></div></section>
    <CTASection title="Plan smarter waste operations" description="Discuss your sites, collection process and monitoring needs with GreenB." primary={{ label: "Contact GreenB", to: "/contact" }} secondary={{ label: "View Smart Bins", to: "/smart-bin" }} />
  </SiteLayout>;
}