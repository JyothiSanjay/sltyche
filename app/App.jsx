import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import { AboutBlock, ServicesSection, ModulesStrip, TalentBlock, WhySection, IndustriesSection, StepsSection, MethodologySection, CareersSection, ContactSection } from "./components/blocks.jsx";
import image from "./favicon.ico";


export const metadata = {
  title: "Sloan Tyche | SAP Consulting, Staffing & Managed Services",
  logo: {image},
  description: "Sloan Tyche Private Limited — trusted SAP consulting and talent solutions partner. SAP S/4HANA transformation, resource augmentation, project delivery and managed services from Bangalore, India.",
};

export default function App() {
  return (
    <>
      <Hero
        primary={{ label: "Let's Discuss Your SAP Requirements", href: "contact" }}
        secondary={{ label: "Explore Services", href: "services" }}
      />
      <Marquee />
      <AboutBlock />
      <ServicesSection />
      <ModulesStrip />
      <TalentBlock />
      <WhySection />
      <IndustriesSection full />
      <StepsSection />
      <MethodologySection />
      <CareersSection />
      <ContactSection />
    </>
  );
}
