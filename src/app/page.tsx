import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import TechStack from '@/components/TechStack';
import AiServices from '@/components/AiServices';
import RealWorldWork from '@/components/RealWorldWork';
import Experience from '@/components/Experience';
import CaseStudies from '@/components/CaseStudies';
import ClientAppreciation from '@/components/ClientAppreciation';
import BrandShowcase from '@/components/BrandShowcase';
import AboutSection from '@/components/AboutSection';
import ResumeSection from '@/components/ResumeSection';
import ProcessRoadmap from '@/components/ProcessRoadmap';
import PricingTerms from '@/components/PricingTerms';
import Faq from '@/components/Faq';
import Consultation from '@/components/Consultation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {/* Hero & Positioning */}
        <Hero />

        {/* 1. Core Capabilities & Tooling */}
        <Expertise />
        <TechStack />
        <AiServices />

        {/* 2. Real-World Work & Honest Experience Counts */}
        <RealWorldWork />

        {/* 3. Professional Industry Experience */}
        <Experience />

        {/* 4. Selected Real-World Projects */}
        <CaseStudies />

        {/* 4. Real Client Opportunity & Official Appreciation */}
        <ClientAppreciation />

        {/* 5. The Sandy Brand Architecture */}
        <BrandShowcase />

        {/* 6. Analytical Philosophy & Growth */}
        <AboutSection />

        {/* 7. Comprehensive Resume & Verified Credentials */}
        <ResumeSection />

        {/* 8. Process & Engagement Models */}
        <ProcessRoadmap />

        {/* 8. Project Pricing & Engagement Terms */}
        <PricingTerms />

        {/* 9. Frequently Asked Questions */}
        <Faq />

        {/* 10. Start a Project / Consultation */}
        <Consultation />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
