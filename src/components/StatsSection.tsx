import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Clock, Smartphone, HeadphonesIcon } from "lucide-react";

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered", icon: Briefcase },
  { value: 7, suffix: " Days", label: "Average Delivery", icon: Clock },
  { value: 100, suffix: "%", label: "Mobile First", icon: Smartphone },
  { value: 24, suffix: "/7", label: "Support Available", icon: HeadphonesIcon },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-gold">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => (
  <section className="bg-cream-dark section-padding">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <s.icon className="w-8 h-8 text-gold mx-auto mb-4" />
            <CountUp target={s.value} suffix={s.suffix} />
            <p className="mt-2 font-body text-sm text-muted-foreground tracking-wide uppercase">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
