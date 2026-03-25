import { Phone, Mail } from "lucide-react";

const contacts = [
  { name: "Dhiva", phone: "+91 8072121493", email: "dhivaavihd2210@gmail.com" },
  { name: "Krishnaa", phone: "+91 8438431261", email: "athithyakrishnaam@gmail.com" },
  { name: "Anand", phone: "+91 9385424841", email: "arulsebastin177@gmail.com" },
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
          <div key={i} className="bg-card rounded-lg p-6 text-center shadow-sm border border-border">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">{c.name}</h3>
            <a
              href={`tel:${c.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-2"
            >
              <Phone className="w-4 h-4" />
              {c.phone}
            </a>
            <a
              href={`mailto:${c.email}`}
              className="flex items-center justify-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              {c.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactInfo;
