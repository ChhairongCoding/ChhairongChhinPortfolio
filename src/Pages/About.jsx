import React, { forwardRef } from "react";
import { delay, motion } from "framer-motion";
import Hero from "../assets/Images/section-about.png";
import js from "../assets/Images/logo/js.png";
import express from "../assets/Images/logo/express.png";
import node from "../assets/Images/logo/node.png";
import reactjs from "../assets/Images/logo/react.png";
import tailwindcss from "../assets/Images/logo/Tailwind_CSS.png";

const lange = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 70 },
  { name: "MySQL & GitHub", level: 60 },
  { name: "React Js & Tailwind CSS", level: 72 },
];

const bounceInVariants = {
  hidden: { y: -200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const RightVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2,
      when: "afterChildren",
    },
  },
};

const About = forwardRef((props, ref) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 2 }}
    ref={ref}
    className="h-screen flex flex-col items-center justify-center relative  "
  >
    <div className="row w-11/12 items-center  m-auto flex gap-10 ">
      <div className="col w-1/2 relative top-16">
        <div className="contain relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: 100, y: 110, opacity: 0.9 }}
            transition={{ delay: 2, duration: 4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="content-[''] w-[70%] h-[60%] absolute  bg-gradient-to-tr from-purple-500  to-transparent to-90%  blur-2xl  rounded-full z-10"
          ></motion.div>
          <motion.div
            variants={bounceInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="absolute  bg-gradient-to-tr from-blue-600  to-transparent to-90% w-[100%] h-[90%] -left-[80px] shadow-2xl rounded-xl"
          ></motion.div>
          <div className="relative  ">
            <motion.img
              variants={bounceInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="w-[80%] relative drop-shadow-2xl z-30 "
              src={Hero}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col w-1/2 h-full pt-20 pb-10 text-4xl font-sans  text-white flex flex-col justify-between">
        {/* Align this to the start */}
        <div className="contain">
          <motion.h1
            variants={RightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-bold uppercase text-white"
          >
            About me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2, duration: 0.5 }}
            className="py-6 text-xl font-mono text-gray-400"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            explicabo temporibus laborum? Quos debitis numquam veniam saepe
            tempore ipsum ad maxime possimus est sunt! Culpa eum id perferendis
            mollitia animi!
          </motion.p>
        </div>

        {/* Align this to the end */}
        <div className="language ">
          <motion.div
            variants={RightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-6"
          >
            <h1 className="text-4xl font-bold ">What Level am I!</h1>
          </motion.div>
          <div className="contain text-2xl ">
            {lange.map((l, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 2.4, ease: "linear" }}
                className="mt-2 w-full "
                key={index}
              >
                <h1 className="mb-2">{l.name}</h1>
                <div className="w-[45%] border border-white absolute h-6 rounded-3xl  "></div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: 2.4, ease: "linear" }}
                  className="block shadow-2xl bg-gradient-to-t from-indigo-500 from-15% via-teal-300 to-purple-200 to-90% h-6 rounded-3xl"
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.section>
));

export default About;
