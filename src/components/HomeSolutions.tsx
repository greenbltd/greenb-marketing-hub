import { ArrowRight, Building2, Gift, RadioTower, Recycle, Users, Warehouse } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import smartBin from "@/assets/products/smart-bin-wheelie.jpeg";

const audiences = [
  { icon: Users, title: "Individuals", text: "Take part in recycling through accessible collection and EcoRewards." },
  { icon: Building2, title: "Businesses", text: "Build a clearer, more accountable approach to everyday waste handling." },
  { icon: Warehouse, title: "Communities & government", text: "Plan cleaner public spaces with connected collection information." },
];

export function HomeSolutions() {
  return <>
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">The challenge</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Waste collection should respond to real conditions, not guesswork.</h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">Overflowing bins, inefficient collection and low recycling participation create avoidable pressure on communities. GreenB connects smart equipment, collection insight and circular-economy participation in one practical approach.</p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Our solutions</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Technology for cleaner collection and stronger recycling</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: RadioTower, title: "Smart Waste Management", text: "Connected monitoring helps teams see bin status, plan collection and use operational data.", to: "/smart-waste-management" },
            { icon: Recycle, title: "Smart Bin", text: "Purpose-built waste units combine durable design with connected sensing and monitoring.", to: "/smart-bin" },
            { icon: Gift, title: "GreenB EcoRewards", text: "A circular participation programme that connects recyclable collection with rewards.", to: "/ecorewards" },
          ].map((item) => <article key={item.title} className="border-t-4 border-primary bg-card p-7 shadow-md">
            <item.icon className="mb-6 h-9 w-9 text-primary" />
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="my-4 leading-relaxed text-muted-foreground">{item.text}</p>
            <Link to={item.to} className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">Explore solution <ArrowRight className="h-4 w-4" /></Link>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section-padding bg-greenb-900 text-primary-foreground">
      <div className="container mx-auto container-padding">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-greenb-300">GreenB EcoRewards</p>
            <h2 className="text-4xl font-bold">Turn Your Waste Into Rewards.</h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/75">Collect accepted recyclables, request collection through the GreenB app and participate in a more rewarding circular economy.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><a href="https://greenbapp.com" target="_blank" rel="noopener noreferrer">Join GreenB EcoRewards <ArrowRight /></a></Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/ecorewards">How it works</Link></Button>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2" aria-label="EcoRewards process">
            {["Collect", "Request", "Collects", "Rewarded", "Recycled"].map((step, index) => <div key={step} className="border-t border-primary-foreground/30 pt-4 text-center"><span className="block text-2xl font-bold text-greenb-300">{index + 1}</span><span className="mt-2 block text-xs sm:text-sm">{step}</span></div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img src={smartBin} alt="GreenB smart wheelie bin" loading="lazy" className="mx-auto max-h-[560px] w-full object-contain" />
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Connected equipment</p>
            <h2 className="text-3xl font-bold sm:text-4xl">A smarter view of every collection point</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">GreenB smart bins support fill-level monitoring, status notifications and data-informed collection planning for commercial and public environments.</p>
            <Button asChild size="lg" className="mt-8"><Link to="/smart-bin">Explore the Smart Bin <ArrowRight /></Link></Button>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <h2 className="mb-10 text-3xl font-bold sm:text-4xl">Built for every part of the community</h2>
        <div className="grid gap-6 md:grid-cols-3">{audiences.map((item) => <article key={item.title} className="bg-card p-7 shadow-sm"><item.icon className="mb-5 h-8 w-8 text-primary" /><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-3 text-muted-foreground">{item.text}</p></article>)}</div>
      </div>
    </section>
  </>;
}