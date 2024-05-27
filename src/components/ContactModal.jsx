function ContactModal({ activateContactModal }) {
  return (
    <>
      <div className="w-full min-h-screen fixed mx-auto flex flex-col justify-center items-center bg-black/40 backdrop-blur-xl z-20 px-4 py-4">
        <div className="max-w-2xl bg-black/80 rounded-md shadow-md py-4 px-4 flex flex-col justify-center items-center text-center text-neutral-200 overflow-y-auto">
          <h1 className="text-3xl font-medium px-4 py-4">Contact Us</h1>
          <h3 className="text-lg lg:text-xl text-neutral-300 font-medium px-2">
            Ready to take the next step? Contact us today to learn more about
            our services and how we can help you achieve your real estate goals.
          </h3>
          <ul className="py-4 text-center font-light flex flex-col gap-1">
            <li>Phone: (123) 456-7890</li>
            <li>
              Email:{" "}
              <span className="text-neutral-400 cursor-pointer">
                info@astraproperties.com
              </span>
            </li>
          </ul>
          <button onClick={activateContactModal} className="glass-button">
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactModal;
