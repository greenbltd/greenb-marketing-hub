import { PageIntro } from "@/components/PageIntro";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";

const privacy = [
  ["Information you provide", "When you contact GreenB, you may provide your name, email address, organization and message. If you open the GreenB web app, its own privacy information applies to activity there."],
  ["How information may be used", "Information may be used to respond to enquiries, discuss services or partnerships, maintain business records and protect the website from misuse."],
  ["Sharing and retention", "GreenB does not sell personal information. Information may be shared with service providers where necessary to operate communications, subject to appropriate safeguards, and retained only as reasonably needed."],
  ["Your choices", "You may request access, correction or deletion of personal information by emailing greenbltd01@gmail.com, subject to applicable legal requirements."],
  ["Security and updates", "Reasonable safeguards are used, but no internet service is completely secure. This notice may be updated as GreenB services and legal obligations develop."],
];

const terms = [
  ["Website information", "This website provides general information about GreenB. Product availability, specifications, collection coverage, rewards and partnership terms are confirmed separately and may change."],
  ["Acceptable use", "You must not misuse the website, attempt unauthorized access, interfere with operation or use its content unlawfully."],
  ["Intellectual property", "GreenB names, branding, website content and product materials belong to GreenB or their respective licensors and may not be reproduced without permission."],
  ["External services", "Links to the GreenB web app or third-party services may be governed by separate terms and policies."],
  ["Disclaimer and liability", "The website is provided on an as-available basis. To the extent permitted by law, GreenB is not responsible for indirect losses arising from reliance on general website information."],
  ["Contact", "Questions about these terms may be sent to greenbltd01@gmail.com."],
];

export default function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms & Conditions";
  const sections = isPrivacy ? privacy : terms;
  return <SiteLayout>
    <Seo title={`${title} | GreenB`} description={`${title} for the GreenB public website.`} path={isPrivacy ? "/privacy" : "/terms"} />
    <PageIntro eyebrow="Legal" title={title} description="This is a general website policy draft and should be reviewed by qualified legal counsel before being treated as final legal advice." />
    <article className="section-padding"><div className="container mx-auto max-w-3xl container-padding"><p className="mb-10 text-sm font-semibold text-muted-foreground">Effective date: 12 September 2026</p>{sections.map(([heading, body]) => <section key={heading} className="mb-9"><h2 className="text-2xl font-bold">{heading}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{body}</p></section>)}</div></article>
  </SiteLayout>;
}