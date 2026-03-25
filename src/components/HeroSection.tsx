import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional workspace"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-left mt-20 md:mt-0 md:pt-0 pb-0 md:pb-0 flex flex-col justify-center md:justify-end md:pb-24 min-h-screen md:min-h-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-card max-w-4xl"
        >
          Websites that turn visitors into{" "}
          <span className="text-gold">customers.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 font-body text-lg md:text-xl text-card/80 max-w-2xl"
        >
          Launch in days. Clean code. No nonsense.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-start"
        >
          <button
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground px-10 py-4 rounded-md font-body font-semibold text-base tracking-wide hover:bg-primary/90 transition-colors shadow-lg w-full sm:w-auto"
          >
            Get Your Website
          </button>
          <button
            onClick={() =>
              document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-card/30 text-card px-8 py-4 rounded-md font-body font-medium text-base tracking-wide hover:bg-card/10 transition-colors w-full sm:w-auto"
          >
            Browse Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;