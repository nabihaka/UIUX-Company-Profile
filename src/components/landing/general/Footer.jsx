import * as React from "react";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
// import HorizonLogo from "@/assets/svg/horizon_logo.svg";
import LogoHorizon from "@/assets/png/horizonui_logo.png";
import Frame79 from "@/assets/svg/frame_79.svg";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center">
        <div className="flex flex-col items-center lg:max-w-[958px] xl:max-w-6xl mb-7">
          <div className="w-full relative flex justify-center items-center rounded-3xl mb-[60px]">
            <img src={Frame79} className="w-full" />
            <div className="w-full px-10 py-[46px] absolute flex justify-between items-center">
              <div className="w-[60%] flex flex-col items-start">
                <h3 className="font-bold lg:text-[28px] text-[2rem] text-white">
                  Work Together with HorizonUI
                </h3>
                <p className="font-extralight lg:text-sm xl:text-base text-white">
                  Our company is a very professional company, with friendly
                  service, modern homes and interest-free payments
                </p>
              </div>
              <button
                type="button"
                className="bg-white px-6 py-3 font-bold text-sm text-custom-purple rounded-xl active:bg-custom-blue active:text-white hover:bg-custom-blue hover:text-white transition duration-200 ease-in-out"
              >
                Register
              </button>
            </div>
          </div>
          <div className="w-full flex justify-between mb-12">
            <div className="w-[25%] flex flex-col items-start space-y-7">
              <img src={LogoHorizon} className="h-10" />
              <p className="font-extralight text-justify lg:text-sm xl:text-base text-custom-A7ABB6">
                With us achieving dreams in building your products, together say
                “Yes” to extraordinary designs.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-6">
              <span className="font-bold text-bold lg:text-sm xl:text-base">
                Services
              </span>
              <div className="flex flex-col space-y-6">
                <span className="font-light lg:text-sm xl:text-base text-custom-A7ABB6">
                  Documentation
                </span>
                <span className="font-light lg:text-sm xl:text-base text-custom-A7ABB6">
                  Design
                </span>
                <span className="font-light lg:text-sm xl:text-base text-custom-A7ABB6">
                  Themes
                </span>
                <span className="font-light lg:text-sm xl:text-base text-custom-A7ABB6">
                  Illustration
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-6">
              <span className="font-bold text-bold lg:text-sm xl:text-base">
                Company
              </span>
              <div className="flex flex-col space-y-6">
                <span className="font-light lg:text-sm xl:text-base text-custom-A7ABB6">
                  About
                </span>
                <span className="font-light lg:text-sm xl:text-base text-custom-A7ABB6">
                  Terms
                </span>
                <span className="font-light lg:text-sm xl:text-base text-custom-A7ABB6">
                  Privacy Policy
                </span>
                <span className="font-light lg:text-sm xl:text-base text-custom-A7ABB6">
                  Careers
                </span>
              </div>
            </div>
            <div className="lg:w-[23%] xl:w-[24%] flex flex-col items-start space-y-6">
              <span className="font-bold text-bold lg:text-sm xl:text-base">
                Contact
              </span>
              <div className="flex items-baseline space-x-4">
                <MdCall className="lg:scale-[140%] xl:scale-150" />
                <span className="font-light lg:text-sm xl:text-base text-custom-A7ABB6">
                  +62 890-1515-1999
                </span>
              </div>
              <div className="flex items-baseline space-x-4">
                <MdEmail className="lg:scale-[140%] xl:scale-150" />
                <span className="font-light lg:text-sm xl:text-base text-custom-A7ABB6">
                  horizon.ui@gmail.com
                </span>
              </div>
              <div className="flex items-baseline space-x-4">
                <MdLocationOn className="lg:scale-[200%] xl:scale-[210%]" />
                <span className="font-light lg:text-sm xl:text-base text-justify text-custom-A7ABB6">
                  +2972 Westheimer Rd. Santa Ana, Illinois 85486
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex space-x-7 items-center lg:ml-[2.1px] xl:ml-[2.5px]">
              <FaInstagram className="lg:scale-[140%] xl:scale-150" />
              <FaWhatsapp className="lg:scale-[140%] xl:scale-150" />
              <FaLinkedinIn className="lg:scale-[140%] xl:scale-150" />
              <FaYoutube className="lg:scale-[140%] xl:scale-150" />
              <FaTwitter className="lg:scale-[140%] xl:scale-150" />
            </div>
            <span className="font-extralight text-sm text-custom-A7ABB6">
              © 2024 HorizonUI. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
