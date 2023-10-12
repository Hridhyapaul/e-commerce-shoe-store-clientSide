import React from "react";
import { BiArrowBack } from "react-icons/bi";

const NextArrow = ({onClick, isLastSlide }) => {
  const arrowClasses = isLastSlide ? "bg-slate-500" : "bg-slate-800";
  return (
    <div className="absolute md:-top-[75px] right-0 -top-[55px]" onClick={onClick}>
      <div className={`w-[30px] md:w-[50px] h-[30px] md:h-[50px] rounded-full z-10 flex items-center justify-center cursor-pointer hover:opacity-90 ${arrowClasses}`}>
        <BiArrowBack className="text-white rotate-180 text-sm md:text-lg"></BiArrowBack>
      </div>
    </div>
  );
};

export default NextArrow;
