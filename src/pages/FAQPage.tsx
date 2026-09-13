import { CTASection } from "@/components/CTASection";
import { FAQBlock, type FAQItem } from "@/components/FAQBlock";
import { PageIntro } from "@/components/PageIntro";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";

const faqs: FAQItem[] = [
  { question: "What does GreenB provide?", answer: "GreenB provides connected waste-management solutions, smart bin options and EcoRewards recycling participation." },
  { question: "Where can GreenB Smart Bins be used?", answer: "Available configurations are intended for commercial, office and public environments. GreenB confirms a suitable option after discussing the site." },
  { question: "How do I join GreenB EcoRewards?", answer: "Visit greenbapp.com to use the GreenB web app and follow the current participation guidance." },
  { question: "Can an organization partner with GreenB?", answer: "Yes. Businesses, institutions, government teams and community groups can contact GreenB to discuss an appropriate programme." },
  { question: "Can GreenB provide a quotation?", answer: "Yes. Use the contact page and include your site type, location, expected use and the solution you are considering." },
  { question: "Does the website publish measured impact figures?", answer: "GreenB only presents project-specific figures when those results are verified and approved for publication." },
];

export default function FAQPage() {
  return <SiteLayout>
    <Seo title="GreenB FAQ | Smart Waste and EcoRewards" description="Answers about GreenB smart waste management, smart bins, EcoRewards, partnerships and quotations." path="/faq" />
    <PageIntro eyebrow="Frequently asked questions" title="Answers about GreenB solutions" description="Find quick information about connected waste management, smart bins, EcoRewards and working with GreenB." />
    <FAQBlock items={faqs} heading="GreenB questions" />
    <CTASection title="Still have a question?" description="Contact the GreenB team for information about your location or intended programme." primary={{ label: "Contact GreenB", to: "/contact" }} />
  </SiteLayout>;
}