import React from "react";
import { motion } from "framer-motion";

const Navbar = ({ refs }) => {
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "tween", duration: 0.5 }}
      className="justify-between py-2 fixed w-full top-0 z-50 backdrop:blur-3xl backdrop-blur-md "
    >
      <div className="contain flex w-11/12 m-auto h-full items-center font-mono text-xl">
        <div className="logo flex-1">
          <button
            onClick={() => scrollToSection(refs.home)}
            className="text-white text-3xl font-bold"
          >
            <span className="text-teal-400">.CHHIN </span>CHHAIRONG
          </button>
        </div>
        <div className="flex space-x-4 justify-center flex-1  gap-4">
          <button
            onClick={() => scrollToSection(refs.home)}
            className="text-white"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(refs.about)}
            className="text-white"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(refs.portfolio)}
            className="text-white"
          >
            Portfolio
          </button>
        </div>

        <div className="contact border-2 p-2 ">
          <button
            onClick={() => scrollToSection(refs.contact)}
            className="text-white"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
