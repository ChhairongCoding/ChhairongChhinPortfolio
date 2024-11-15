import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiVercel, SiGithub } from "react-icons/si";
import { FaGit } from "react-icons/fa";

const Marquee = () => {
  const [speed, setSpeed] = useState(10);

  // Handle mouse wheel scroll to adjust speed
  const handleWheel = (e) => {
    setSpeed((prevSpeed) => Math.max(5, prevSpeed + (e.deltaY > 0 ? 1 : -1)));
  };

  return (
    <div className="relative w-1/2">
      <div className="content-[''] w-full h-full absolute bg-gradient-to-tr from-purple-500 to-blue-600 opacity-30 rounded-2xl"></div>
      <div
        className="rounded-lg w-full p-4 shadow-lg  overflow-hidden backdrop-blur-2xl  relative "
        onWheel={handleWheel} // Mouse wheel event for controlling the speed
      >
        <motion.div
          animate={{ x: ["100%", "-200%"] }} // This causes the marquee to scroll
          transition={{
            repeat: Infinity, // Infinite loop
            duration: 16, // Control speed with state
            ease: "linear", // Smooth and constant scroll
            repeatType: "loop",
          }}
          className="marque flex"
        >
          {/* Marquee content */}
          <div className="flex space-x-8">
            <div
              className=" p-2 border border-blue-400 rounded-full shadow-md "
              aria-hidden="true"
            >
              <FaReact color="#61DAFB" />
            </div>
            <div
              className=" p-2 border border-blue-400 rounded-full shadow-md "
              aria-hidden="true"
            >
              <SiTailwindcss color="#38BDF8" />
            </div>
            <div
              className=" p-2 border border-blue-400 rounded-full shadow-md "
              aria-hidden="true"
            >
              <FaGit color="#F05032" />
            </div>
            <div
              className=" p-2 border border-blue-400 rounded-full shadow-md "
              aria-hidden="true"
            >
              <SiFramer color="#0055FF" />
            </div>
            <div
              className=" p-2 border border-blue-400 rounded-full shadow-md "
              aria-hidden="true"
            >
              <SiVercel color="white" />
            </div>
            <div
              className=" p-2 border border-blue-400 rounded-full shadow-md "
              aria-hidden="true"
            >
              <SiGithub color="white" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
