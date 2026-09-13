import { useState } from "react";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "greenbltd01@gmail.com", href: "mailto:greenbltd01@gmail.com" },
  { icon: Phone, label: "Call Us", value: "07062633321", href: "tel:+2347062633321" },
  { icon: MapPin, label: "Visit Us", value: "TIC Complex, 124 Farm Centre, Tarauni, Kano State", href: "https://www.google.com/maps/search/?api=1&query=TIC+Complex+124+Farm+Centre+Tarauni+Kano+Nigeria" },
];

type FormData = { name: string; email: string; company: string; message: string; website: string };
const initialForm: FormData = { name: "", email: "", company: "", message: "", website: "" };

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialForm);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.website) return;
    setIsSubmitting(true);
    const subject = encodeURIComponent(`GreenB enquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "Not provided"}\n\n${formData.message}`);
    window.location.href = `mailto:greenbltd01@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialForm);
    toast({ title: "Your email draft is ready", description: "Please send it from your email app to complete the enquiry." });
    window.setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Get In Touch</span>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Ready to Go <span className="gradient-text">Green?</span></h2>
          <p className="text-lg text-muted-foreground">Request a Smart Bin, join EcoRewards or discuss how GreenB can support your waste-management goals.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl border border-border/50 bg-card p-8 shadow-lg md:p-10">
            <h3 className="mb-6 text-xl font-semibold text-foreground">Contact GreenB</h3>
            {isSubmitted ? (
              <div className="py-12 text-center"><CheckCircle className="mx-auto mb-4 h-16 w-16 text-primary" /><h4 className="mb-2 text-xl font-semibold">Thank You</h4><p className="text-muted-foreground">Your email client should now contain a prepared enquiry.</p></div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="hidden" aria-hidden="true"><label htmlFor="website">Website</label><Input id="website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" /></div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><label htmlFor="name" className="mb-2 block text-sm font-medium">Full Name *</label><Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required minLength={2} className="bg-background" /></div>
                  <div><label htmlFor="email" className="mb-2 block text-sm font-medium">Email *</label><Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required className="bg-background" /></div>
                </div>
                <div><label htmlFor="company" className="mb-2 block text-sm font-medium">Company / Organization</label><Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Organization name" className="bg-background" /></div>
                <div><label htmlFor="message" className="mb-2 block text-sm font-medium">Message *</label><Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your waste-management or recycling needs..." rows={5} required minLength={20} className="resize-none bg-background" /></div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90">{isSubmitting ? "Preparing..." : <span className="flex items-center justify-center gap-2">Send Enquiry <Send className="h-4 w-4" /></span>}</Button>
                <p className="text-xs text-muted-foreground">Submitting opens your email client; no sensitive information is stored by this website.</p>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div><h3 className="mb-6 text-xl font-semibold">Contact Information</h3><div className="space-y-4">{contactInfo.map((info) => <a key={info.label} href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex items-center gap-4 rounded-xl bg-muted/50 p-4 transition-colors hover:bg-muted"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20"><info.icon className="h-5 w-5 text-primary" /></div><div><div className="text-sm text-muted-foreground">{info.label}</div><div className="font-medium">{info.value}</div></div></a>)}</div></div>
            <div className="h-64 overflow-hidden rounded-2xl bg-muted"><iframe src="https://www.google.com/maps?q=TIC+Complex,+124+Farm+Centre,+Tarauni,+Kano,+Nigeria&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="GreenB location in Kano, Nigeria" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
