import * as React from "react";
import BlogAdminLayout from "@/layouts/BlogAdmin";
import { FormUpdateBlog } from "../form/FormUpdateBlog";

const UpdateBlogPage = () => {
  return (
    <BlogAdminLayout>
      <FormUpdateBlog />
    </BlogAdminLayout>
  );
};

export default UpdateBlogPage;
