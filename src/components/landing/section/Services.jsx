import * as React from "react";
import Project1 from "@/assets/success_project1.svg";
import Project2 from "@/assets/success_project2.svg";
import Project3 from "@/assets/success_project3.svg";

const ServicesSection = () => {
  return (
    <section id="services" className="pt-[110px]">
      <div className="flex flex-col items-center space-y-10 lg:mx-[10px] xl:mx-[54px] xl2:mx-[94px] xl3:mx-[134px] 2xl:mx-[182px]">
        <div className="w-[50%] flex flex-col items-center">
          <span className="capitalize font-normal lg:text-sm xl:text-base text-custom-A7ABB6 mb-3">
            project
          </span>
          <h2 className="capitalize font-bold lg:text-[35px] xl:text-[2.5rem] text-custom-blue mb-6">
            success project
          </h2>
          <p className="text-center font-normal lg:text-sm xl:text-base text-custom-A7ABB6">
            Our company developed many project to help every business partner
            improve their company process
          </p>
        </div>
        <div className="flex justify-center items-center space-x-6 w-full">
          <div className="w-full relative">
            <img src={Project1} className="w-full" />
            <div className="bg-gradient-to-b from-black/5 to-black/80 w-full px-10 pt-[3.5625rem] pb-6 absolute bottom-0 rounded-3xl">
              <div className="w-full flex justify-between items-center">
                <div className="w-[60%] flex flex-col justify-center space-y-4">
                  <h3 className="capitalize font-bold lg:text-[27px] xl:text-[2rem] text-white">
                    website design
                  </h3>
                  <p className="font-normal lg:text-sm xl:text-base text-custom-D1D4DC">
                    Lörem ipsum astrobel sar direlig. Kronde est konfoni med
                    kelig. Terabel pov astrobel sar
                  </p>
                </div>
                <button
                  type="button"
                  className="bg-transparent px-8 py-4 font-medium lg:text-sm xl:text-base text-white border border-white rounded-full hover:bg-white/50 hover:text-black hover:border-black transition duration-200 ease-in-out"
                >
                  Let's work
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-6">
            <div className="relative w-full h-full">
              <img src={Project2} className="w-full" />
              <div className="w-full pl-5 lg:pr-[94px] xl:pr-[120px] pb-5 absolute bottom-0">
                <div className="flex flex-col items-start space-y-3">
                  <h3 className="capitalize font-bold lg:text-[27px] xl:text-[2rem] text-white">
                    website design
                  </h3>
                  <span className="font-normal lg:text-sm xl:text-base text-custom-D1D4DC">
                    Lörem ipsum astrobel sar direlig. Kronde est konfoni med
                    kelig. Terabel pov astrobel sar
                  </span>
                </div>
              </div>
            </div>
            <div className="relative w-full h-full">
              <img src={Project3} className="w-full" />
              <div className="w-full pl-5 lg:pr-[94px] xl:pr-[120px] pb-5 absolute bottom-0">
                <div className="flex flex-col items-start space-y-3">
                  <h3 className="font-bold lg:text-[27px] xl:text-[2rem] text-white">
                    Websit
                    <span className="text-black">
                      <span className="lg:text-white xl:text-black">e</span>{" "}
                      Design
                    </span>
                  </h3>
                  <span className="font-normal lg:text-sm xl:text-base text-custom-D1D4DC">
                    Lörem ipsum astrobel sar direlig. Kronde est konfoni med
                    kelig. Terabel pov astrobel sar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="bg-custom-purple px-8 py-4 capitalize font-medium lg:text-sm xl:text-base text-white rounded-full shadow-xl hover:bg-custom-blue transition duration-200 ease-in-out"
          style={{
            boxShadow: "0 1.25rem 1.875rem rgba(0, 0, 0, 0.1)",
          }}
        >
          view our project
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
