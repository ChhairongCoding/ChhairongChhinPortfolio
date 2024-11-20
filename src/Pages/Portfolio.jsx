import React, { forwardRef } from "react";
import UFO from "../assets/Images/ufo.png";
import Ecomerce from "../assets/Images/Portfolio/E-comerce.png";
import Elearning from "../assets/Images/Portfolio/Elearning.png";
import Porche from "../assets/Images/Portfolio/Porche.png";
import CardPortfolio from "../components/CardPortfolio";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

const data = [
  {
    name: "Eleaning",
    description:
      "Create by myself becuase when i continue to backend i will update with this project.",
    img: Elearning,
  },
  {
    name: "Porche History",
    description:
      "This project has create with my team work during I am in second year at final term I put alot of to on this project, this project talk about the porche car 911.",
    img: Porche,
  },
  {
    name: "E-comerce",
    description:
      "It's similar to my elearning project. Right now this project is on the way.",
    img: Ecomerce,
  },
];

const Portfolio = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="w-full h-screen flex items-center justify-center relative "
    >
      <div>
        <motion.img
          initial={{ x: "-300%" }} // Start off-screen to the left
          whileInView={{
            x: "0%",
            y: ["0%", "10%", "0%"], // Loop y-axis movement
            rotate: [0, 5, 0], // Loop rotation
          }}
          viewport={{ once: true }} // Ensure x only animates once when it enters view
          transition={{
            x: { duration: 2, ease: "easeOut" }, // One-time horizontal animation
            y: {
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            },
            rotate: {
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
          className="w-1/4 absolute top-2 right-0 z-10 h-60 object-cover"
          src={UFO}
          alt="Flying UFO"
        />
      </div>

      <div className="row w-11/12 m-auto relative ">
        <div className="col text-center pb-16 text-4xl font-sans font-bold text-white">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 5 }}
          >
            What i have completed!
          </motion.h1>
        </div>
        <div className="col">
          <motion.div
            initial={{ y: 400, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 2, type: "spring" }}
            className="contain flex gap-8 h-auto "
          >
            {data.map((d, index) => (
              <CardPortfolio {...d} key={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
