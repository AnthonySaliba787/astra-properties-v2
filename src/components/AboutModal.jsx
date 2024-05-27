import { AnimatePresence, motion } from "framer-motion";

function AboutModal({ activateAboutModal, aboutModal }) {
  return (
    <>
      <AnimatePresence>
        {aboutModal ? (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full min-h-screen fixed mx-auto flex flex-col justify-center items-center bg-black/40 backdrop-blur-xl z-20 px-4 py-4"
          >
            <div className="max-w-2xl bg-black/80 rounded-md shadow-md py-4 px-4 flex flex-col justify-center items-center text-center text-neutral-200">
              <h1 className="text-3xl font-medium px-4 py-4">About Us</h1>
              <h3 className="text-lg lg:text-xl text-neutral-300 font-medium">
                Welcome to Astra Properties
              </h3>
              <p className="lg:text-lg px-4 py-4">
                At Astra Properties, we believe in turning your real estate
                dreams into reality. Whether you're looking for a place to call
                home or an investment opportunity, our dedicated team is here to
                guide you every step of the way.
              </p>
              <button onClick={activateAboutModal} className="glass-button">
                Close
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default AboutModal;
