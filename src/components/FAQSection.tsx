import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "How long does it take?", a: "Most projects are delivered within 7 business days, depending on complexity." },
  { q: "What is the cost?", a: "Plans start from ₹7,999. Final pricing depends on your specific requirements." },
  { q: "Will my website work on mobile?", a: "Absolutely. Every website we build is mobile-first and tested across all devices." },
  { q: "Do you provide support after launch?", a: "Yes, we offer ongoing support to keep your website running smoothly." },
  { q: "Can I request changes?", a: "Of course. We work with you through revisions to make sure you're happy with the result." },
];

const FAQSection = () => (
  <section id="faq" className="section-padding bg-warm-white">
    <div className="container mx-auto px-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>
        <div className="divider-gold mt-4" />
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card border border-border rounded-lg px-6"
          >
            <AccordionTrigger className="font-body text-base font-medium text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
