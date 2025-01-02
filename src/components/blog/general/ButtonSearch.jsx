import * as React from "react";

const ButtonSearch = ({ text }) => {
  return (
    <button
      type="button"
      className="bg-custom-purple px-5 py-2 font-medium text-base text-white tracking-negative-2 rounded-lg hover:bg-custom-blue active:bg-custom-1A244B transition duration-200 ease-in-out"
    >
      {text}
    </button>
  );
};

export default ButtonSearch;
