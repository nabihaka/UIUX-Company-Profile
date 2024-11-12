import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ProvinceCityInput = ({ title, forId, onChange, placeHolder, option }) => {
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
          className="bg-white font-normal text-base tracking-negative-2 border appearance-none border-custom-outline-gray pl-6 pr-10 py-[1.125rem] rounded-2xl mt-[0.8125rem] mb-3.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-custom-purple"
          onChange={onChange}
        >
          <option disabled selected className="text-custom-gray">
            {placeHolder}
          </option>
          {option}
        </select>
      </div>
      <div className="scale-125 absolute top-[60%] inset-y-0 end-4 flex items-center h-0 z-20 text-custom-gray">
        <IoIosArrowDown aria-hidden="true" />
      </div>
    </div>
  );
};

export default ProvinceCityInput;
