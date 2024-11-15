import React from "react";
import { FaGithub, FaTelegram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = ({ refs }) => {
  if (refs?.current) {
    refs.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="row w-full relative border-t-2 mt-20">
      <div className="row w-11/12 m-auto py-5 flex justify-between *:flex-1 ">
        <div className="col ">
          <button
            onClick={() => scrollToSection(refs.home)}
            className="text-white text-3xl font-bold"
          >
            <span className="text-teal-400">.CHHIN </span>CHHAIRONG
          </button>
        </div>
        <div className="col text-xl text-white font-mono h-auto items-center text-center">
          <p>
            Images designed by{" "}
            <a href="https://www.freepik.com" target="_blank">
              Freepik
            </a>
            .
          </p>
        </div>
        <div className="col flex  gap-6 justify-end text-3xl text-white hover:*:text-gray-900 transition-all *:duration-500 hover:*:text-4xl ease-in-out">
          <MdEmail />
          <FaTelegram />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
