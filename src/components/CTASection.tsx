import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CTASection({ title, description, primary, secondary }: {
  title: string;
  description: string;
  primary: { label: string; to: string; external?: boolean };
  secondary?: { label: string; to: string };
}) {
  const primaryContent = <>{primary.label}<ArrowRight /></>;
  return (
    <section className="bg-greenb-900 py-20 text-primary-foreground">
      <div className="container mx-auto container-padding text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/75">{description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="font-semibold">
            {primary.external ? <a href={primary.to} target="_blank" rel="noopener noreferrer">{primaryContent}</a> : <Link to={primary.to}>{primaryContent}</Link>}
          </Button>
          {secondary && <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to={secondary.to}>{secondary.label}</Link></Button>}
        </div>
      </div>
    </section>
  );
}