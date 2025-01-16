import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { fetchBlogDetail } from "@/helpers/axiosGetBlogDetail";
import LoadingPurple from "@/assets/svg/loading_purple.svg";

export const BlogDetailAdminPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const blogId = localStorage.getItem("blogId");
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    if (window.location.pathname !== "/blog-detail") {
      localStorage.removeItem("blogId");
    }

    if (!blogId) {
      navigate("/blog-admin");
    }
  }, [token, location.pathname, blogId]);

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await fetchBlogDetail(blogId);
      setBlogData(data);

      console.log(data);
    };

    fetchBlog();
  }, []);

  if (!blogData) {
    return (
      <div className="fixed inset-0 flex justify-center items-center gap-2">
        <img src={LoadingPurple} className="h-8 animate-spin" />
        <span className="font-normal text-xl tracking-negative-2">
          Loading...
        </span>
      </div>
    );
  }

  const safeMessage = DOMPurify.sanitize(blogData.message);

  return (
    <div className="w-full min-h-screen relative">
      {/* <h1>{blogData.title}</h1> */}
      <div dangerouslySetInnerHTML={{ __html: safeMessage }} />
    </div>
  );
};
