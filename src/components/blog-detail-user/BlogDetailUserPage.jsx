import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { fetchBlogSlug } from "@/helpers/axiosGetBlogSlug";

export const BlogDetailUserPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await fetchBlogSlug(slug);
      setBlog(data);
      console.log(data);
    };

    fetchBlog();
  }, [slug]);

  if (!blog) {
    return <div>Loading</div>;
  }

  const safeMessage = DOMPurify.sanitize(blog.message);

  return (
    <div>
      <h1>{blog.title}</h1>
      {/* {blog.message} */}
      <div dangerouslySetInnerHTML={{ __html: safeMessage }} />
    </div>
  );
};
