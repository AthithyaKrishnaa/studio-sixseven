import { motion } from "framer-motion";
import { Globe, RefreshCw, Server, Headphones } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Design & Build", desc: "Custom websites built from scratch to match your brand and business goals." },
  { icon: RefreshCw, title: "Website Redesign & Modernization", desc: "Upgrade your outdated website with a fresh, modern look and better UX." },
  { icon: Server, title: "Domain & Hosting Setup", desc: "We handle the technical setup so you can focus on running your business." },
  { icon: Headphones, title: "Ongoing Support", desc: "Post-launch support to keep your website running smoothly." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-warm-white">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Our Services
        </h2>
        <div className="divider-gold mt-4 mb-6" />
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          Everything you need to establish and grow your online presence.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-border group"
          >
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              {s.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
