import { Building2, Factory, Gift, Recycle, Smartphone, Truck, Users } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { FAQBlock, type FAQItem } from "@/components/FAQBlock";
import { PageIntro } from "@/components/PageIntro";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";

const steps = [
  { icon: Recycle, title: "Collect", text: "Separate accepted recyclable materials." },
  { icon: Smartphone, title: "Request Collection", text: "Use the GreenB app to request collection." },
  { icon: Truck, title: "GreenB Collects", text: "Collection is arranged through the programme." },
  { icon: Gift, title: "Get Rewarded", text: "Eligible verified materials earn rewards." },
  { icon: Factory, title: "Recycled", text: "Collected material continues into recycling." },
];

const faqs: FAQItem[] = [
  { question: "Who can participate in GreenB EcoRewards?", answer: "Individuals, businesses, organizations and community or government programmes can explore participation. Availability and collection arrangements may depend on location." },
  { question: "Which recyclable materials are accepted?", answer: "Common categories may include suitable plastics, paper and cardboard, metals, and selected electronic materials. Confirm current accepted items in the GreenB app before requesting collection." },
  { question: "How are rewards calculated?", answer: "Rewards depend on the eligible material type, quantity, condition and the current programme terms shown in the GreenB app." },
  { question: "How do organizations partner with EcoRewards?", answer: "Organizations can contact GreenB to discuss workplace collection, community campaigns or programme collaboration." },
];

export default function EcoRewardsPage() {
  return <SiteLayout>
    <Seo title="GreenB EcoRewards | Turn Waste Into Rewards" description="Collect recyclables, request collection and participate in GreenB EcoRewards through the GreenB app." path="/ecorewards" />
    <PageIntro eyebrow="GreenB EcoRewards" title="Turn Your Waste Into Rewards." description="EcoRewards makes recycling participation more practical by connecting recyclable collection, verification and rewards through GreenB." action={{ label: "Join GreenB EcoRewards", to: "https://greenbapp.com", external: true }} />
    <section className="section-padding"><div className="container mx-auto container-padding"><h2 className="text-3xl font-bold sm:text-4xl">How EcoRewards works</h2><div className="mt-10 grid gap-5 md:grid-cols-5">{steps.map((step, index) => <article key={step.title} className="border-t-4 border-primary bg-card p-5 shadow-sm"><span className="text-sm font-bold text-primary">0{index + 1}</span><step.icon className="mt-5 h-8 w-8 text-primary" /><h3 className="mt-4 font-bold">{step.title}</h3><p className="mt-2 text-sm text-muted-foreground">{step.text}</p></article>)}</div></div></section>
    <section className="section-padding bg-muted/30"><div className="container mx-auto container-padding"><div className="grid gap-6 md:grid-cols-3">{[
      { icon: Users, title: "Individuals", text: "Build a recycling habit and request eligible collections through the GreenB app." },
      { icon: Building2, title: "Businesses & organizations", text: "Create workplace participation and discuss organized collection arrangements." },
      { icon: Recycle, title: "Government & communities", text: "Explore local campaigns and programmes that encourage circular participation." },
    ].map((item) => <article key={item.title} className="bg-card p-7 shadow-sm"><item.icon className="h-9 w-9 text-primary" /><h2 className="mt-5 text-xl font-bold">{item.title}</h2><p className="mt-3 text-muted-foreground">{item.text}</p></article>)}</div></div></section>
    <section className="section-padding"><div className="container mx-auto container-padding"><div className="grid gap-10 lg:grid-cols-2"><div><p className="text-sm font-semibold uppercase tracking-widest text-primary">Accepted recyclables</p><h2 className="mt-4 text-3xl font-bold">Prepare materials for a productive next use</h2><p className="mt-5 leading-relaxed text-muted-foreground">Accepted categories can include suitable plastics, paper and cardboard, metals, and selected electronic materials. Materials should be separated and prepared according to the current guidance in the GreenB app.</p></div><div className="border-l-4 border-primary bg-muted/30 p-8"><h3 className="text-xl font-bold">Before requesting collection</h3><ul className="mt-5 list-disc space-y-3 pl-5 text-muted-foreground"><li>Check the latest accepted-material list in the app.</li><li>Keep recyclable categories separate where requested.</li><li>Ensure items are safe and suitable for handling.</li><li>Follow the collection instructions shown for your location.</li></ul></div></div></div></section>
    <FAQBlock items={faqs} heading="EcoRewards questions" />
    <CTASection title="Start your EcoRewards journey" description="Join through the GreenB app or discuss an organization and community partnership." primary={{ label: "Join GreenB EcoRewards", to: "https://greenbapp.com", external: true }} secondary={{ label: "Partner With EcoRewards", to: "/contact" }} />
  </SiteLayout>;
}