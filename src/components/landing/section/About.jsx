import * as React from "react";
import Vector590 from "@/assets/vector_590.svg";
import Photo6 from "@/assets/photo6.svg";
import Person1 from "@/assets/person1.svg";
import Person2 from "@/assets/person2.svg";
import Person3 from "@/assets/person3.svg";
import Person4 from "@/assets/person4.svg";
import BorderPerson1 from "@/assets/vector_person1.svg";

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
    <section id="about" className="flex flex-col pt-20">
      <div className="flex space-x-5 lg:mx-[10px] xl:mx-[54px] xl2:mx-[94px] xl3:mx-[134px] 2xl:mx-[182px] mb-[7.5rem]">
        <div className="lg:h-[273px] xl:h-[301px] py-[2.9375rem] bg-custom-purple relative flex rounded-3xl">
          <div className="absolute -bottom-4 w-full h-[60%] bg-gradient-to-b from-white/20 to-transparent rounded-t-full"></div>
          <div className="lg:w-[126px] xl:w-[10.9375rem] ml-6 mr-[10.625rem] flex flex-col justify-center items-start">
            <span className="capitalize font-normal lg:text-xs xl:text-base text-white mb-3">
              let's development
            </span>
            <span className="capitalize font-bold lg:text-[30px] xl:text-[2.5rem] text-white">
              work
            </span>
            <span className="capitalize font-bold lg:text-[30px] xl:text-[2.5rem] text-white -mt-2 mb-4">
              with us
            </span>
            <span className="font-normal lg:text-xs xl:text-base text-white lg:mb-0 xl:mb-3">
              Together we build your Product
            </span>
          </div>
          <img
            src={BorderPerson1}
            className="absolute lg:scale-90 xl:scale-100 lg:-bottom-[15px] lg:-right-[8.4px] xl:right-0 xl:bottom-0 rounded-br-3xl"
          />
          <img
            src={Person1}
            className="absolute lg:scale-90 xl:scale-100 lg:-bottom-4 lg:-right-[9.1px] xl:right-0 xl:bottom-0 rounded-br-3xl"
          />
        </div>
        <div className="bg-custom-F8F8F8 w-full px-10 py-12 rounded-3xl">
          <div className="w-full h-full flex justify-between items-center">
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
                Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
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
      <div className="flex justify-between items-center lg:mx-[10px] xl:mx-[54px] xl2:mx-[94px] xl3:mx-[134px] 2xl:mx-[182px] mb-[7.5rem]">
        <div className="flex justify-start items-center">
          <div className="flex flex-col lg:w-[75%] xl:w-[70%]">
            <span className="capitalize font-normal lg:text-sm xl:text-base text-custom-A7ABB6 mb-4">
              why choose us
            </span>
            <span className="font-bold lg:text-[35px] xl:text-[2.5rem] text-custom-blue mb-6">
              Fast Work is our focus
            </span>
            <p className="font-normal lg:text-sm xl:text-base text-custom-A7ABB6">
              Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
              Terabel pov astrobel sar direlig.
            </p>
          </div>
        </div>
        <div className="w-[34.875rem] py-[1.125rem] pl-[1.6875rem] pr-[3.0625rem]">
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
                <img src={Vector590} />
                <div className="h-full absolute top-0 lg:left-[150px] xl:left-[10.3125rem] border border-custom-purple"></div>
                <div
                  className="bg-custom-purple flex items-center space-x-1 absolute lg:top-5 xl:top-8 px-[0.9375rem] py-3 rounded-full shadow-xl"
                  style={{
                    boxShadow: "0 1.25rem 1.875rem rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="bg-custom-775FFC flex justify-center items-center px-[0.625rem] py-1 rounded-full">
                    <span className="font-normal text-xs text-white">100%</span>
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
                  className="bg-white flex items-center space-x-8 px-[0.9375rem] py-3 absolute lg:top-[88px] xl:top-[6.5rem] lg:left-20 xl:left-28 rounded-full shadow-xl"
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
                  className="bg-white flex items-center space-x-2 px-[0.9375rem] py-3 absolute lg:top-[156px] xl:top-[175px] right-0 rounded-full shadow-xl"
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
      <div className="xl:mx-[54px] xl2:mx-[94px] xl3:mx-[134px] 2xl:mx-[182px] mb-[20px] flex justify-between items-center">
        <div className="bg-transparent lg:w-[545px] xl:w-[35.625rem] h-[28.1875rem] relative">
          <div className="bg-custom-F2F2F2 lg:w-[322px] lg:h-[322px] xl:w-[20.75rem] xl:h-[20.75rem] absolute right-0 rounded-full">
            <img
              src={Person2}
              className="lg:w-[322px] lg:h-[322px] xl:w-[20.75rem] xl:h-[20.75rem] rounded-full"
            />
          </div>
          <div className="bg-custom-F2F2F2 lg:w-[208px] lg:h-[208px] xl:w-[13.625rem] xl:h-[13.625rem] rounded-full absolute left-0 bottom-24">
            <img
              src={Person3}
              className="rounded-full lg:w-[208px] lg:h-[208px] xl:w-[13.625rem] xl:h-[13.625rem]"
            />
          </div>
          <div className="bg-custom-purple lg:w-[158px] lg:h-[158px] xl:w-[11.125rem] xl:h-[11.125rem] flex justify-center items-center border-4 border-white absolute left-44 bottom-[5.625rem] rounded-full">
            <div className="flex flex-col items-center px-[0.125rem] space-y-[0.3125rem]">
              <span className="font-bold lg:text-3xl xl:text-4xl text-white">
                200+
              </span>
              <span className="capitalize font-normal lg:text-base xl:text-lg text-white">
                client happy
              </span>
            </div>
          </div>
          <div className="bg-custom-F2F2F2 lg:w-[110px] lg:h-[110px] xl:w-[7.5rem] xl:h-[7.5rem] rounded-full absolute lg:left-[199px] lg:bottom-2 xl:left-[203.5px] xl:bottom-0">
            <img
              src={Person4}
              className="lg:w-[110px] lg:h-[110px] xl:w-[7.5rem] xl:h-[7.5rem] rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start w-[40%]">
          <span className="capitalize font-normal lg:text-sm xl:text-base text-custom-A7ABB6 mb-4">
            who we are
          </span>
          <span className="font-bold lg:text-[35px] xl:text-[2.5rem] text-custom-blue mb-6">
            Trusted 100% by many people Gradually
          </span>
          <div className="mr-10 mb-8">
            <span className="font-normal lg:text-sm xl:text-base text-custom-A7ABB6">
              Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
              Terabel pov astrobel sar direlig.
            </span>
          </div>
          <button
            type="button"
            className="bg-custom-purple w-max px-8 py-4 font-medium text-base text-white rounded-full shadow-xl hover:bg-custom-blue transition duration-200 ease-in-out"
            style={{
              boxShadow: "0 1.25rem 1.875rem rgba(0, 0, 0, 0.1)",
            }}
          >
            Let's work
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
