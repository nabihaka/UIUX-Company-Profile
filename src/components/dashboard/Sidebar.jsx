import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HorizonLogo from "@/assets/horizon_logo.svg";
import ActiveHomeIcon from "@/assets/active_home_icon.svg";
import ActiveNftIcon from "@/assets/active_nft_icon.svg";
import ActiveTablesIcon from "@/assets/active_tables_icon.svg";
import ActiveKanbanIcon from "@/assets/active_kanban_icon.svg";
import ActiveProfileIcon from "@/assets/active_profile_icon.svg";
import InactiveHomeIcon from "@/assets/inactive_home_icon.svg";
import InactiveNftIcon from "@/assets/inactive_nft_icon.svg";
import InactiveTablesIcon from "@/assets/inactive_tables_icon.svg";
import InactiveKanbanIcon from "@/assets/inactive_kanban_icon.svg";
import InactiveProfileIcon from "@/assets/inactive_profile_icon.svg";
import { TiHome } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const SIDEBAR_LINKS = [
    {
      id: 1,
      path: "/dashboard/main",
      name: "Dashboard",
      active: ActiveHomeIcon,
      inactive: InactiveHomeIcon,
    },
    {
      id: 2,
      path: "/dashboard/nftmarketplace",
      name: "Nft Marketplace",
      active: ActiveNftIcon,
      inactive: InactiveNftIcon,
    },
    {
      id: 3,
      path: "/dashboard/tables",
      name: "Tables",
      active: ActiveTablesIcon,
      inactive: InactiveTablesIcon,
    },
    {
      id: 4,
      path: "/dashboard/kanban",
      name: "Kanban",
      active: ActiveKanbanIcon,
      inactive: InactiveKanbanIcon,
    },
    {
      id: 5,
      path: "/dashboard/profile",
      name: "Profile",
      active: ActiveProfileIcon,
      inactive: InactiveProfileIcon,
    },
  ];

  return (
    <div className="w-[18.125rem] fixed bg-white left-0 top-0 z-10 min-h-screen">
      <div className="flex justify-center items-center py-14 border-b border-custom-light">
        <img src={HorizonLogo} />
      </div>
      <div className="h-full pb-6 flex flex-col justify-between items-center">
        <div className="w-full py-9 space-y-5">
          {/* <--------------------START HERE--------------------> */}
          {SIDEBAR_LINKS.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              onClick={() => handleLinkClick(index)}
              className="flex justify-between items-center ml-[0.625rem] pl-[1.4375rem] rounded-l-xl hover:bg-custom-light transition duration-200 ease-in-out"
            >
              <div className="flex space-x-3 justify-start items-center">
                <img src={activeLink === index ? link.active : link.inactive} />
                <span
                  className={`text-4 tracking-negative-2 ${
                    activeLink === index
                      ? "text-custom-blue font-bold"
                      : "text-custom-gray font-medium"
                  }`}
                >
                  {link.name}
                </span>
              </div>
              <div
                className={`w-1 h-9 rounded-full ${
                  activeLink === index ? "bg-custom-purple" : ""
                }`}
              ></div>
            </Link>
            // <div
            //   key={link.id}
            //   className={`flex justify-between items-center ml-[10px] pl-[23px] rounded-l-xl hover:bg-custom-light transition duration-200 ease-in-out`}
            // >
            //   <div>
            //     <Link
            //       to={link.path}
            //       className="flex space-x-3 justify-start items-center"
            //     >
            //       <img className="" src={link.icon} />
            //       <span
            //         className={`font-bold text-4 tracking-negative-2 ${
            //           activeLink === link.id
            //             ? "text-custom-gray"
            //             : "text-custom-blue"
            //         }`}
            //       >
            //         {link.name}
            //       </span>
            //     </Link>
            //   </div>
            //   <div className="w-1 h-9 bg-custom-purple rounded-full"></div>
            // </div>
          ))}
          {/* <--------------------END--------------------> */}
        </div>
        {/* <div className="border w-full bg-black">adadasdad</div> */}
      </div>
    </div>
  );
};

export default Sidebar;
