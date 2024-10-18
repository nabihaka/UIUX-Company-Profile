import * as React from "react";
import LogoHorizon from "@/assets/horizon_logo.svg";

const HorizonLogo = () => {
  return (
    <div className="flex flex-row justify-center items-center h-[26px] mt-6">
      <img src={LogoHorizon} />
    </div>
  );
};

export default HorizonLogo;
