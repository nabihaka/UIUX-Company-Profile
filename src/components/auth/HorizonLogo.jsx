import * as React from "react";
import LogoHorizon from "@/assets/svg/horizon_logo.svg";

const HorizonLogo = () => {
  return (
    <div className="flex flex-row justify-center items-center h-[1.625rem] mt-6">
      <img src={LogoHorizon} />
    </div>
  );
};

export default HorizonLogo;
