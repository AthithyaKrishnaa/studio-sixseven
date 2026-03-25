import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";

const FinalCTA = () => (
  <section className="section-padding bg-foreground text-card">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          Let's build your website
        </h2>
        <p className="mt-4 font-body text-card/70 text-lg">
          Start your project today
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+918072121493"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-body font-semibold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href="https://wa.me/918072121493"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-card/30 text-card px-8 py-4 rounded-md font-body font-semibold hover:bg-card/10 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="mailto:dhivaavihd2210@gmail.com"
            className="inline-flex items-center gap-2 border border-card/30 text-card px-8 py-4 rounded-md font-body font-semibold hover:bg-card/10 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email Us
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
