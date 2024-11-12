import * as React from "react";
import DirectboxIcon from "@/assets/directbox_receive.svg";
import HorizonLogo from "@/assets/horizon_logo.svg";

const EmailVerificationPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center py-9">
      <div className="bg-white px-6 py-6 w-[458px] border-2 rounded-2xl">
        <div className="w-full flex flex-col justify-between items-center space-y-12">
          <div className="w-full flex flex-row justify-start items-center">
            <h2 className="font-bold text-4xl text-custom-blue tracking-negative-2">
              Successfully Register
            </h2>
          </div>
          <img src={DirectboxIcon} />
          <div className="w-full flex flex-row justify-start items-center">
            <p className="text-base text-custom-gray font-normal tracking-negative-2 text-justify">
              To start your account registration, please check your email inbox
              and confirm your email address to activate your account
            </p>
          </div>
          <img src={HorizonLogo} />
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
