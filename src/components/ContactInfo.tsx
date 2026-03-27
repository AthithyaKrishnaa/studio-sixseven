import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const contacts = [
  { name: "Krishnaa", role: "Founder", phone: "+91 8438431261", email: "athithyakrishnaam@gmail.com", image: "/krishnaa.jpeg" },
  { name: "Dhiva", role: "Co-Founder", phone: "+91 8072121493", email: "dhivaavihd2210@gmail.com", image: "/dhiva.jpeg" },
  { name: "Anand", role: "Sales Executive", phone: "+91 9385424841", email: "arulsebastin177@gmail.com", image: "/anand.jpeg" },
];

const ContactInfo = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="contact" className="section-padding bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Get In Touch
          </h2>
          <div className="divider-gold mt-4" />
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side: CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <img src="/logo.png" alt="Studio 67" className="h-16 w-auto mx-auto lg:mx-0 mb-8 object-contain" />
            <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Let's build your website
            </h3>
            <p className="mt-4 font-body text-muted-foreground text-lg mb-10">
              Start your project today
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:max-w-none lg:mx-0">
              <a
                href="tel:+918072121493"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3.5 rounded-md font-body text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                Call Now
              </a>
              <a
                href="https://wa.me/918072121493"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3.5 rounded-md font-body text-sm font-semibold hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                WhatsApp
              </a>
              <a
                href="mailto:dhivaavihd2210@gmail.com"
                className="flex items-center justify-center gap-2 bg-[#EA4335] text-white px-4 py-3.5 rounded-md font-body text-sm font-semibold hover:bg-[#d63a2d] transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                Email Us
              </a>
              <a
                href="https://www.instagram.com/studio.sixseven/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white px-4 py-3.5 rounded-md font-body text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-4 h-4 shrink-0" />
                Instagram
              </a>
            </div>
          </motion.div>

          {/* Right Side: Team */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {contacts.map((c, i) => {
              const isActive = activeCard === i;
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                  onClick={() => setActiveCard(isActive ? null : i)}
                  className={`bg-card rounded-2xl p-5 lg:p-8 text-center shadow-sm border flex flex-col items-center hover:shadow-md cursor-pointer transition-all duration-300 ${
                    isActive ? "scale-105 border-primary ring-2 ring-primary/20 z-10" : "border-border scale-100 z-0"
                  }`}
                >
                  <div className={`w-24 h-24 lg:w-32 lg:h-32 mb-4 lg:mb-5 rounded-full overflow-hidden border-2 transition-all duration-500 shrink-0 ${
                    isActive ? "border-primary scale-110 shadow-lg" : "border-primary/20 scale-100"
                  }`}>
                    <img 
                      src={c.image} 
                      alt={c.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-display text-lg lg:text-xl font-semibold text-foreground mb-1 mt-1">{c.name}</h4>
                  <p className="font-body text-sm text-primary font-medium mb-4 lg:mb-5">{c.role}</p>
                  
                  <div className="flex flex-col gap-3 lg:gap-4 w-full items-start pl-2 sm:pl-0 sm:items-center">
                    <a
                      href={`tel:${c.phone.replace(/\s/g, "")}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-start sm:justify-center w-full gap-2 font-body text-[13px] sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4 lg:w-[1.125rem] lg:h-[1.125rem] shrink-0 text-primary" />
                      <span className="truncate text-left font-normal">{c.phone}</span>
                    </a>
                    <a
                      href={`mailto:${c.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-start sm:justify-center w-full gap-2 font-body text-[13px] sm:text-sm text-muted-foreground hover:text-[#EA4335] transition-colors"
                      title={c.email}
                    >
                      <Mail className="w-4 h-4 lg:w-[1.125rem] lg:h-[1.125rem] shrink-0 text-[#EA4335]" />
                      <span className="truncate text-left max-w-[180px] sm:max-w-[220px] font-normal">{c.email}</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
