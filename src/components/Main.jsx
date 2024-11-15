import React, { useRef } from "react";
import Navbar from "./Navbar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Contact";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Main = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      {/* Pass refs to Navbar for smooth scrolling */}
      <Navbar
        refs={{
          home: homeRef,
          about: aboutRef,
          portfolio: portfolioRef,
          contact: contactRef,
        }}
      />

      {/* Sections rendered in sequence for smooth scrolling */}

      <div className="relative bg-gray-900 overflow-hidden">
        <motion.div
          initial={{ right: -800, opacity: 0 }}
          animate={{ right: -80, opacity: 1 }}
          transition={{ type: "spring", duration: 3 }}
          className="w-[120%] h-full content-[''] bg-gradient-to-r from-gray-900 via-blue-800  to-indigo-700 to-95%  shadow-md shadow-gray-800 absolute rounded-lg z-0 -right-[80px] top-0"
        ></motion.div>
        {/* Fixed Background Image */}
        {/* <div className="fixed top-0 left-0 w-full h-screen z-[-1]"></div> */}
        {/* Content Sections */}
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Portfolio ref={portfolioRef} />
        <Contact ref={contactRef} />
        {/* Footer */}
        <Footer
          refs={{
            Home: homeRef,
          }}
        />
      </div>
    </div>
  );
};

export default Main;
