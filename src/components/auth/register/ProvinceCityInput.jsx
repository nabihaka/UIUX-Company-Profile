import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ProvinceCityInput = ({
  title,
  forId,
  onChange,
  onCLick,
  placeHolder,
  option,
  toggleAction,
}) => {
  return (
    <div className="relative">
      <div className="flex flex-col">
        <label
          htmlFor={forId}
          className="text-custom-blue font-medium text-base tracking-negative-2"
        >
          {title}
          <span className="text-custom-purple">*</span>
        </label>
        <select
          id={forId}
          className="bg-white font-normal text-base tracking-negative-2 border appearance-none border-custom-outline-gray pl-6 pr-10 py-[18px] rounded-2xl mt-[13px] mb-[14px] focus:bg-white focus:outline-none focus:ring-1 focus:ring-custom-purple"
          onChange={onChange}
          onClick={onCLick}
        >
          <option disabled selected className="text-custom-gray">
            {placeHolder}
          </option>
          {option}
        </select>
      </div>
      <div
        className="scale-125 absolute top-[60%] inset-y-0 end-4 flex items-center h-0 z-20 cursor-pointer text-custom-gray hover:text-custom-purple"
        onClick={onCLick}
      >
        {toggleAction ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
    </div>
  );
};

export default ProvinceCityInput;
