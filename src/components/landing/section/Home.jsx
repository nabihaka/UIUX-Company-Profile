import * as React from "react";
import { BsDot } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { FaArrowUp } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import MicrosoftLogo from "@/assets/svg/microsoft_logo.svg";
import GmeetLogo from "@/assets/svg/gmeet_logo.svg";
import ZoomLogo from "@/assets/svg/zoom_logo.svg";
import Vector585 from "@/assets/svg/vector_585.svg";
import Vector587 from "@/assets/svg/vector_587_left.svg";
import Vector588 from "@/assets/svg/vector_588_right.svg";
import Photo1 from "@/assets/svg/photo1.svg";
import Photo2 from "@/assets/svg/photo2.svg";
import Photo3 from "@/assets/svg/photo3.svg";
import Photo4 from "@/assets/svg/photo4.svg";
import Photo5 from "@/assets/svg/photo5.svg";

const HomeSection = () => {
  const ROLE_LISTS = [
    {
      id: 1,
      name: "UI/UX Design",
    },
    {
      id: 2,
      name: "Prototype",
    },
    {
      id: 3,
      name: "Web Design",
    },
    {
      id: 4,
      name: "Landing Page",
    },
    {
      id: 5,
      name: "Mobile Design",
    },
    {
      id: 6,
      name: "Development",
    },
  ];

  const SOCIAL_ICONS = [
    { id: 1, icon: <FaWhatsapp className="lg:scale-[130%] xl:scale-[150%]" /> },
    {
      id: 2,
      icon: <FaFacebookF className="lg:scale-[110%] xl:scale-[130%]" />,
    },
    {
      id: 3,
      icon: <FaInstagram className="lg:scale-[130%] xl:scale-[150%]" />,
    },
    {
      id: 4,
      icon: <FaLinkedinIn className="lg:scale-[130%] xl:scale-[150%]" />,
    },
  ];

  return (
    <section id="home" className="pt-[5.1875rem] relative">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <div className="w-full xl:h-[282px] relative">
            <img
              src={Vector587}
              className="absolute lg:right-0 lg:top-44 xl:top-0 xl:right-[85px]"
            />
            <div
              className="absolute bg-white w-[13.3125rem] lg:-right-12 lg:top-60 xl:right-9 xl:top-[64px] px-[0.875rem] py-3 rounded-2xl shadow-xl"
              style={{ boxShadow: "0 1.25rem 1.875rem rgba(0, 0, 0, 0.06)" }}
            >
              <div className="flex flex-col items-center">
                <div className="w-full flex items-center">
                  <span className="capitalize font-bold text-sm text-custom-blue">
                    weekly growth
                  </span>
                </div>
                <img
                  src={Vector585}
                  className="mt-[1.1875rem] mb-[1.5625rem]"
                />
                <div className="flex justify-center items-center space-x-3">
                  <div className="flex items-center">
                    <GoDotFill className="text-custom-FF7777 scale-[210%] mr-2" />
                    <span className="font-medium text-xs">12345</span>
                  </div>
                  <div className="flex items-center">
                    <GoDotFill className="text-custom-6389EB scale-[210%] mr-2" />
                    <span className="font-medium text-xs mr-1">2.4%</span>
                    <FaArrowUp className="text-custom-FF8933 scale-75" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center border lg:min-w-[601px] xl:min-w-[720px]">
            <span className="capitalize font-normal lg:text-sm xl:text-base text-custom-516371 mb-4">
              designing with us
            </span>
            <h1 className="capitalize font-bold lg:text-6xl xl:text-7xl text-center text-custom-blue mb-6">
              the beloved design company in konoha
            </h1>
            <p className="font-normal lg:text-sm xl:text-base text-center text-custom-516371 lg:mx-[72px] xl:mx-[6.0625rem] mb-6">
              With us achieving dreams in building your products, together say
              “Yes” to extraordinary designs
            </p>
          </div>
          <div className="w-full xl:h-[282px] relative">
            <img
              src={Vector588}
              className="absolute lg:left-2 lg:top-52 xl:left-[83px] xl:top-10"
            />
            <div
              className="absolute bg-white w-[13.5625rem] lg:-left-12 lg:top-[260px] xl:top-[90px] xl:left-[27px] px-[0.875rem] py-3 rounded-2xl shadow-xl"
              style={{ boxShadow: "0 1.25rem 1.875rem rgba(0, 0, 0, 0.06)" }}
            >
              <div className="flex flex-col items-center space-y-[0.625rem]">
                <div className="w-full flex items-center">
                  <span className="capitalize font-bold text-sm text-custom-blue">
                    client trusted
                  </span>
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className="flex">
                    <img
                      src={Photo1}
                      className="object-cover cursor-pointer transition-transform duration-300 ease hover:-translate-x-3 relative"
                    />
                    <img
                      src={Photo2}
                      className="object-cover -ml-4 cursor-pointer transition-transform duration-300 ease hover:-translate-x-3 relative"
                    />
                    <img
                      src={Photo3}
                      className="object-cover -ml-4 cursor-pointer transition-transform duration-300 ease hover:-translate-x-3 relative"
                    />
                    <img
                      src={Photo4}
                      className="object-cover -ml-4 cursor-pointer transition-transform duration-300 ease hover:-translate-x-3 relative"
                    />
                    <img
                      src={Photo5}
                      className="object-cover -ml-4 cursor-pointer transition-transform duration-300 relative"
                    />
                  </div>
                  <div className="flex items-center space-x-[0.375rem]">
                    <IoIosStar className="text-custom-FF8933 scale-125" />
                    <span className="font-medium text-sm text-custom-516371">
                      1,234+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:space-x-[45px] xl:space-x-[3.125rem] items-center mb-10">
          {ROLE_LISTS.map((link) => (
            <div key={link.id} className="flex items-center">
              <BsDot className="lg:scale-[160%] xl:scale-[170%] text-custom-516371" />
              <span className="font-normal lg:text-sm xl:text-base text-custom-516371">
                {link.name}
              </span>
            </div>
          ))}
        </div>
        <div className="relative w-full flex flex-col items-center bg-transparent mb-10">
          {/* xl:mx-[54px] xl2:mx-[94px] xl3:mx-[134px] 2xl:mx-[182px] */}
          <div className=" mx-auto absolute inset-x-0 -top-4 lg:w-[958px] xl:w-[1152px] h-[55.625rem] bg-gradient-to-b from-custom-F0F0F0 via-transparent to-transparent rounded-t-full p-[0.125rem] -z-10">
            <div className="w-full h-full p-7 bg-white rounded-t-full">
              <div className="w-full h-full bg-gradient-to-b from-custom-F8F8F8 via-transparent to-transparent rounded-t-full"></div>
            </div>
          </div>
          <button
            type="button"
            className="px-8 py-4 bg-custom-purple font-medium lg:text-sm xl:text-base text-white rounded-full mb-10 hover:bg-custom-blue transition duration-200 ease-in-out shadow-xl"
          >
            Start a Project
          </button>
          <div className="flex items-center space-x-6">
            {SOCIAL_ICONS.map((social) => (
              <div
                key={social.id}
                className={`bg-white text-custom-464646 lg:w-10 lg:h-10 xl:w-12 xl:h-12 flex justify-center items-center rounded-full shadow-xl ${
                  social.id === 1
                    ? "hover:text-white hover:bg-gradient-to-bl from-custom-00BE21 to-custom-01BF22 hover:cursor-pointer"
                    : social.id === 2
                    ? "hover:text-white hover:bg-custom-1977F3 hover:cursor-pointer"
                    : social.id === 3
                    ? "hover:text-white hover:bg-gradient-to-br from-purple-600 via-red-500 to-yellow-500 hover:cursor-pointer"
                    : social.id === 4
                    ? "hover:text-white hover:bg-custom-0A66C2 hover:cursor-pointer"
                    : ""
                }`}
                style={{
                  boxShadow: "0 1.25rem 1.875rem rgba(0, 0, 0, 0.05)",
                }}
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full pt-10 flex flex-col items-center space-y-[1.3125rem]">
          <span className="capitalize font-normal lg:text-sm xl:text-base text-custom-A7ABB6">
            trusted partner
          </span>
          <div className="flex justify-center items-center space-x-6">
            <div className="lg:p-3 xl:p-4 flex justify-center items-center">
              <img src={MicrosoftLogo} className="lg:scale-90 xl:scale-100" />
            </div>
            <div className="lg:p-3 xl:p-4 flex justify-center items-center">
              <img src={GmeetLogo} className="lg:scale-90 xl:scale-100" />
            </div>
            <div className="lg:p-3 xl:p-4 flex justify-center items-center">
              <img src={ZoomLogo} className="lg:scale-90 xl:scale-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
