import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HorizonLogo from "@/assets/horizon_logo.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const NAVBAR_LINKS = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About Us",
      path: "/#about",
    },
    {
      id: 3,
      name: "Services",
      path: "/#services",
    },
    {
      id: 4,
      name: "Portofolio",
      path: "/#portofolio",
    },
    {
      id: 5,
      name: "Testimoni",
      path: "/#testimoni",
    },
    {
      id: 6,
      name: "Contact",
      path: "/#contact",
    },
  ];

  return (
    <div className="w-full lg:px-[10px] xl:px-[54px] xl2:px-[94px] xl3:px-[134px] 2xl:px-[182px] py-6 flex justify-center items-center">
      <div className="flex w-full justify-between items-center">
        <img src={HorizonLogo} className="lg:scale-95 xl:scale-100" />
        <div className="flex space-x-10">
          {NAVBAR_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.path}
              onClick={() => handleLinkClick(index)}
              className={`lg:text-sm xl:text-base ${
                activeLink === index ? "font-bold text-custom-blue" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="px-8 py-4 bg-transparent border border-black rounded-full font-medium lg:text-sm xl:text-base text-black hover:bg-custom-blue hover:text-white transition duration-200 ease-in-out"
        >
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default Navbar;
