import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ERPSection from "@/components/ERPSection";


import CTASection from "@/components/CTASection";

import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Leading ERP Solutions for Educational Institutions"
        description="Transform your institution with My Vidyon's intelligent ERP monitoring, student management, and powerful analytics. Trusted by 500+ schools worldwide with 99.9% uptime."
        keywords="school ERP software, educational institution management, student information system, attendance tracking system, school administration software, cloud-based school ERP, biometric attendance for schools, parent-teacher communication platform, school fee management, academic management system"
        imageAlt="My Vidyon - Leading School ERP and Student Management Platform"
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ERPSection />

      <CTASection />
      <Footer />
    </main >
  );
};

export default Index;
