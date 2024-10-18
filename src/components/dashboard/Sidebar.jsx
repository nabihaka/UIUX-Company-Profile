import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HorizonLogo from "@/assets/horizon_logo.svg";
import HomeIcon from "@/assets/home_icon.svg";
import NftIcon from "@/assets/nft_icon.svg";
import TablesIcon from "@/assets/tables_icon.svg";
import KanbanIcon from "@/assets/kanban_icon.svg";
import ProfileIcon from "@/assets/profile_icon.svg";
import { TiHome } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/dashboard/main", name: "Dashboard", icon: HomeIcon },
    {
      id: 2,
      path: "/dashboard/nft",
      name: "Nft Marketplace",
      icon: NftIcon,
    },
    { id: 3, path: "/dashboard/tables", name: "Tables", icon: TablesIcon },
    { id: 4, path: "/dashboard/kanban", name: "Kanban", icon: KanbanIcon },
    {
      id: 5,
      path: "/dashboard/profile",
      name: "Profile",
      icon: ProfileIcon,
    },
  ];

  return (
    <div className="w-16 md:w-[290px] border fixed bg-white left-0 top-0 z-10 h-screen">
      <div className="flex justify-center items-center py-14 border-b">
        <img src={HorizonLogo} />
      </div>
      <div className="py-[41px] pl-[33px] space-y-5">
        {/* <--------------------START HERE--------------------> */}
        {SIDEBAR_LINKS.map((link) => (
          <div key={link.id} className="flex justify-between items-center">
            <div>
              <Link
                to={link.path}
                className="flex space-x-3 justify-start items-center"
              >
                <img className="" src={link.icon} />
                <span className="font-bold text-4 text-custom-blue tracking-negative-2">
                  {link.name}
                </span>
              </Link>
            </div>
            <div className="w-1 h-9 bg-custom-purple rounded-full"></div>
          </div>
        ))}
        {/* <--------------------END--------------------> */}
      </div>
    </div>
  );
};

export default Sidebar;
