import { useRef } from "react";
import Hero from "./components/Hero";
import Properties from "./components/Properties";

function App() {
  const heroRef = useRef(null);

  const scrollToProperties = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="min-w-screen min-h-screen mx-auto flex flex-col justify-center items-center">
        <Hero scrollToProperties={scrollToProperties} />
        <Properties heroRef={heroRef} />
      </div>
    </>
  );
}

export default App;
