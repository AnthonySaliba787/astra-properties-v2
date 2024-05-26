import React, { useState } from "react";
import House1 from "../assets/house1.webp";
import House2 from "../assets/house2.webp";
import House3 from "../assets/house3.webp";

const houses = [
  {
    src: House1,
    title: "Rural Villa",
    description:
      "Charming rural villa surrounded by lush greenery, offering a peaceful retreat from the bustling city life.",
  },
  {
    src: House2,
    title: "Modern House",
    description: "Beautiful modern house with all the amenities.",
  },
  {
    src: House3,
    title: "Beach House",
    description:
      "A stunning beach house with a breathtaking view of the ocean.",
  },
];

function Properties({ heroRef }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentHouse = houses[currentIndex];
  const currentBgImage = {
    backgroundImage: `url(${currentHouse.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % houses.length);
  };

  const handleBack = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + houses.length) % houses.length
    );
  };

  return (
    <div
      style={currentBgImage}
      ref={heroRef}
      className="w-full min-h-screen flex flex-col justify-center items-center"
    >
      <div className="w-full min-h-screen bg-black/50 backdrop-blur-xl flex flex-col justify-center items-center">
        <div className="w-3/4 flex flex-col justify-center items-center px-4 py-4">
          <img
            src={currentHouse.src}
            alt="Real estate house"
            className="w-[40rem] rounded-md shadow-md aspect-[4/3]"
          />
          <div className="w-full flex flex-col justify-center items-center text-center py-4 text-neutral-200">
            <h1 className="text-2xl font-medium drop-shadow-md">
              {currentHouse.title}
            </h1>
            <p className="drop-shadow-md py-1">{currentHouse.description}</p>
          </div>
          <div className="w-full flex flex-row gap-4 justify-center items-center px-4 py-4 text-neutral-200">
            <button onClick={handleBack} className="glass-button">
              back
            </button>
            <button onClick={handleNext} className="glass-button">
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Properties;
