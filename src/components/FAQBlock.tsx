import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type FAQItem = { question: string; answer: string };

export function FAQBlock({ items, heading = "Frequently asked questions" }: { items: FAQItem[]; heading?: string }) {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-4xl container-padding">
        <h2 className="mb-10 text-3xl font-bold text-foreground sm:text-4xl">{heading}</h2>
        <Accordion type="single" collapsible className="border-t border-border">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-base">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}