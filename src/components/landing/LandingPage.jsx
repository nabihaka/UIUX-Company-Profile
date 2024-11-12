import * as React from "react";
import { useState } from "react";
import { BsDot } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { FaArrowUp } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import {
  FaDribbble,
  FaWhatsapp,
  FaFacebookF,
  FaBehance,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import MicrosoftLogo from "@/assets/microsoft_logo.svg";
import HorizonLogo from "@/assets/horizon_logo.svg";
import GmeetLogo from "@/assets/gmeet_logo.svg";
import ZoomLogo from "@/assets/zoom_logo.svg";
import Vector585 from "@/assets/vector_585.svg";
import Vector587 from "@/assets/vector_587_left.svg";
import Vector588 from "@/assets/vector_588_right.svg";
import Vector590 from "@/assets/vector_590.svg";
import Photo1 from "@/assets/photo1.svg";
import Photo2 from "@/assets/photo2.svg";
import Photo3 from "@/assets/photo3.svg";
import Photo4 from "@/assets/photo4.svg";
import Photo5 from "@/assets/photo5.svg";
import Photo6 from "@/assets/photo6.svg";
import Person1 from "@/assets/person1.svg";
import Person2 from "@/assets/person2.svg";
import Person3 from "@/assets/person3.svg";
import Person4 from "@/assets/person4.svg";
import Quote from "@/assets/quote_icon.svg";
import ContactImg from "@/assets/contact_image.svg";
import Project1 from "@/assets/success_project1.svg";
import Project2 from "@/assets/success_project2.svg";
import Project3 from "@/assets/success_project3.svg";
import Project4 from "@/assets/success_project4.svg";
import Frame79 from "@/assets/frame_79.svg";
import BorderPerson1 from "@/assets/vector_person1.svg";
import Navbar from "@/components/landing/Navbar.jsx";

const LandingPage = () => {
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

  const [isAppointmentChecked, setIsAppointmentChecked] = useState(false);

  // Fungsi untuk menangani perubahan checkbox
  const handleCheckboxChange = (e) => {
    setIsAppointmentChecked(e.target.checked);
  };

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      {/* <--------------------------------------HOME-SECTION--------------------------------------> */}
      <section className="pt-[5.1875rem] relative">
        <img
          src={Vector587}
          className="absolute xl:top-[5.625rem] xl:left-[141px] xl2:left-[182px] xl3:left-[221px] 2xl:left-[16.75rem]"
        />
        <div
          className="absolute bg-white w-[13.3125rem] xl:left-[24px] xl2:left-[63px] xl3:left-[102px] 2xl:left-[9.375rem] xl:top-36 px-[0.875rem] py-3 rounded-2xl shadow-xl -z-5"
          style={{ boxShadow: "0 1.25rem 1.875rem rgba(0, 0, 0, 0.06)" }}
        >
          <div className="flex flex-col items-center">
            <div className="w-full flex items-center">
              <span className="capitalize font-bold text-sm text-custom-blue">
                weekly growth
              </span>
            </div>
            <img src={Vector585} className="mt-[1.1875rem] mb-[1.5625rem]" />
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
        <img
          src={Vector588}
          className="absolute xl:right-[146px] xl2:right-[186px] xl3:right-[226px] 2xl:right-[17.0625rem] xl:top-32"
        />
        <div
          className="absolute bg-white w-[13.5625rem] xl:top-44 xl:right-[29px] xl2:right-[70px] xl3:right-[109px] 2xl:right-[9.8125rem] px-[0.875rem] py-3 rounded-2xl shadow-xl"
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
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center lg:w-[60%] xl:w-[57%] xl2:w-[54%] xl3:w-[51%] 2xl:w-[48%]">
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
            <div className="absolute inset-x-0 -top-4 h-[55.625rem] bg-gradient-to-b from-custom-F0F0F0 via-transparent to-transparent rounded-t-full xl:mx-[54px] xl2:mx-[94px] xl3:mx-[134px] 2xl:mx-[182px] p-[0.125rem] -z-10">
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
          <div className="w-full py-10 flex flex-col items-center space-y-[1.3125rem]">
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
      {/* <--------------------------------------ABOUT-SECTION--------------------------------------> */}
      <section id="about" className="flex flex-col pt-10">
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
                  Lörem ipsum astrobel sar direlig. Kronde est konfoni med
                  kelig.
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
        <div className="xl:mx-[54px] xl2:mx-[94px] xl3:mx-[134px] 2xl:mx-[182px] mb-[90px] flex justify-between items-center">
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
      {/* <--------------------------------------SERVICES-SECTION--------------------------------------> */}
      <section id="services" className="pt-10">
        <div className="flex flex-col items-center space-y-10 lg:mx-[10px] xl:mx-[54px] xl2:mx-[94px] xl3:mx-[134px] 2xl:mx-[182px] mb-20">
          <div className="w-[50%] flex flex-col items-center">
            <span className="capitalize font-normal lg:text-sm xl:text-base text-custom-A7ABB6 mb-3">
              project
            </span>
            <h2 className="capitalize font-bold lg:text-[35px] xl:text-[2.5rem] text-custom-blue mb-6">
              success project
            </h2>
            <p className="text-center font-normal lg:text-sm xl:text-base text-custom-A7ABB6">
              Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
              Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig.
              Kronde est
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
      {/* <--------------------------------------PORTOFOLIO-SECTION--------------------------------------> */}
      <section id="portofolio" className="pt-10">
        <div className="lg:mx-[10px] xl:mx-[54px] xl2:mx-[94px] xl3:mx-[134px] 2xl:mx-[182px] relative flex justify-between mb-10">
          <div className="w-[50%] flex flex-col">
            <span className="capitalize font-normal lg:text-sm xl:text-base text-custom-A7ABB6 mb-4">
              inspiration
            </span>
            <h2 className="font-bold lg:text-[35px] xl:text-[2.5rem] text-custom-blue mb-6">
              UI Design Exploration
            </h2>
            <p className="font-normal lg:text-sm xl:text-base text-custom-A7ABB6">
              Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
              Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig.
              Kronde est{" "}
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
        <div className="mb-20">
          <img src={Project4} className="w-full" />
        </div>
      </section>
      {/* <--------------------------------------TESTIMONI-SECTION--------------------------------------> */}
      <section id="testimoni" className="pt-10">
        <div className="xl:mx-[176px] xl2:mx-[216px] xl3:mx-[256px] 2xl:mx-[304px] flex flex-col items-center mb-20">
          <div className="flex flex-col items-center mb-10">
            <span className="font-normal lg:text-sm xl:text-base text-custom-A7ABB6 mb-4">
              What our customer say
            </span>
            <h2 className="capitalize font-bold lg:text-[35px] xl:text-[2.5rem] text-custom-blue mb-6">
              testimonial
            </h2>
            <p className="font-normal text-center lg:text-sm xl:text-base text-custom-A7ABB6">
              Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
            </p>
          </div>
          <div className="w-full flex flex-col items-center mb-11">
            <div className="w-full relative flex justify-center items-center">
              <img src={Quote} className="absolute left-0" />
              <img src={GmeetLogo} />
            </div>
          </div>
          <div className="w-full mb-10">
            <p className="font-light text-center text-[2rem] text-black">
              Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
              Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig.
              Kronde est
            </p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <span className="font-bold text-xl text-custom-blue">
              Larry Pageim Fred & Sergey Brin
            </span>
            <span className="font-normal text-sm text-black">
              Sr. Director, Brand Marketing
            </span>
          </div>
        </div>
      </section>
      {/* <--------------------------------------CONTACT-SECTION--------------------------------------> */}
      <section id="contact" className="pt-10">
        <div className="flex justify-between items-center xl:mr-[54px] xl:ml-0 xl2:mr-[94px] xl2:ml-0 xl3:mr-[134px] xl3:ml-0 2xl:mr-[182px] 2xl:ml-0 mb-[7.5rem]">
          <img src={ContactImg} className="h-[723px] rounded-r-3xl" />
          <div className="w-full flex flex-col pl-12">
            <div className="flex flex-col items-start mb-9">
              <h2 className="font-bold text-[2.5rem] text-custom-blue">
                Get in touch
              </h2>
              <p className="font-light text-base text-custom-A7ABB6">
                Have an enquiry? Fill out the form to contact our team
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-3.5">
                <div className="w-full flex flex-col space-y-[0.8125rem]">
                  <label
                    htmlFor="name"
                    className="text-custom-blue font-medium text-base"
                  >
                    Name<span className="text-custom-purple">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="bg-transparent placeholder-custom-gray font-normal text-base border border-custom-A7ABB6 px-4 py-3 rounded-xl focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-custom-purple"
                  />
                </div>
                <div className="w-full flex flex-col space-y-[0.8125rem]">
                  <label
                    htmlFor="phone"
                    className="text-custom-blue font-medium text-base"
                  >
                    Phone number<span className="text-custom-purple">*</span>
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="089015151999"
                    className="bg-transparent placeholder-custom-gray font-normal text-base border border-custom-A7ABB6 px-4 py-3 rounded-xl focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-custom-purple"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col space-y-[0.8125rem]">
                <label
                  htmlFor="email"
                  className="text-custom-blue font-medium text-base"
                >
                  Email<span className="text-custom-purple">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="simple@example.com"
                  className="bg-transparent placeholder-custom-gray font-normal text-base border border-custom-A7ABB6 px-4 py-3 rounded-xl focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-custom-purple"
                />
              </div>
              <div className="w-full flex items-center space-x-2">
                <input
                  id="appoinment"
                  type="checkbox"
                  checked={isAppointmentChecked}
                  onChange={handleCheckboxChange}
                  className="accent-custom-purple h-[1.125rem] w-[1.125rem] cursor-pointer"
                />
                <label
                  htmlFor="appoinment"
                  className="text-custom-blue font-medium text-base cursor-pointer"
                >
                  Make an appoinment?
                </label>
              </div>
              <div className="flex items-center space-x-3.5">
                <div className="w-full flex flex-col space-y-[0.8125rem]">
                  <label
                    htmlFor="datetime"
                    className={`text-custom-blue font-medium text-base ${
                      !isAppointmentChecked
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
                  >
                    Date and time<span className="text-custom-purple">*</span>
                  </label>
                  <input
                    id="datetime"
                    type="datetime-local"
                    disabled={!isAppointmentChecked}
                    className={`bg-transparent font-normal text-base border border-custom-A7ABB6 px-4 py-3 rounded-xl focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-custom-purple ${
                      !isAppointmentChecked
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-[0.8125rem]">
                <label
                  htmlFor="message"
                  className="text-custom-blue font-medium text-base"
                >
                  Message<span className="text-custom-purple">*</span>
                </label>
                <textarea
                  id="message"
                  type="text"
                  placeholder="Your question/message"
                  className="bg-transparent placeholder-custom-gray font-normal text-base border border-custom-A7ABB6 h-28 px-4 py-3 rounded-xl focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-custom-purple"
                />
              </div>
              <button
                type="submit"
                className="bg-custom-purple w-max px-12 py-3 font-medium text-base text-white rounded-full hover:bg-custom-blue transition duration-200 ease-in-out shadow-xl"
                style={{
                  boxShadow: "0 1.25rem 1.875rem rgba(0, 0, 0, 0.1)",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <--------------------------------------FOOTER--------------------------------------> */}
      <footer>
        <div className="flex flex-col items-center xl:mx-[54px] xl2:mx-[94px] xl3:mx-[134px] 2xl:mx-[182px] mb-7">
          <div className="w-full relative flex justify-center items-center rounded-3xl mb-[60px]">
            <img src={Frame79} className="w-full" />
            <div className="w-full px-10 py-[46px] absolute flex justify-between items-center">
              <div className="w-[60%] flex flex-col items-start">
                <h3 className="font-bold text-[2rem] text-white">
                  Work Together with Horizon Free
                </h3>
                <p className="font-extralight text-base text-white">
                  Our company is a very professional company, with friendly
                  service, modern homes and interest-free payments
                </p>
              </div>
              <button className="bg-white px-6 py-3 font-bold text-sm text-custom-purple rounded-xl">
                Register
              </button>
            </div>
          </div>
          <div className="w-full flex justify-between mb-12">
            <div className="w-[25%] flex flex-col items-start space-y-7">
              <img src={HorizonLogo} />
              <p className="font-extralight text-justify text-base text-custom-A7ABB6">
                Prebör domisaning. Kemkastrering. Fagt kaskade. Bist decissa.
                Stereodiktisk vasyns att preteng. Mons byning fihör. Pore tolig.
                Epire kanesk. Monosa medelgam tisk.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-6">
              <span className="font-bold text-bold text-base">Home</span>
              <div className="flex flex-col space-y-6">
                <span className="font-light text-base text-custom-A7ABB6">
                  Beranda
                </span>
                <span className="font-light text-base text-custom-A7ABB6">
                  Program Keahlian
                </span>
                <span className="font-light text-base text-custom-A7ABB6">
                  Gallery
                </span>
                <span className="font-light text-base text-custom-A7ABB6">
                  Our News
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-6">
              <span className="font-bold text-bold text-base">About</span>
              <div className="flex flex-col space-y-6">
                <span className="font-light text-base text-custom-A7ABB6">
                  Beranda
                </span>
                <span className="font-light text-base text-custom-A7ABB6">
                  Program Keahlian
                </span>
                <span className="font-light text-base text-custom-A7ABB6">
                  Gallery
                </span>
                <span className="font-light text-base text-custom-A7ABB6">
                  Our News
                </span>
              </div>
            </div>
            <div className="w-[24%] flex flex-col items-start space-y-6">
              <span className="font-bold text-bold text-base">Contact</span>
              <div className="flex items-baseline space-x-4">
                <MdCall className="scale-150" />
                <span className="font-light text-base text-custom-A7ABB6">
                  +62 890-1515-1999
                </span>
              </div>
              <div className="flex items-baseline space-x-4">
                <MdEmail className="scale-150" />
                <span className="font-light text-base text-custom-A7ABB6">
                  horizon.free@gmail.com
                </span>
              </div>
              <div className="flex items-baseline space-x-4">
                <MdLocationOn className="scale-[210%]" />
                <span className="font-light text-base text-custom-A7ABB6">
                  +2972 Westheimer Rd. Santa Ana, Illinois 85486
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex space-x-7 items-center">
              <FaInstagram className="scale-150" />
              <FaWhatsapp className="scale-150" />
              <FaLinkedinIn className="scale-150" />
              <FaYoutube className="scale-150" />
              <FaTwitter className="scale-150" />
            </div>
            <span className="font-extralight text-sm text-custom-A7ABB6">
              © 2024 HorizonFree. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
