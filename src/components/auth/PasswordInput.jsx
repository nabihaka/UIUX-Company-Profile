import * as React from "react";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const PasswordInput = ({ forId, title, onChange }) => {
  const [visible, setVisible] = useState(false);
  const visibleClick = () => {
    setVisible(!visible);
  };

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
        <input
          type={visible ? "text" : "password"}
          id={forId}
          className="bg-white placeholder-custom-gray font-normal text-base tracking-negative-2 border border-custom-outline-gray pl-6 pr-10 py-[1.125rem] rounded-2xl mt-[0.8125rem] mb-3.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-custom-purple"
          placeholder="Min. 3 characters"
          onChange={onChange}
        />
      </div>
      <div
        className="scale-125 absolute top-[60%] inset-y-0 end-4 flex items-center h-0 z-20 cursor-pointer text-custom-gray hover:text-custom-purple"
        onClick={visibleClick}
      >
        {visible ? <IoEyeOffOutline /> : <IoEyeOutline />}
      </div>
    </div>
  );
};

export default PasswordInput;
