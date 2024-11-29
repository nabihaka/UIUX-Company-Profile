import * as React from "react";

const ButtonSubmit = ({ title, handleSubmit, isLoading, loadingImg }) => {
  return (
    <div className="flex flex-row justify-center items-center mb-3.5">
      <button
        className="w-full py-5 flex justify-center items-center rounded-2xl bg-custom-purple font-bold text-base text-white active:bg-custom-blue hover:bg-custom-blue transition duration-300 ease-in-out"
        type="submit"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex gap-2 items-center">
            <img src={loadingImg} className="h-6 animate-spin" />
            Loading...
          </div>
        ) : (
          title
        )}
      </button>
    </div>
  );
};

export default ButtonSubmit;
