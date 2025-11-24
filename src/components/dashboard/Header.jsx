import * as React from "react";
import { useLocation } from "react-router-dom";

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
      case "/dashboard/client":
        return "Dashboard / Client";
      case "/dashboard/blog-admin":
        return "Dashboard / Blog ";
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
      case "/dashboard/client":
        return "Client";
      case "/dashboard/blog-admin":
        return "Blog";
      default:
        return "Default Title";
    }
  };

  const renderCustomElement = () => {
    if (location.pathname === "/dashboard/blog-admin") {
      return (
        <button
          type="button"
          onClick={() => (window.location.href = "/create-new-blog")}
          className="px-6 py-3 bg-custom-purple font-medium text-base text-white tracking-negative-2 rounded-xl hover:bg-custom-blue active:bg-custom-1A244B transition duration-200 ease-in-out"
        >
          Create blog
        </button>
      );
    }
  };

  return (
    <div className="w-full bg-custom-light pl-[310px] pt-12 pr-5">
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
