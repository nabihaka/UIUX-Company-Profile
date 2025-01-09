import * as React from "react";
import { NAVBAR_LANDING_LINKS } from "@/models/landing/navbar/navbarLanding";
import HorizonWhiteLogo from "@/assets/svg/horizon_white_logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-transparent w-full py-[26px] absolute top-0 z-10">
      <div className="w-[1140px] mx-auto flex justify-between items-center">
        <img src={HorizonWhiteLogo} />
        <div className="flex gap-10 items-center">
          {NAVBAR_LANDING_LINKS.map((list) => (
            <a
              key={list.id}
              href={list.path}
              className={`text-base text-white tracking-negative-2 cursor-pointer ${
                list.name === "Blog"
                  ? "-translate-y-1 font-bold"
                  : "font-normal "
              }`}
            >
              {list.name}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="px-8 py-4 bg-transparent border border-white rounded-full font-medium lg:text-sm xl:text-base text-white hover:bg-white hover:text-black transition duration-200 ease-in-out"
        >
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
