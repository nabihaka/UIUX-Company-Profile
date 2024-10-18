import * as React from "react";

const ButtonSubmit = ({ title, handleSubmit }) => {
  return (
    <div className="flex flex-row justify-center items-center mb-[14px]">
      <button
        className="w-full py-5 border rounded-2xl bg-custom-purple font-bold text-white"
        type="submit"
        onClick={handleSubmit}
      >
        {title}
      </button>
    </div>
  );
};

export default ButtonSubmit;
