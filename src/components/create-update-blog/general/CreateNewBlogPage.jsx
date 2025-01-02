import * as React from "react";
import BlogAdminLayout from "@/layouts/BlogAdmin";
import { FormCreateBlog } from "../form/FormCreateBlog";

const CreateNewBlogPage = () => {
  return (
    <BlogAdminLayout>
      <FormCreateBlog />
    </BlogAdminLayout>
  );
};

export default CreateNewBlogPage;
