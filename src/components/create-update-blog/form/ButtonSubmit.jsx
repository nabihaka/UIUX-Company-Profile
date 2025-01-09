import * as React from "react";

export const ButtonSubmit = ({ text, isLoading, loadingImage, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="bg-custom-purple w-28 px-6 py-3 font-medium text-base text-white tracking-negative-2 rounded-xl hover:bg-custom-blue active:bg-custom-1A244B transition duration-200 ease-in-out"
    >
      {/* {text} */}
      {isLoading ? (
        <img src={loadingImage} className="h-6 mx-auto animate-spin" />
      ) : (
        text
      )}
    </button>
  );
};
