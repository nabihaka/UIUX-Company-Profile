import * as React from "react";
import GoogleLogo from "@/assets/google_logo.svg";

const ButtonGoogle = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-[29px]">
      <button
        className="gap-2 flex justify-center items-center bg-custom-light text-custom-blue font-medium text-base tracking-negative-2 w-full py-4 rounded-2xl"
        type="submit"
      >
        <img className="" src={GoogleLogo} />
        Sign in with Google
      </button>
    </div>
  );
};

export default ButtonGoogle;
