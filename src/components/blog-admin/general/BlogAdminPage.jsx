import * as React from "react";
import { useEffect } from "react";
import BlogAdminLayout from "@/layouts/BlogAdmin";
import { Table } from "../table/Table";

export const BlogAdminPage = () => {
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      window.history.back();
    }

    // if (window.location.pathname !==)
  }, [token]);

  return (
    <BlogAdminLayout>
      <Table />
    </BlogAdminLayout>
  );
};
