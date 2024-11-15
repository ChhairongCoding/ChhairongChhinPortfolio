import React from "react";

const CardPortfolio = (props) => {
  const { name, description, img } = props;
  return (
    <article className="w-1/3 h-96 backdrop-blur-3xl  hover:scale-105 transition-all ease-in-out duration-200 hover:bg-slate-900 shadow-2xl relative ">
      <div>
        <img className="w-full object-cover h-52" src={img} alt="" />
      </div>
      <div className="text-center text-white font-mono h-auto overflow-hidden ">
        <h1 className="text-2xl py-4 font-bold">{name}</h1>
        <p className="px-5  text-justify">{description}</p>
      </div>
    </article>
  );
};

export default CardPortfolio;
