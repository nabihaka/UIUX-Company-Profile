import * as React from "react";
import Project1 from "@/assets/svg/success_project1.svg";
import Project2 from "@/assets/svg/success_project2.svg";
import Project3 from "@/assets/svg/success_project3.svg";

const ServicesSection = () => {
  return (
    <section id="services" className="pt-[110px]">
      <div className="flex justify-center">
        <div className="lg:w-[958px] xl:w-[1152px] flex flex-col items-center space-y-10">
          <div className="lg:max-w-[500px] xl:max-w-xl flex flex-col items-center">
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
              <img src={Project1} className="w-full object-cover" />
              <div className="bg-gradient-to-b from-black/5 to-black/80 w-full px-10 pt-[3.5625rem] pb-6 absolute bottom-0 rounded-3xl">
                <div className="w-full flex justify-between items-center">
                  <div className="lg:w-[57%] xl:w-[60%] flex flex-col justify-center space-y-4">
                    <h3 className="capitalize font-bold lg:text-[27px] xl:text-[2rem] text-white">
                      website design
                    </h3>
                    <p className="font-normal lg:text-sm xl:text-base text-justify text-custom-D1D4DC">
                      We can design the look of the website according to your
                      needs
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
                <img src={Project2} className="w-full object-cover" />
                <div className="w-full pl-5 lg:pr-[70px] xl:pr-[120px] pb-5 absolute bottom-0">
                  <div className="flex flex-col items-start space-y-3">
                    <h3 className="capitalize font-bold lg:text-[27px] xl:text-[2rem] text-white">
                      landing page design
                    </h3>
                    <span className="font-normal lg:text-sm xl:text-base text-justify text-custom-D1D4DC">
                      Landing Page is used to display business information in
                      one page
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-full">
                <img src={Project3} className="w-full object-cover" />
                <div className="w-full pl-5 lg:pr-[70px] xl:pr-[120px] pb-5 absolute bottom-0">
                  <div className="flex flex-col items-start space-y-3">
                    <h3 className="font-bold lg:text-[27px] xl:text-[2rem] text-white">
                      Mobile
                      <span className="text-black">
                        <span className="lg:text-white xl:text-black"></span>{" "}
                        Design
                      </span>
                    </h3>
                    <span className="font-normal lg:text-sm xl:text-base text-justify text-custom-D1D4DC">
                      We can create a mobile application design that can be
                      tailored to your business needs
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
      </div>
    </section>
  );
};

export default ServicesSection;
