import * as React from "react";
import { useEffect } from "react";
import BlogAdminLayout from "@/layouts/BlogAdmin";
import Header from "./Header";
import Table from "../table/Table";

const BlogAdminPage = () => {
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      window.history.back();
    }
  }, [token]);

  return (
    <BlogAdminLayout>
      <Table />
    </BlogAdminLayout>
  );
};

export default BlogAdminPage;
