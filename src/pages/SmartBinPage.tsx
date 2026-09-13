import { Check } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageIntro } from "@/components/PageIntro";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import smartBinWheelie from "@/assets/products/smart-bin-wheelie.jpeg";
import smartBinSorting from "@/assets/products/smart-bin-sorting.jpeg";
import smartBinOutdoor from "@/assets/products/smart-bin-outdoor.jpeg";
import smartBinDual from "@/assets/products/smart-bin-dual.jpeg";

const products = [
  { name: "GreenB Smart Wheelie Bin", image: smartBinWheelie, application: "Commercial and municipal collection points", features: ["Fill-level monitoring", "Temperature and fire detection", "Connected status reporting", "Weather-resistant design"] },
  { name: "GreenB Sorting Station", image: smartBinSorting, application: "Offices and shared public spaces", features: ["Multiple sorting compartments", "Compartment-level monitoring", "Clear waste guidance", "Maintenance access"] },
  { name: "GreenB Outdoor Bin", image: smartBinOutdoor, application: "Parks, streets and public environments", features: ["Durable outdoor construction", "Location tracking", "Rain and dust protection", "High-capacity design"] },
  { name: "GreenB Dual Unit", image: smartBinDual, application: "Space-conscious, high-traffic locations", features: ["Dual compartments", "Compact footprint", "Easy-empty design", "Modular configuration"] },
];

export default function SmartBinPage() {
  return <SiteLayout>
    <Seo title="GreenB Smart Bins | Connected Waste Equipment" description="Explore GreenB smart bins for commercial, office and public spaces, with connected monitoring and practical collection features." path="/smart-bin" />
    <PageIntro eyebrow="GreenB Smart Bin" title="Connected waste equipment made for real environments" description="Choose from GreenB smart bin configurations designed for monitoring, sorting and dependable day-to-day use." action={{ label: "Request a Quote", to: "/contact" }} />
    <section className="section-padding"><div className="container mx-auto container-padding"><div className="grid gap-8 md:grid-cols-2">{products.map((product) => <article key={product.name} className="overflow-hidden border border-border bg-card shadow-sm"><div className="bg-muted/30 p-6"><img src={product.image} alt={product.name} loading="lazy" className="h-72 w-full object-contain" /></div><div className="p-7"><h2 className="text-2xl font-bold">{product.name}</h2><p className="mt-2 text-sm font-medium text-primary">{product.application}</p><ul className="mt-5 grid gap-3 sm:grid-cols-2">{product.features.map((feature) => <li key={feature} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />{feature}</li>)}</ul></div></article>)}</div><p className="mt-8 text-sm text-muted-foreground">Final specifications and connectivity options are confirmed during consultation to match the intended environment.</p></div></section>
    <CTASection title="Choose a Smart Bin for your site" description="Share your location type, waste streams and expected usage so GreenB can recommend a suitable configuration." primary={{ label: "Request a Smart Bin", to: "/contact" }} secondary={{ label: "Smart Waste Management", to: "/smart-waste-management" }} />
  </SiteLayout>;
}