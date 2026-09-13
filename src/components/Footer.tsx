import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/greenb-logo.png";

const footerLinks = {
  company: [
    { label: "About GreenB", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Impact", href: "/impact" },
    { label: "Partners", href: "/partners" },
  ],
  resources: [
    { label: "Smart Waste Management", href: "/smart-waste-management" },
    { label: "Smart Bin", href: "/smart-bin" },
    { label: "EcoRewards", href: "/ecorewards" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Contact GreenB", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com", label: "X" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61576584218445", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-greenb-900 text-primary-foreground">
      <div className="container mx-auto container-padding py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="mb-6 flex items-center gap-2">
              <img src={logo} alt="GreenB Logo" className="h-10 w-10" />
              <span className="text-xl font-bold">GreenB</span>
            </Link>
            <p className="mb-6 max-w-sm text-primary-foreground/70">Smart waste management and circular-economy solutions that turn waste into environmental and economic value.</p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 font-semibold capitalize">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => <li key={link.label}><Link to={link.href} className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">{link.label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/20 pt-8 md:flex-row">
          <p className="text-sm text-primary-foreground/60">© {new Date().getFullYear()} GreenB. All rights reserved.</p>
          <p className="text-center text-sm text-primary-foreground/60 md:text-right"><span className="text-primary">GreenB</span> – Smarter Waste, Cleaner Future</p>
        </div>
      </div>
    </footer>
  );
}
