import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function PageIntro({ eyebrow, title, description, action }: {
  eyebrow: string;
  title: string;
  description: string;
  action?: { label: string; to: string; external?: boolean };
}) {
  return (
    <section className="bg-greenb-900 pb-20 pt-36 text-primary-foreground md:pb-24 md:pt-44">
      <div className="container mx-auto container-padding">
        <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-greenb-300">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">{description}</p>
        {action && (
          <Button asChild size="lg" className="mt-8 font-semibold">
            {action.external ? (
              <a href={action.to} target="_blank" rel="noopener noreferrer">{action.label}<ArrowRight /></a>
            ) : (
              <Link to={action.to}>{action.label}<ArrowRight /></Link>
            )}
          </Button>
        )}
      </div>
    </section>
  );
}