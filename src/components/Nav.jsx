function Nav() {
  return (
    <>
      <div className="w-full h-48 flex flex-row justify-between items-start px-4 py-4 text-neutral-200 z-10">
        <h1 className="text-2xl font-bold">Astra Properties</h1>
        <div className="w-full flex flex-row gap-2">
          <button>About</button>
          <button>Contact</button>
        </div>
      </div>
    </>
  );
}

export default Nav;
