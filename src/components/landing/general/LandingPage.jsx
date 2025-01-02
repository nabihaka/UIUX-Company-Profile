import * as React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import HomeSection from "@/components/landing/section/Home.jsx";
import AboutSection from "@/components/landing/section/About.jsx";
import ServicesSection from "@/components/landing/section/Services.jsx";
import PortofolioSection from "@/components/landing/section/Portofolio.jsx";
import TestimoniSection from "@/components/landing/section/Testimoni.jsx";
import ContactSection from "@/components/landing/section/Contact.jsx";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      {/* <--------------------------------------HOME-SECTION--------------------------------------> */}
      <HomeSection />
      {/* <--------------------------------------ABOUT-SECTION--------------------------------------> */}
      <AboutSection />
      {/* <--------------------------------------SERVICES-SECTION--------------------------------------> */}
      <ServicesSection />
      {/* <--------------------------------------PORTOFOLIO-SECTION--------------------------------------> */}
      <PortofolioSection />
      {/* <--------------------------------------TESTIMONI-SECTION--------------------------------------> */}
      <TestimoniSection />
      {/* <--------------------------------------CONTACT-SECTION--------------------------------------> */}
      <ContactSection />
      {/* <--------------------------------------FOOTER--------------------------------------> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
