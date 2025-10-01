import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { useGSAP } from "@gsap/react";
import Header from "./components/Header";
import Community from "./sections/Community";
import Companies from "./sections/Companies";
import ContactUs from "./sections/ContactUs";
import Explore from "./sections/Explore";
import Faqs from "./sections/Faqs";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import HowItWorks from "./sections/HowItWorks";
import Services from "./sections/Services";
import Testimmonials from "./sections/Testimmonials";

function App() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  }, []);

  return (
    <>
      <div className="max-w-screen overflow-x-hidden ">
        <Header />
        <div id="smooth-wrapper">
          <div
            id="smooth-content"
            className="pt-[135px] md:pt-[161px] pb-14 md:pb-17.5  max-w-screen"
          >
            <HeroSection />
            <HowItWorks />
            <Services />
            <Testimmonials />
            <Companies />
            <Explore />
            <Community />
            <Faqs />
            <ContactUs />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
