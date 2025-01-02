import * as React from "react";
import { FaArrowRight } from "react-icons/fa";

const ButtonAction = ({ text }) => {
  return (
    <button className="px-[22px] h-max py-2 flex gap-2 items-center border-2 border-custom-purple font-semibold text-base text-custom-purple tracking-negative-2 rounded-lg group hover:bg-custom-purple hover:text-white transition duration-200 ease-in-out">
      {text}
      <FaArrowRight className="text-sm text-custom-purple group-hover:text-white transition duration-200 easae-in-out" />
    </button>
  );
};

export default ButtonAction;
