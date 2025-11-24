import * as React from "react";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const titlePage = () => {
    switch (location.pathname) {
      case "/dashboard/blog-admin":
        return "Blog List";
      case "/create-new-blog":
        return "Create New Blog";
      case "/update-blog":
        return "Update Blog";
      default:
        return "Unknown Title";
    }
  };

  // const renderCustomElement = () => {
  //   if (location.pathname === "/dashboard/blog-admin") {
  //     return (
  //       <button
  //         type="button"
  //         onClick={() => (window.location.href = "/create-new-blog")}
  //         className="px-6 py-3 bg-custom-purple font-medium text-base text-white tracking-negative-2 rounded-xl hover:bg-custom-blue active:bg-custom-1A244B transition duration-200 ease-in-out"
  //       >
  //         Create blog
  //       </button>
  //     );
  //   }
  // };

  return (
    <div
      className={`${
        location.pathname === "/dashboard/blog-admin" ? "hidden" : "flex"
      }`}
    >
      <h1 className="font-bold text-4xl text-custom-blue tracking-negative-2">
        {titlePage()}
      </h1>
    </div>
  );
};
