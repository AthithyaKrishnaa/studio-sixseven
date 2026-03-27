import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Starter Pro",
    price: "₹16,000",
    description: "Best for small businesses",
    features: [
      { name: "Custom UI/UX design", included: true },
      { name: "Mobile optimised", included: true },
      { name: "Fast loading", included: true },
      { name: "Contact integrations (WhatsApp, Mail, etc.)", included: true },
      { name: "3–5 pages", included: true },
      { name: "Basic SEO setup", included: false },
      { name: "Google Search Console setup", included: false },
      { name: "Advanced SEO (meta, schema, sitemap)", included: false },
      { name: "Priority support (post-launch)", included: false },
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "₹20,000",
    description: "Grow your online presence",
    features: [
      { name: "Custom UI/UX design", included: true },
      { name: "Mobile optimised", included: true },
      { name: "Fast loading", included: true },
      { name: "Contact integrations (WhatsApp, Mail, etc.)", included: true },
      { name: "Up to 8 pages", included: true },
      { name: "Basic SEO setup", included: true },
      { name: "Google Search Console setup", included: true },
      { name: "Advanced SEO (meta, schema, sitemap)", included: false },
      { name: "Priority support (post-launch)", included: false },
    ],
    highlighted: true,
  },
  {
    name: "Business Pro",
    price: "₹25,000",
    description: "For serious growth",
    features: [
      { name: "Custom UI/UX design", included: true },
      { name: "Mobile optimised", included: true },
      { name: "Fast loading", included: true },
      { name: "Contact integrations (WhatsApp, Mail, etc.)", included: true },
      { name: "Unlimited pages", included: true },
      { name: "Basic SEO setup", included: true },
      { name: "Google Search Console setup", included: true },
      { name: "Advanced SEO (meta, schema, sitemap)", included: true },
      { name: "Priority support (post-launch)", included: true },
    ],
    highlighted: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding bg-cream-dark">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Pricing
        </h2>
        <div className="divider-gold mt-4 mb-6" />
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          Transparent pricing with no hidden fees.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative rounded-xl p-8 border transition-shadow ${
              plan.highlighted
                ? "bg-foreground text-card border-foreground shadow-2xl md:-mt-4 md:mb-4 z-10"
                : "bg-card border-border shadow-sm hover:shadow-md"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-body font-semibold px-4 py-1 rounded-full tracking-wide whitespace-nowrap">
                Most popular
              </span>
            )}
            <h3
              className={`font-display text-2xl font-bold mb-2 ${
                plan.highlighted ? "text-card" : "text-foreground"
              }`}
            >
              {plan.name}
            </h3>
            <p className={`font-body text-sm mb-6 ${plan.highlighted ? "text-card/80" : "text-muted-foreground"}`}>
              {plan.description}
            </p>
            <p className="font-display text-4xl font-bold text-gold mb-6">
              {plan.price}
            </p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f.name} className="flex items-start gap-3 font-body text-sm">
                  {f.included ? (
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  )}
                  <span className={`${
                    plan.highlighted 
                      ? (f.included ? "text-card/90" : "text-card/50 line-through")
                      : (f.included ? "text-foreground" : "text-muted-foreground line-through")
                  }`}>
                    {f.name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <p className="text-center mt-12 font-body text-sm text-muted-foreground">
        Final pricing depends on requirements.
      </p>
    </div>
  </section>
);

export default PricingSection;
