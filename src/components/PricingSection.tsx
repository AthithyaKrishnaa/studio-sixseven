import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Website",
    price: "₹7,999",
    suffix: "+",
    features: ["3–5 pages", "Mobile optimized", "Fast delivery"],
    highlighted: false,
  },
  {
    name: "Business Website",
    price: "₹14,999",
    suffix: "+",
    features: ["Custom design", "SEO basics", "Conversion-focused"],
    highlighted: true,
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding bg-warm-white">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Simple Pricing
        </h2>
        <div className="divider-gold mt-4 mb-6" />
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          Transparent pricing with no hidden fees.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative rounded-xl p-8 border transition-shadow ${
              plan.highlighted
                ? "bg-foreground text-card border-foreground shadow-2xl"
                : "bg-card border-border shadow-sm hover:shadow-md"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-body font-semibold px-4 py-1 rounded-full tracking-wide">
                Recommended
              </span>
            )}
            <h3
              className={`font-display text-2xl font-bold mb-2 ${
                plan.highlighted ? "text-card" : "text-foreground"
              }`}
            >
              {plan.name}
            </h3>
            <p className="font-display text-4xl font-bold text-gold mb-6">
              {plan.price}
              <span className="text-lg">{plan.suffix}</span>
            </p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 font-body text-sm">
                  <Check className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className={plan.highlighted ? "text-card/80" : "text-muted-foreground"}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <p className="text-center mt-8 font-body text-sm text-muted-foreground">
        Final pricing depends on requirements.
      </p>
    </div>
  </section>
);

export default PricingSection;
