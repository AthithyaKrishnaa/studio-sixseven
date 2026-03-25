import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import framezScreenshot from "@/assets/framez-studio-screenshot.jpg";
import orchidScreenshot from "@/assets/orchid-high-screenshot.jpg";

const projects = [
  {
    title: "Framez Studio",
    subtitle: "E-Commerce Website",
    description:
      "A warm, elegant online store for a photo framing business. Features product galleries, WhatsApp ordering, and a fully responsive design that captures the brand's artisan quality.",
    tags: ["E-Commerce", "Product Gallery", "WhatsApp Integration", "Responsive"],
    image: framezScreenshot,
    url: "https://framezstudioo.netlify.app/",
    color: "from-amber-900/80 to-amber-700/60",
  },
  {
    title: "Orchid High School",
    subtitle: "Institutional Website",
    description:
      "A professional, trust-building website for a 40+ year-old school. Complete with admissions portal, photo galleries, stats showcase, and a modern design that reflects academic excellence.",
    tags: ["Education", "Admissions Portal", "Photo Gallery", "Multi-page"],
    image: orchidScreenshot,
    url: "https://orchidhigh-school.vercel.app/",
    color: "from-blue-900/80 to-blue-700/60",
  },
];

const WorkSection = () => (
  <section id="work" className="section-padding bg-foreground">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="font-body text-sm text-gold uppercase tracking-[0.3em] mb-4">
          Portfolio
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-card">
          Our Recent Work
        </h2>
        <div className="w-16 h-0.5 mx-auto mt-6 bg-gold" />
        <p className="mt-6 font-body text-card/60 max-w-xl mx-auto">
          Real projects. Real results. Here's what we've built for our clients.
        </p>
      </motion.div>

      <div className="space-y-24">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? "lg:direction-rtl" : ""
            }`}
          >
            {/* Image */}
            <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative overflow-hidden rounded-xl shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1440}
                  height={900}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center`}
                >
                  <span className="flex items-center gap-2 font-body text-sm font-semibold text-card bg-card/20 backdrop-blur-sm px-6 py-3 rounded-full">
                    <ExternalLink className="w-4 h-4" />
                    Visit Live Site
                  </span>
                </div>
              </a>
            </div>

            {/* Content */}
            <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <p className="font-body text-xs text-gold uppercase tracking-[0.2em] mb-2">
                {project.subtitle}
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-card mb-4">
                {project.title}
              </h3>
              <p className="font-body text-card/70 leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs px-3 py-1.5 rounded-full border border-card/20 text-card/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-gold hover:text-gold-light transition-colors group"
              >
                View Project
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;
