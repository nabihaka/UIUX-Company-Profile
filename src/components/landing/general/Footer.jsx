import * as React from "react";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import HorizonLogo from "@/assets/horizon_logo.svg";
import Frame79 from "@/assets/frame_79.svg";

const Footer = () => {
  return (
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
              With us achieving dreams in building your products, together say
              “Yes” to extraordinary designs.
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
  );
};

export default Footer;
