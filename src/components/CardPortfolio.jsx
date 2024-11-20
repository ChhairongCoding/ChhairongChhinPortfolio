import React from "react";

const CardPortfolio = (props) => {
  const { name, description, img } = props;
  return (
    <article className="w-1/3 h-auto backdrop-blur-3xl flex hover:scale-105 transition-all ease-in-out duration-200 hover:bg-slate-900 shadow-2xl relative flex-col">
      <div className="">
        <img className="w-full object-cover h-52" src={img} alt="" />
      </div>
      <div className="text-center h-44 text-white font-mono   overflow-y-scroll">
        <h1 className="text-2xl py-4 font-bold">{name}</h1>
        <p className="px-5  text-justify">{description}</p>
      </div>
      <div className=" w-full h-32 flex self-end   justify-center">
        <button className="w-3/6  h-2/6   rounded-lg  bg-purple-600 my-10 text-white font-mono shadow-lg">
          See Detail
        </button>
      </div>
    </article>
  );
};

export default CardPortfolio;
