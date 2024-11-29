import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "@/helpers/axiosLogout.js";
import Loading from "@/assets/svg/loading.svg";
import HorizonLogo from "@/assets/svg/horizon_logo.svg";
import ActiveHomeIcon from "@/assets/svg/active_home_icon.svg";
import ActiveNftIcon from "@/assets/svg/active_nft_icon.svg";
import ActiveTablesIcon from "@/assets/svg/active_tables_icon.svg";
import ActiveKanbanIcon from "@/assets/svg/active_kanban_icon.svg";
import ActiveProfileIcon from "@/assets/svg/active_profile_icon.svg";
import ActiveClientIcon from "@/assets/svg/active_client_icon.svg";
import InactiveHomeIcon from "@/assets/svg/inactive_home_icon.svg";
import InactiveNftIcon from "@/assets/svg/inactive_nft_icon.svg";
import InactiveTablesIcon from "@/assets/svg/inactive_tables_icon.svg";
import InactiveKanbanIcon from "@/assets/svg/inactive_kanban_icon.svg";
import InactiveProfileIcon from "@/assets/svg/inactive_profile_icon.svg";
import InactiveClientIcon from "@/assets/svg/inactive_client_icon.svg";
import { TiHome } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const [loading, setLoading] = useState(false);

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
    {
      id: 6,
      path: "/dashboard/client",
      name: "Client",
      active: ActiveClientIcon,
      inactive: InactiveClientIcon,
    },
  ];

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="w-[290px] border fixed bg-white min-h-screen">
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
          ))}
          {/* <--------------------END--------------------> */}
          <button
            className="bg-gradient-to-r from-custom-purple to-violet-500 w-36 ml-[10px] py-2 flex justify-center items-center font-bold text-white text-4 rounded-full hover:bg-custom-blue transition duration-200 ease-in-out"
            onClick={handleLogout}
          >
            {loading ? (
              <img src={Loading} className="h-6 animate-spin" />
            ) : (
              "Logout"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
