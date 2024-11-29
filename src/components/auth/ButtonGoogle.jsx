import * as React from "react";
import GoogleLogo from "@/assets/svg/google_logo.svg";

const ButtonGoogle = ({ handleClick, isLoading }) => {
  return (
    <div className="flex flex-row items-center justify-center mt-[1.8125rem]">
      <button
        className="flex justify-center items-center bg-custom-light text-custom-blue font-medium text-base tracking-negative-2 w-full py-4 rounded-2xl active:bg-gray-200 hover:bg-gray-200 transition duration-200 ease-in-out
        "
        type="button"
        onClick={handleClick}
      >
        {isLoading ? (
          "Loading... "
        ) : (
          <div className="flex gap-2">
            <img className="" src={GoogleLogo} />
            Sign in with Google
          </div>
        )}
      </button>
    </div>
  );
};

export default ButtonGoogle;
