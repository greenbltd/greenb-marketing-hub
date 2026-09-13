import { ContactSection } from "@/components/ContactSection";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";

export default function ContactPage() {
  return <SiteLayout>
    <Seo title="Contact GreenB | Kano, Nigeria" description="Contact GreenB about smart bins, waste management, EcoRewards, recycling or partnerships." path="/contact" />
    <div className="pt-20"><ContactSection /></div>
  </SiteLayout>;
}