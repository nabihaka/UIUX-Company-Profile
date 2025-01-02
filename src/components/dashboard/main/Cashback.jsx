import * as React from "react";
import { MdAccessTime, MdFastfood } from "react-icons/md";
import StarbucksBg from "@/assets/svg/starbucks_img.svg";
import StarbucksLogo from "@/assets/svg/starbucks_logo.svg";

const Cashback = () => {
  return (
    <div className="w-1/4 pr-5 pb-5">
      <div className="bg-white h-[21.5625rem] px-5 pt-[20px] pb-[33px] rounded-3xl">
        <div className="h-full flex flex-col justify-between">
          <div className="h-[172px] relative">
            <img src={StarbucksBg} className="z-0" />
            <div className="bg-gradient-to-t from-custom-111C44/80 to-transparent w-full h-[172px] rounded-2xl absolute top-0"></div>
            <img src={StarbucksLogo} className="absolute left-3 -bottom-6" />
            <div className="bg-gradient-to-br from-white/45 to-transparent backdrop-blur-md p-[9px] rounded-xl absolute right-3 top-3">
              <MdAccessTime className="text-xl text-white" />
            </div>
          </div>
          <div className="space-y-[6px]">
            <h3 className="capitalize font-bold text-2xl text-custom-blue tracking-negative-2">
              starbucks
            </h3>
            <div className="flex gap-2">
              <MdFastfood className="text-2xl text-custom-gray" />
              <p className="font-medium text-lg text-custom-gray tracking-negative-2">
                10% cashback & off
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashback;
