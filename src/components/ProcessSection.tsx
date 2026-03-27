import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Understand your business", desc: "We learn about your goals, audience, and brand." },
  { num: "02", title: "Design & build", desc: "Crafting a modern, high-converting website." },
  { num: "03", title: "Launch in days", desc: "Your site goes live, fast and flawless." },
  { num: "04", title: "Ongoing support", desc: "We're here whenever you need us." },
];

const ProcessSection = () => (
  <section className="section-padding bg-warm-white">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          How We Work
        </h2>
        <div className="divider-gold mt-4" />
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <span className="font-display text-5xl font-bold text-gold/30">{s.num}</span>
            <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">
              {s.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
