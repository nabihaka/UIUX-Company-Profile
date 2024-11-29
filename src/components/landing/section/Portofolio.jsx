import * as React from "react";
import Project4 from "@/assets/svg/success_project4.svg";
import ContactImg from "@/assets/png/contact_image.png";

const PortofolioSection = () => {
  return (
    <section id="portofolio" className="pt-[120px]">
      <div className="flex justify-center">
        <div className="lg:w-[958px] xl:w-[1152px] relative flex justify-between mb-10">
          <div className="w-[50%] flex flex-col">
            <span className="capitalize font-normal lg:text-sm xl:text-base text-custom-A7ABB6 mb-4">
              inspiration
            </span>
            <h2 className="font-bold lg:text-[35px] xl:text-[2.5rem] text-custom-blue mb-6">
              UI Design Exploration
            </h2>
            <p className="font-normal lg:text-sm xl:text-base text-custom-A7ABB6">
              Bringing the latest designs to support your business.{" "}
            </p>
          </div>
          <button
            type="button"
            className="bg-custom-purple px-8 py-4 capitalize font-medium lg:text-sm xl:text-base text-white rounded-full shadow-xl absolute bottom-0 right-0 hover:bg-custom-blue transition duration-200 ease-in-out"
            style={{
              boxShadow: "0 1.25rem 1.875rem rgba(0, 0, 0, 0.1)",
            }}
          >
            view our project
          </button>
        </div>
      </div>
      <div>
        <img src={Project4} className="w-full" />
      </div>
    </section>
  );
};

export default PortofolioSection;
