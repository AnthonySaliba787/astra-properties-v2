import Background from "../assets/herobg.webp";

function Hero({ scrollToProperties }) {
  const background = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
  };
  return (
    <>
      <div
        style={background}
        className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-4 text-neutral-100"
      >
        <h1 className="text-4xl md:text-5xl font-medium text-center drop-shadow-md">
          Astra Properties
        </h1>
        <p className="text-sm text-center py-4 uppercase font-light tracking-[0.5em] drop-shadow-md">
          revolutionizing real estate
        </p>
        <button
          onClick={scrollToProperties}
          className="w-48 py-3 my-1 rounded-md shadow-md font-medium bg-white/40 uppercase hover:bg-white/60 hover:shadow-lg focus:bg-white/60 focus:shadow-lg active:scale-95 active:shadow-sm duration-300"
        >
          discover
        </button>
      </div>
    </>
  );
}

export default Hero;
