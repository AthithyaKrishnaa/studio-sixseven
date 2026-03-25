import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import ContactInfo from "@/components/ContactInfo";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <WorkSection />
    <PricingSection />
    <ProcessSection />
    <FAQSection />
    <FinalCTA />
    <ContactInfo />
    <WhatsAppButton />
  </>
);

export default Index;
