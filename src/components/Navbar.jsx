function Navbar() {
  return (
    <>
      <nav className="w-full bg-transparent text-neutral-200 py-4 absolute top-0 left-0">
        <div className="container mx-auto flex justify-around items-center text-center">
          <h1 className="text-lg md:text-2xl font-bold">Astra Properties</h1>
          <div className="flex space-x-4 gap-2 text-sm md:text-base">
            <button className="py-2 hover:text-neutral-400 duration-300 uppercase">
              About
            </button>
            <button className="py-2 hover:text-neutral-400 duration-300 uppercase">
              Contact
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
