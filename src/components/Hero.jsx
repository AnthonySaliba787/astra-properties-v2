import Background from "../assets/herobg.webp";
import Navbar from "./Navbar";

function Hero({ scrollToProperties }) {
  const background = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <div
        style={background}
        className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-4 text-neutral-100"
      >
        <Navbar />
        <h1 className="text-4xl md:text-5xl font-medium text-center drop-shadow-md">
          Reach the sky with us
        </h1>
        <p className="text-sm text-center py-4 uppercase font-light tracking-[0.5em] drop-shadow-md">
          revolutionizing real estate
        </p>
        <button onClick={scrollToProperties} className="glass-button">
          explore
        </button>
      </div>
    </>
  );
}

export default Hero;
