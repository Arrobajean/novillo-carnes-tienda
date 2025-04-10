import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqItems: FAQItem[];
}

export const FAQSection = ({ faqItems }: FAQSectionProps) => {
  return (
    <section className="pt-0 pb-12 px-4 bg-[#810000] text-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-poppins font-semibold mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto font-poppins">
            Respuestas a las consultas más comunes de nuestros clientes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/20"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-4 hover:no-underline hover:text-novillo-gold text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/90 py-4 px-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
