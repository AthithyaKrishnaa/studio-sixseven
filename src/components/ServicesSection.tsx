import { motion } from "framer-motion";
const services = [
  { image: "/our_services/heading_1.png", title: "Website Design & Build", desc: "Custom websites built from scratch to match your brand and business goals." },
  { image: "/our_services/heading_2.png", title: "Website Redesign & Modernization", desc: "Upgrade your outdated website with a fresh, modern look and better UX." },
  { image: "/our_services/heading_3.png", title: "Domain & Hosting Setup", desc: "We handle the technical setup so you can focus on running your business." },
  { image: "/our_services/heading_4.png", title: "Ongoing Support", desc: "Post-launch support to keep your website running smoothly." },
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
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="bg-card rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow border border-border group flex flex-col items-center lg:items-start"
            >
              <div className="w-[90%] aspect-square mb-8 mx-auto transition-transform duration-500 group-hover:scale-105">
                <img src={s.image} alt={s.title} className="w-full h-full object-contain rounded-2xl drop-shadow-sm" />
              </div>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-gold mb-3 text-center lg:text-left w-full">
              {s.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed text-center lg:text-left w-full">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
