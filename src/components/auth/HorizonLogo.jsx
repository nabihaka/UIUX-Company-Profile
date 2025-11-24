import * as React from "react";
// import LogoHorizon from "@/assets/svg/horizon_logo.svg";
import LogoHorizon from "@/assets/png/horizonui_logo.png";

const HorizonLogo = () => {
  return (
    <div className="flex flex-row justify-center items-center h-[1.625rem] mt-7">
      <img src={LogoHorizon} className="h-10" />
    </div>
  );
};

export default HorizonLogo;
