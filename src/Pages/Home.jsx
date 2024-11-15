import React, { useState, forwardRef, useEffect } from "react";
import { motion } from "framer-motion";
import MainHero from "../assets/Images/MainHero.png";
import Laptop from "../assets/Images/laptop.png";
import East from "../assets/Images/east.png";
import Marqee from "../components/Marqee";

const Home = forwardRef((props, ref) => {
  // State hook to manage the state
  const [isHovered, setIsHovered] = useState(false);

  // Handle hover state change (example usage)
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <section
      ref={ref}
      className="w-full h-screen items-center flex relative z-30 "
    >
      <div className="conttain w-11/12 m-auto text-slate-100 flex text-5xl font-mono relative ">
        <div className="col flex-1 ">
          <div className="wrap block font-extrabol h-full w-full content-center ">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", duration: 2, delay: 0.9 }}
              className="font-sans font-bold text-shadow-lg mb-3"
            >
              <span>
                Hi, my name{""}
                <span className="text-teal-400">
                  {" "}
                  Chhairong <br /> Chhin.
                </span>
              </span>{" "}
              Welcome to my <br /> Web Portfolio{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", duration: 3, delay: 1.2 }}
              className="text-xl text-gray-400 w-[80%]"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              facere accusamus, voluptatem perferendis in illum error
              repellendus ratione id at modi dignissimos
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", duration: 3, delay: 1.2 }}
              className="btn-primary btn-primary-hover my-10"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {isHovered ? "Contact Me!" : "Let's Contact"}
            </motion.button>

            {/* Language */}
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2, delay: 0.9 }}
              className="text-3xl "
            >
              <div className="mb-2 text-teal-400 ">
                {" "}
                Libraries, framework <br />& Tool
              </div>
              <Marqee />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ x: 800 }}
          animate={{ x: 50 }}
          transition={{ type: "spring", duration: 2, delay: 0.9 }}
          className={`col w-1/2 relative h-screen `}
        >
          <div className="content-[''] w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-tr from-purple-500 to-blue-600  blur-xl  rounded-full"></div>
          <div className="content-[''] w-96 h-96 top-[75%] left-[60%] -translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-tr from-fuchsia-500 to-gray-900 opacity-60 blur-xl  rounded-full"></div>
          <div className="content-[''] w-96 h-96 top-[65%] left-[40%] -translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-tr from-fuchsia-500 to-transparent to-90% opacity-60 blur-xl  rounded-full"></div>
          <motion.img
            animate={{
              y: ["0%", "5%", "0%"],
            }}
            transition={{
              delay: 3,
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute z-20 w-[40%]  top-44"
            src={Laptop}
            alt=""
          />

          <motion.img
            animate={{
              y: ["0%", "10%", "0%"],
            }}
            transition={{
              delay: 3,
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute z-0 w-[20%] -right-0 top-[400px] blur-sm"
            src={East}
            alt=""
          />

          <motion.img
            animate={{
              y: ["0%", "5%", "0%"],
            }}
            transition={{
              delay: 3,
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className={`w-[80%] absolute drop-shadow-2xl z-10 right-0`}
            src={MainHero}
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
});

export default Home;
