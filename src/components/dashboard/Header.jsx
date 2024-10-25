import * as React from "react";
import { useLocation } from "react-router-dom";
import { MdNotificationsNone } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import EthIcon from "@/assets/eth_icon.svg";

const Header = () => {
  const location = useLocation();
  const pathPage = () => {
    switch (location.pathname) {
      case "/dashboard/main":
        return "Pages / Dashboard";
      case "/dashboard/nftmarketplace":
        return "Pages / NFT Marketplace";
      case "/dashboard/tables":
        return "Pages / Tables";
      case "/dashboard/kanban":
        return "Pages / Kanban";
      case "/dashboard/profile":
        return "Pages / Profile";
      default:
        return "Default Title";
    }
  };

  const titlePage = () => {
    switch (location.pathname) {
      case "/dashboard/main":
        return "Main Dashboard";
      case "/dashboard/nftmarketplace":
        return "NFT Marketplace";
      case "/dashboard/tables":
        return "Tables";
      case "/dashboard/kanban":
        return "Kanban";
      case "/dashboard/profile":
        return "Profile";
      default:
        return "Default Title";
    }
  };

  const renderCustomElement = () => {
    if (location.pathname === "/dashboard/nftmarketplace") {
      return (
        <div className="flex justify-between items-center w-[559px] h-[61px] p-[10px] bg-white rounded-full">
          <div className="flex space-x-[10px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[223px] bg-custom-light pl-12 pr-6 py-[10px] placeholder-custom-8F9BBA text-custom-blue font-normal text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-custom-blue"
              ></input>
              <div className="absolute inset-y-3.5 end-44 top-[30%] left-[9%]">
                <FiSearch className="text-custom-blue" />
              </div>
            </div>
            <div className="bg-custom-light w-[117px] flex justify-between items-center rounded-full pl-[6px] pr-[13px] py-[6px]">
              <img src={EthIcon} />
              <span className="font-bold text-sm text-custom-blue tracking-negative-2">
                1,924 ETH
              </span>
            </div>
          </div>
          <div className="w-full ml-[25px] flex justify-between items-center">
            <MdNotificationsNone className="scale-150 text-custom-gray" />
            <FaMoon className="scale-110 text-custom-gray" />
            <IoMdInformationCircleOutline className="scale-150 text-custom-gray" />
            <div className="w-8 h-8 rounded-full bg-custom-blue"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex justify-between items-center w-[422px] h-[61px] p-[10px] bg-white rounded-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-[214px] bg-custom-light pl-12 pr-6 py-[10px] placeholder-custom-8F9BBA text-custom-blue font-normal text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-custom-blue"
            ></input>
            <div className="absolute inset-y-3.5 end-44 top-[30%] left-[9%]">
              <FiSearch className="text-custom-blue" />
            </div>
          </div>
          <div className="w-full ml-6 flex justify-between items-center">
            <MdNotificationsNone className="scale-150 text-custom-gray" />
            <FaMoon className="scale-110 text-custom-gray" />
            <IoMdInformationCircleOutline className="scale-150 text-custom-gray" />
            <div className="w-8 h-8 rounded-full bg-custom-blue"></div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-[1610px] bg-custom-light ml-72 pl-6 pt-12 pb-5 pr-6">
      <div className="w-full flex flex-col justify-start">
        <p className="font-medium text-custom-silver text-base">{pathPage()}</p>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-custom-blue text-4xl tracking-negative-2">
            {titlePage()}
          </h1>
          {renderCustomElement()}
        </div>
      </div>
    </div>
  );
};

export default Header;
