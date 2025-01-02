import * as React from "react";

export const ButtonSubmit = ({ text }) => {
  return (
    <button
      type="submit"
      className="bg-custom-purple px-6 py-3 font-medium text-base text-white tracking-negative-2 rounded-xl hover:bg-custom-blue active:bg-custom-1A244B transition duration-200 ease-in-out"
    >
      {text}
    </button>
  );
};
