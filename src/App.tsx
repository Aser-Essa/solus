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
  return (
    <>
      <div className="py-8 pb-14 md:pt-10 md:pb-17.5">
        <Header />
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
    </>
  );
}

export default App;
