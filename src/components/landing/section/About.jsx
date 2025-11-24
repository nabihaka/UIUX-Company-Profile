import * as React from "react";
import Vector590 from "@/assets/svg/vector_590.svg";
import Photo6 from "@/assets/svg/photo6.svg";
import Person1 from "@/assets/svg/person1.svg";
import Person2 from "@/assets/svg/person2.svg";
import Person3 from "@/assets/svg/person3.svg";
import Person4 from "@/assets/svg/person4.svg";
import BorderPerson1 from "@/assets/svg/vector_person1.svg";

const AboutSection = () => {
  const TIMELINE_NUMBERS = [
    { id: 1, name: "s10" },
    { id: 2, name: "m11" },
    { id: 3, name: "t12" },
    { id: 4, name: "w13" },
    { id: 5, name: "t14" },
    { id: 6, name: "f15" },
    { id: 7, name: "s16" },
    { id: 8, name: "s17" },
    { id: 9, name: "m18" },
    { id: 10, name: "t19" },
    { id: 11, name: "w20" },
    { id: 12, name: "t21" },
  ];

  return (
    <section id="about" className="pt-20">
      <div className="w-max mx-auto flex flex-col space-y-[7.5rem] items-center">
        <div className="flex items-center space-x-5">
          <div className="lg:h-[245px] xl:h-[300px] py-[2.9375rem] bg-custom-purple relative flex rounded-3xl">
            <div className="absolute lg:-bottom-[56px] xl:-bottom-11 w-full lg:h-[76%] xl:h-[70%] bg-gradient-to-b from-white/20 to-transparent rounded-t-full"></div>
            <div className="lg:w-[126px] xl:w-[10.9375rem] ml-6 lg:mr-[140px] xl:mr-[10.625rem] flex flex-col justify-center items-start">
              <span className="capitalize font-light lg:text-xs xl:text-base text-white mb-3">
                let's development
              </span>
              <span className="capitalize font-bold lg:text-[30px] xl:text-[2.5rem] text-white">
                work
              </span>
              <span className="capitalize font-bold lg:text-[30px] xl:text-[2.5rem] text-white -mt-2 mb-4">
                with us
              </span>
              <span className="font-light lg:text-xs xl:text-base text-white lg:mb-0 xl:mb-3">
                Together we build your Product
              </span>
            </div>
            <img
              src={BorderPerson1}
              className="absolute lg:scale-[78%] xl:scale-100 lg:-bottom-[29.1px] lg:-right-[18.8px] xl:right-0 xl:bottom-0 rounded-br-3xl"
            />
            <img
              src={Person1}
              className="absolute lg:scale-[78%] xl:scale-100 lg:-bottom-[34.5px] lg:-right-[20px] xl:right-0 xl:bottom-0 lg:rounded-br-[32px] xl:rounded-br-3xl"
            />
          </div>
          <div className="bg-custom-F8F8F8 w-full px-10 py-12 rounded-3xl">
            <div className="w-full h-full flex space-x-[47px] items-center">
              <div className="h-full lg:w-[124px] xl:w-[164px] flex flex-col justify-center space-y-5">
                <div className="flex flex-col">
                  <span className="capitalize font-bold lg:text-[30px] xl:text-[2.5rem] text-custom-blue">
                    trusted
                  </span>
                  <span className="capitalize font-bold lg:text-[30px] xl:text-[2.5rem] text-custom-blue -mt-2">
                    partner
                  </span>
                </div>
                <span className="font-normal text-justify lg:text-xs xl:text-base text-custom-A7ABB6">
                  We have trusted partners to support our projects
                </span>
              </div>
              <div className="flex items-center space-x-10">
                <div className="flex flex-col px-[0.3125rem] items-center space-y-4">
                  <span className="font-bold lg:text-[30px] xl:text-[2.5rem] text-custom-purple">
                    200+
                  </span>
                  <span className="capitalize font-normal lg:text-xs xl:text-base text-custom-A7ABB6">
                    compile project
                  </span>
                </div>
                <div className="flex flex-col px-[0.3125rem] items-center space-y-4">
                  <span className="font-bold lg:text-[30px] xl:text-[2.5rem] text-custom-purple">
                    1,230
                  </span>
                  <span className="capitalize font-normal lg:text-xs xl:text-base text-custom-A7ABB6">
                    client trusted
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="capitalize px-8 py-4 bg-custom-purple font-medium lg:text-xs xl:text-base text-white rounded-full shadow-xl hover:bg-custom-blue transition duration-200 ease-in-out"
                style={{ boxShadow: "0 1.25rem 1.875rem rgba(0, 0, 0, 0.1)" }}
              >
                let's work
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[958px] xl:w-[1152px] flex justify-between items-center">
          <div className="flex justify-start items-center">
            <div className="flex flex-col lg:max-w-[340px] xl:max-w-md">
              <span className="capitalize font-normal lg:text-sm xl:text-base text-custom-A7ABB6 mb-4">
                why choose us
              </span>
              <span className="font-bold lg:text-[30px] xl:text-[2.5rem] text-custom-blue mb-6">
                Fast Work is our focus
              </span>
              <p className="font-normal lg:text-sm xl:text-base text-justify text-custom-A7ABB6">
                We always work quickly on projects, we know you like fast
                progress, if it can be fast why not?
              </p>
            </div>
          </div>
          <div className="py-[1.125rem] pl-[1.6875rem] pr-[3.0625rem]">
            <div className="flex flex-col space-y-6">
              <div className="flex justify-between items-center">
                <span className="capitalize font-medium lg:text-xl xl:text-2xl text-custom-blue">
                  timeline
                </span>
                <div className="flex items-center space-x-5">
                  <div className="flex items-center space-x-1">
                    <div className="bg-custom-775FFC w-3 h-3 rounded-full"></div>
                    <span className="capitalize font-normal text-xs">
                      done process
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="bg-transparent border border-custom-A7ABB6 w-3 h-3 rounded-full"></div>
                    <span className="capitalize font-normal text-xs">
                      on progress
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="w-full flex justify-between items-center px-3">
                  {TIMELINE_NUMBERS.map((number) => (
                    <span
                      key={number.id}
                      className="uppercase font-normal text-xs text-custom-E7E7E7"
                    >
                      {number.name}
                    </span>
                  ))}
                </div>
                <div className="w-full relative">
                  <img src={Vector590} className="object-cover" />
                  <div className="h-full absolute top-0 lg:left-[180px] border border-custom-purple"></div>
                  <div
                    className="bg-custom-purple flex items-center space-x-1 absolute lg:top-8 px-[0.9375rem] py-3 rounded-full shadow-xl"
                    style={{
                      boxShadow: "0 1.25rem 1.875rem rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="bg-custom-775FFC flex justify-center items-center px-[0.625rem] py-1 rounded-full">
                      <span className="font-normal text-xs text-white">
                        100%
                      </span>
                    </div>
                    <span className="capitalize font-light text-xs text-white">
                      design system
                    </span>
                    <div className="flex items-center">
                      <img src={Photo6} className="object-cover" />
                      <img src={Photo6} className="object-cover -ml-3" />
                    </div>
                  </div>
                  <div
                    className="bg-white flex items-center space-x-8 px-[0.9375rem] py-3 absolute lg:top-[6.5rem] xl:top-[6.5rem] lg:left-28 rounded-full shadow-xl"
                    style={{
                      boxShadow: "0 1.25rem 1.875rem rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <div className="bg-custom-775FFC/20 flex justify-center items-center px-[0.625rem] py-1 rounded-full">
                      <span className="font-normal text-xs text-custom-purple">
                        80%
                      </span>
                    </div>
                    <span className="capitalize font-light text-xs text-black">
                      wireframe
                    </span>
                    <div className="flex">
                      <img src={Photo6} className="object-cover" />
                      <img src={Photo6} className="object-cover -ml-3" />
                      <img src={Photo6} className="object-cover -ml-3" />
                    </div>
                  </div>
                  <div
                    className="bg-white flex items-center space-x-2 px-[0.9375rem] py-3 absolute lg:top-[175px] right-0 rounded-full shadow-xl"
                    style={{
                      boxShadow: "0 1.25rem 1.875rem rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <div className="bg-custom-775FFC/20 flex justify-center items-center px-[0.625rem] py-1 rounded-full">
                      <span className="font-normal text-xs text-custom-purple">
                        40%
                      </span>
                    </div>
                    <span className="capitalize font-light text-xs text-black">
                      UI design
                    </span>
                    <div className="flex">
                      <img src={Photo6} className="object-cover" />
                      <img src={Photo6} className="object-cover -ml-3" />
                      <img src={Photo6} className="object-cover -ml-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[958px] xl:w-[1152px] flex justify-between items-center mb-[20px]">
          <div className="bg-transparent lg:w-[505px] xl:w-[35.625rem] lg:h-[415px] xl:h-[28.1875rem] relative">
            <div className="bg-custom-F2F2F2 lg:w-[300px] lg:h-[300px] xl:w-[20.75rem] xl:h-[20.75rem] absolute right-0 top-0 rounded-full">
              <img
                src={Person2}
                className="lg:w-[300px] lg:h-[300px] xl:w-[20.75rem] xl:h-[20.75rem] rounded-full"
              />
            </div>
            <div className="bg-custom-F2F2F2 lg:w-[186px] lg:h-[186px] xl:w-[13.625rem] xl:h-[13.625rem] rounded-full absolute left-0 bottom-24">
              <img
                src={Person3}
                className="rounded-full lg:w-[186px] lg:h-[186px] xl:w-[13.625rem] xl:h-[13.625rem]"
              />
            </div>
            <div className="bg-custom-purple lg:w-[150px] lg:h-[150px] xl:w-[11.125rem] xl:h-[11.125rem] flex justify-center items-center border-4 border-white absolute lg:left-[150px] xl:left-44 bottom-[5.625rem] rounded-full">
              <div className="flex flex-col items-center px-[0.125rem] space-y-[0.3125rem]">
                <span className="font-bold lg:text-3xl xl:text-4xl text-white">
                  200+
                </span>
                <span className="capitalize font-normal lg:text-base xl:text-lg text-white">
                  client happy
                </span>
              </div>
            </div>
            <div className="bg-custom-F2F2F2 lg:w-[110px] lg:h-[110px] xl:w-[7.5rem] xl:h-[7.5rem] rounded-full absolute lg:left-[169px] xl:left-[203.5px] bottom-0">
              <img
                src={Person4}
                className="lg:w-[110px] lg:h-[110px] xl:w-[7.5rem] xl:h-[7.5rem] rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start lg:max-w-sm xl:max-w-[480px]">
            <span className="capitalize font-normal lg:text-sm xl:text-base text-custom-A7ABB6 mb-4">
              who we are
            </span>
            <span className="font-bold lg:text-[30px] xl:text-[2.5rem] text-custom-blue mb-6">
              Trusted 100% by many people Gradually
            </span>
            <div className="lg:mr-3 xl:mr-10 mb-8">
              <span className="font-normal lg:text-sm xl:text-base text-justify text-custom-A7ABB6">
                Many people have trusted our services and brought their business
                to the next level.
              </span>
            </div>
            <button
              type="button"
              className="bg-custom-purple w-max px-8 py-4 font-medium lg:text-sm xl:text-base text-white rounded-full shadow-xl hover:bg-custom-blue transition duration-200 ease-in-out"
              style={{
                boxShadow: "0 1.25rem 1.875rem rgba(0, 0, 0, 0.1)",
              }}
            >
              Let's work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
