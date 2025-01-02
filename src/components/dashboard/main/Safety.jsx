import * as React from "react";
import { IoFingerPrintOutline } from "react-icons/io5";

const Safety = () => {
  return (
    <div className="w-1/4 pr-5 pb-5">
      <div className="bg-white h-[21.5625rem] px-[30px] pt-[36.5px] pb-[23px] rounded-3xl">
        <div className="w-full h-full flex flex-col justify-between">
          <div>
            <IoFingerPrintOutline className="text-[80px] text-custom-purple mb-[24.5px]" />
            <div className="space-y-[17px]">
              <h3 className="max-w-64 font-bold text-2xl text-custom-blue tracking-negative-2">
                Control card security in-app with a tap
              </h3>
              <p className="font-medium text-sm text-custom-gray tracking-negative-2">
                Discover our cards benefits, with one tap.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="bg-custom-purple w-full py-[11px] rounded-2xl font-bold text-sm text-white tracking-negative-2 active:bg-custom-1A244B hover:bg-custom-blue transition duration-300 ease-in-out"
          >
            Cards
          </button>
        </div>
      </div>
    </div>
  );
};

export default Safety;
