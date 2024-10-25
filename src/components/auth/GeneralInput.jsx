import * as React from "react";

const GeneralInput = ({ forId, title, type, placeHolder, onChange }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={forId}
        className="text-custom-blue font-medium text-base tracking-negative-2"
      >
        {title}
        <span className="text-custom-purple">*</span>
      </label>
      <input
        type={type}
        id={forId}
        className="bg-white placeholder-custom-gray font-normal text-base border tracking-negative-2 border-custom-outline-gray pl-6 pr-10 py-[18px] rounded-2xl mt-[13px] mb-[14px] focus:bg-white focus:outline-none focus:ring-1 focus:ring-custom-purple"
        placeholder={placeHolder}
        onChange={onChange}
      />
    </div>
  );
};

export default GeneralInput;
