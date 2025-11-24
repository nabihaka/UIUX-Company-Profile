import * as React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/blog-admin/general/Header";

const BlogAdminLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div
      className={`bg-custom-light w-full min-h-screen ${
        location.pathname === "/dashboard/blog-admin"
          ? "pl-[310px] pr-5 overflow-x-auto"
          : ""
      }`}
    >
      <div
        className={`space-y-8 ${
          location.pathname === "/dashboard/blog-admin" ? "p-0" : "px-14 py-10"
        }`}
      >
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default BlogAdminLayout;
