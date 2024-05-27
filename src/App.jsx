import { useRef, useState } from "react";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import AboutModal from "./components/AboutModal";
import ContactModal from "./components/ContactModal";
import { motion } from "framer-motion";

function App() {
  const heroRef = useRef(null);
  const [aboutModal, setAboutModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const activateAboutModal = () => {
    setAboutModal(!aboutModal);
  };

  const activateContactModal = () => {
    setContactModal(!contactModal);
  };

  const scrollToProperties = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AboutModal
        key="modal"
        activateAboutModal={activateAboutModal}
        aboutModal={aboutModal}
      />
      <ContactModal
        key="modal2"
        activateContactModal={activateContactModal}
        contactModal={contactModal}
      />
      <div className="min-h-screen mx-auto flex flex-col justify-center items-center">
        <Hero
          scrollToProperties={scrollToProperties}
          activateAboutModal={activateAboutModal}
          activateContactModal={activateContactModal}
        />
        <Properties heroRef={heroRef} />
      </div>
    </>
  );
}

export default App;
