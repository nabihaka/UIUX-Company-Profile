import * as React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import ButtonAction from "../general/ButtonAction";
import DescSection from "../general/DescSection";
import TitleSection from "../general/TitleSection";
import ViolaManisa from "@/assets/svg/viola_manisa.svg";
import CaseStudiesImg1 from "@/assets/svg/case_studies_img1.svg";

const CaseStudies = () => {
  return (
    <div className="pt-24">
      <div className="w-[1140px] mx-auto space-y-12">
        <div className="w-full space-y-1">
          <TitleSection title="Case Studies" />
          <div className="flex justify-between items-end">
            <DescSection text="Here's what we've been up to recently" />
            <ButtonAction text="View all" />
          </div>
        </div>
        <div
          className="w-[1140px] h-[381.2px] border border-custom-E5EAF4 pr-12 flex justify-between items-center rounded-2xl shadow-xl relative"
          style={{ boxShadow: "0 10px 35px rgba(0, 0, 0, 0.03)" }}
        >
          <button
            type="button"
            className="bg-custom-purple w-14 h-14 rounded-full flex absolute -left-7 top-40 hover:bg-custom-blue active:bg-custom-1A244B transition duration-200 ease-in-out"
          >
            <FaArrowLeft className="mx-auto my-auto text-white" />
          </button>
          <button
            type="button"
            className="bg-custom-purple w-14 h-14 rounded-full flex absolute -right-7 top-40 hover:bg-custom-blue active:bg-custom-1A244B transition duration-200 ease-in-out"
          >
            <FaArrowRight className="mx-auto my-auto text-white" />
          </button>
          <img src={CaseStudiesImg1} className="object-cover" />
          <div className="w-full h-full pl-8 py-8 flex flex-col justify-between">
            <div>
              <div className="bg-custom-purple/20 w-max px-4 py-1 rounded-3xl mb-4">
                <span className="uppercase font-semibold text-base text-custom-purple tracking-negative-2">
                  featured
                </span>
              </div>
              <h2 className="capitalize font-semibold text-4xl text-custom-blue tracking-negative-2 mb-5">
                cheap airline ticket great ways to save
              </h2>
              <p className="font-light text-lg text-custom-gray tracking-negative-2">
                In this digital generation where information can be easily
                obtained within seconds, business cards ...
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <img src={ViolaManisa} className="object-cover" />
                <div>
                  <h4 className="capitalize font-medium text-base text-custom-blue tracking-negative-2">
                    viola manisa
                  </h4>
                  <div className="flex gap-1 items-center">
                    <div className="w-4 h-4 bg-green-100 flex justify-center items-center rounded-full">
                      <IoIosCheckmark className="text-green-500 text-xl" />
                    </div>
                    <em className="font-light text-sm text-gray-500 tracking-negative-2">
                      Verified writer
                    </em>
                  </div>
                </div>
              </div>
              <span className="capitalize font-normal text-base text-custom-gray">
                02 may 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
