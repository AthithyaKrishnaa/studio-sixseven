import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import ContactInfo from "@/components/ContactInfo";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <PricingSection />
    <ProcessSection />
    <FAQSection />
    <ContactInfo />
    <WorkSection />
    <WhatsAppButton />
    <Footer />
  </>
);

export default Index;
