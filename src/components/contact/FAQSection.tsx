
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqItems: FAQItem[];
}

export const FAQSection = ({ faqItems }: FAQSectionProps) => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-poppins font-semibold mb-4 text-gray-900">Preguntas Frecuentes</h2>
          <p className="text-gray-700 max-w-2xl mx-auto font-poppins">
            Respuestas a las consultas más comunes de nuestros clientes
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-gray-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-4 hover:no-underline hover:text-novillo-red text-gray-900">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 py-4 px-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      
      {/* Wave decoration for transition */}
      <svg
        className="w-full mt-12"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000000"
          d="M0,0 C360,120 1080,0 1440,120 L1440,150 L0,150 Z"
        />
      </svg>
    </section>
  );
};
