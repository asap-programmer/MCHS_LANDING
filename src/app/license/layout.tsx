import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ClientWrapper from '@/components/ClientWrapper';

export default function LicenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientWrapper>
      <Header />
      {children}
      <Footer />
    </ClientWrapper>
  );
}
