import * as React from "react";

const KeepLoggedIn = () => {
  return (
    <div className="flex justify-start items-center mb-[14px]">
      <input
        type="checkbox"
        id="keepLoggedIn"
        name="keepLoggedIn"
        className="accent-custom-purple h-[18px] w-[18px] font-normal border px-6 py-[18px] rounded-2xl mt-[13px] mb-[14px] mr-[11px]"
      />
      <label
        htmlFor="keepLoggedIn"
        className="text-custom-blue font-medium text-6 tracking-negative-2 hover:cursor-pointer"
      >
        Keep me logged in
      </label>
    </div>
  );
};

export default KeepLoggedIn;
