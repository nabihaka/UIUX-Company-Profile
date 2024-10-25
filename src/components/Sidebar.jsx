import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LuHome, LuUser, LuMessageSquare, LuCalendar } from "react-icons/lu";
import { FaSuitcase } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import axios from "axios";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/dashboard/main", name: "Home", icon: LuHome },
    { id: 2, path: "/dashboard/members", name: "Members", icon: TbUsers },
    { id: 3, path: "/messages", name: "Messages", icon: LuMessageSquare },
    { id: 4, path: "/projects", name: "Projects", icon: FaSuitcase },
    { id: 5, path: "/clients", name: "Clients", icon: LuUser },
    { id: 6, path: "/work", name: "Work Plan", icon: LuCalendar },
  ];

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    //fetch Rest API
    axios.delete("http://127.0.0.1:8000/api/logout").then(() => {
      //remove token from localStorage
      localStorage.clear();

      //redirect halaman login
      window.location.href = "/";
    });
  };

  return (
    <div className="w-16 md:w-56 h-[1152px] fixed left-0 top-0 z-10 border-r pt-8 px-4 bg-white">
      <div>
        <h1 className="font-bold text-2xl">ExcloLab</h1>
      </div>
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-blue-500 ${
              activeLink === index ? "bg-blue-100 text-blue-500" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start item-center md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon()}</span>
              <span className="text-sm text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <button
          type="submit"
          className="w-full py-2 font-medium text-white bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
          onClick={handleLogout}
        >
          Logout
        </button>
        {/* <p className="flex items-center space-x2 text-xs text-white py-2 px-5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full">
          {" "}
          <span>?</span> <span className="hidden md:flex">Need Help?</span>
        </p> */}
      </div>
    </div>
  );
};

export default Sidebar;
