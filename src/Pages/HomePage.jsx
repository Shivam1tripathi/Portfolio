import { useEffect } from "react";
import About from "../component/About";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Portfolio from "../component/Portfolio";
import ScrollReveal from "scrollreveal";
import TechStack from "../component/TechStack";
import StatsBanner from "../component/StatsBanner";
import InternshipSection from "../component/InternshipSection";
import ContactForm from "../component/ContactForm";

const HomePage = () => {
  useEffect(() => {
    const config = { distance: "50px", origin: "bottom", duration: 1000 };
    ScrollReveal().reveal("h1, .section__header", config);
    ScrollReveal().reveal(".section__description", { ...config, delay: 300 });
    ScrollReveal().reveal(".btn, .service__card, .portfolio__card", {
      ...config,
      interval: 200,
    });
  }, []);
  return (
    <div className="bg-gradient-to-br from-[#62393c] to-[#181e41] ">
      <Navbar />
      <Header />
      <About />
      <TechStack />
      <Portfolio />
      <InternshipSection />
      <StatsBanner />
      <ContactForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
