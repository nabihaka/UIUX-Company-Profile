import * as React from "react";

const ButtonSubmit = ({ title, handleSubmit }) => {
  return (
    <div className="flex flex-row justify-center items-center mb-3.5">
      <button
        className="w-full py-5 border rounded-2xl bg-custom-purple font-bold text-base text-white hover:bg-custom-blue transition duration-300 ease-in-out"
        type="submit"
        onClick={handleSubmit}
      >
        {title}
      </button>
    </div>
  );
};

export default ButtonSubmit;
