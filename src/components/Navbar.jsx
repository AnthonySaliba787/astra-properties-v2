function Navbar({ activateAboutModal, activateContactModal }) {
  return (
    <>
      <nav className="w-full bg-transparent text-neutral-200 py-4 absolute top-0 left-0 z-10">
        <div className="container mx-auto flex justify-around items-center text-center">
          <h1 className="text-lg md:text-2xl font-bold">Astra Properties</h1>
          <div className="flex space-x-4 gap-2 text-sm md:text-base font-medium">
            <button
              onClick={activateAboutModal}
              className="py-2 hover:text-neutral-400 duration-300"
            >
              About
            </button>
            <button
              onClick={activateContactModal}
              className="py-2 hover:text-neutral-400 duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
