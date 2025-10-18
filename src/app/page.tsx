import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import InfoSection from '@/components/sections/InfoSection';
import LicenseTypesSection from '@/components/sections/LicenseTypesSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import Footer from '@/components/sections/Footer';
import ClientWrapper from '@/components/ClientWrapper';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ClientWrapper>
        <Header />
        <HeroSection />
        <InfoSection />
        <LicenseTypesSection />
        <AdvantagesSection />
        <ContactFormSection />
        <ContactInfoSection />
        <Footer />
      </ClientWrapper>
    </div>
  );
}
