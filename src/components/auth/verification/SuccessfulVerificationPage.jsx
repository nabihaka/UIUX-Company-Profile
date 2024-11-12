import * as React from "react";
import HorizonLogo from "@/assets/horizon_logo.svg";
import { FaCircleCheck } from "react-icons/fa6";

const SuccessfulVerificationPage = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center py-9">
      <div className="bg-white px-6 py-6 w-[458px] border-2 rounded-2xl">
        <div className="w-full flex flex-col justify-between items-center space-y-12">
          <div className="w-full flex flex-row justify-start items-center">
            <h2 className="font-bold text-4xl text-custom-blue tracking-negative-2">
              Successful Email Verification
            </h2>
          </div>
          <FaCircleCheck className="text-green-500 w-28 h-28" />
          <button
            type="button"
            onClick={handleClick}
            className="w-full py-5 border rounded-2xl bg-custom-purple font-bold text-base text-white hover:bg-custom-blue transition duration-300 ease-in-out"
          >
            Go to Sign In
          </button>
          <img src={HorizonLogo} />
        </div>
      </div>
    </div>
  );
};

export default SuccessfulVerificationPage;
