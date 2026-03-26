import { Phone, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  { name: "Dhiva", phone: "+91 8072121493", email: "dhivaavihd2210@gmail.com", image: "/dhiva.jpeg" },
  { name: "Krishnaa", phone: "+91 8438431261", email: "athithyakrishnaam@gmail.com", image: "/krishnaa.jpeg" },
  { name: "Anand", phone: "+91 9385424841", email: "arulsebastin177@gmail.com", image: "/anand.jpeg" },
];

const ContactInfo = () => (
  <section id="contact" className="section-padding bg-cream-dark">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Get In Touch
        </h2>
        <div className="divider-gold mt-4" />
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {contacts.map((c, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            className="bg-card rounded-lg p-6 text-center shadow-sm border border-border flex flex-col items-center"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border-4 border-primary/20 shrink-0">
              <img 
                src={c.image} 
                alt={c.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">{c.name}</h3>
            <div className="flex flex-col gap-3 w-full items-center">
              <a
                href={`tel:${c.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 font-body text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {c.phone}
              </a>
              <a
                href={`mailto:${c.email}`}
                className="flex items-center gap-2 font-body text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                title={c.email}
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="truncate max-w-[200px] md:max-w-[250px]">{c.email}</span>
              </a>
              <a
                href="https://www.instagram.com/studio.sixseven/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm md:text-base text-muted-foreground hover:text-primary transition-colors mt-2"
              >
                <Instagram className="w-4 h-4" />
                @studio.sixseven
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactInfo;
