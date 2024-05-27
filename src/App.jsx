import { useRef, useState } from "react";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import AboutModal from "./components/AboutModal";
import ContactModal from "./components/ContactModal";

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
      {aboutModal ? (
        <AboutModal activateAboutModal={activateAboutModal} />
      ) : null}
      {contactModal ? (
        <ContactModal activateContactModal={activateContactModal} />
      ) : null}
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
