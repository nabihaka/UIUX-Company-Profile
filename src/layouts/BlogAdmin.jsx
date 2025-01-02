import * as React from "react";
import Header from "@/components/blog-admin/general/Header";

const BlogAdminLayout = ({ children }) => {
  return (
    <div className="bg-custom-light w-full min-h-screen">
      <div className="px-14 py-10 space-y-8">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default BlogAdminLayout;
