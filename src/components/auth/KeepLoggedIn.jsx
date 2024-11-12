import * as React from "react";

const KeepLoggedIn = () => {
  return (
    <div className="flex justify-start items-center mb-3.5 space-x-2">
      <input
        type="checkbox"
        id="keepLoggedIn"
        name="keepLoggedIn"
        className="accent-custom-purple h-[1.125rem] w-[1.125rem] font-normal border rounded-2xl mt-[0.8125rem] mb-3.5 "
      />
      <label
        htmlFor="keepLoggedIn"
        className="text-custom-blue font-medium text-base tracking-negative-2 hover:cursor-pointer"
      >
        Keep me logged in
      </label>
    </div>
  );
};

export default KeepLoggedIn;
