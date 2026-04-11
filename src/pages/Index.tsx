import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { MobileMockupSection } from "@/components/MobileMockupSection";
import AboutSection from "@/components/AboutSection";
import ERPSection from "@/components/ERPSection";


import CTASection from "@/components/CTASection";

import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="MyVidyon™ – Official ERP Software for Educational Institutions"
        description="MyVidyon™ is a leading ERP software platform for schools, colleges, and educational institutions. Manage academics, administration, attendance, and more in one powerful system. Official Website of MyVidyon."
        keywords="MyVidyon, Vidyon, MyVidyon ERP, Vidyon ERP, my vidyon, vidyon software, school ERP software, educational institution management, student information system, attendance tracking system, school administration software, cloud-based school ERP, biometric attendance for schools, parent-teacher communication platform, school fee management, academic management system"
        imageAlt="MyVidyon - Leading School ERP and Student Management Platform"
      />
      <Navbar />
      <HeroSection />
      <MobileMockupSection />
      <AboutSection />
      <ERPSection />

      <CTASection />
      <Footer />
    </main >
  );
};

export default Index;
