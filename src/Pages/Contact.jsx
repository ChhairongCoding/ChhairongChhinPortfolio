import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import Satellite from "../assets/Images/Satellite.png";
import { FaPhone, FaVoicemail, FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const list = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const parentVariants = {
  hidden: { opacity: 0, x: -520 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2.5, // Delay before the parent element starts animating
      duration: 0.5,
      when: "beforeChildren", // Ensures child animations start after the parent
    },
  },
};

const Contact = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="w-full h-screen relative overflow-hidden block items-center content-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="row w-11/12 h-auto m-auto block  shadow-gray-900 text-white font-mono "
      >
        <div className="row text-center pb-10 ">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-4xl font-bold pb-2 "
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2, duration: 0.5 }}
            className="w-1/2 m-auto text-gray-400 "
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
            dolores. Pariatur beatae harum eaque consequatur, eveniet doloribus
            quae soluta vero, quia dignissimos ratione. Repellat autem eveniet
            nostrum voluptates sint? Quod!
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 0.5 }}
          className="wrap flex w-full bg-blue-800 gap-6 shadow-2xl overflow-hidden"
        >
          <motion.div
            variants={parentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col relative w-2/5  flex flex-col bg-white text-teal-500 text-center p-10 rounded-e-3xl shadow-xl  "
          >
            <motion.div variants={list}>
              <motion.h1 variants={list} className="text-4xl font-bold pb-3 ">
                Get in Touch
              </motion.h1>
              <motion.p
                variants={list}
                className="text-lg text-gray-500 text-justify"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
                dolores. Pariatur beatae harum eaque consequatur!
              </motion.p>
            </motion.div>

            <motion.div
              variants={list}
              className="contact-way pt-5 *:flex *:gap-10 *:py-2 relative"
            >
              <div className="h-auto items-center  ">
                <FaPhone />
                <div>
                  <p>095-768-974</p>
                  <p>015-768-974</p>
                </div>
              </div>
              <div>
                <MdEmail />
                <p>
                  <u>chhinchhairong23@gmail.com</u>
                </p>
              </div>
              <div>
                <FaLocationPin />
                <p>Phnom Penh, Cambodia</p>
              </div>
            </motion.div>

            <motion.img
              whileInView={{ y: ["0%", "10%", "0%"] }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-60 absolute top-36 left-[380px] drop-shadow-2xl shadow-black"
              src={Satellite}
              alt="Satellite"
            />
          </motion.div>
          <motion.div variants={parentVariants} className="col w-3/5 p-10 ">
            <div className="frm w-full flex flex-wrap 2 ">
              <div className="flex w-full gap-6">
                <div className="w-full rounded-md">
                  <label className="text-gray-400" htmlFor="forName">
                    Name
                  </label>
                  <input
                    className="w-full rounded-md text-gray-800"
                    type="text"
                    name="fortName"
                  />
                </div>
                <div className="w-full rounded-md">
                  <label className="text-gray-400" htmlFor="forSubject">
                    Subject
                  </label>
                  <input
                    className="w-full rounded-md text-gray-800"
                    type="text"
                    name="forSubject"
                  />
                </div>
              </div>
              <div className="w-full rounded-md">
                <label className="text-gray-400" htmlFor="forEmail">
                  Email
                </label>
                <input
                  className="w-full rounded-md text-gray-800"
                  type="email"
                  name="forEmail"
                />
              </div>
              <div className="w-full rounded-md">
                <label className="text-gray-400" htmlFor="forEmail">
                  Email
                </label>
                <input
                  className="w-full rounded-md text-gray-800"
                  type="email"
                  name="forEmail"
                  required
                />
              </div>
              <div className="w-full rounded-md">
                <label className="block" htmlFor="forMessage">
                  Message
                </label>
                <textarea
                  className="w-full rounded-md text-gray-800"
                  name="forMessage"
                  required
                ></textarea>
              </div>
              <button className="w-full rounded-md bg-teal-500 py-3 mt-4">
                Submit
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
});

export default Contact;
