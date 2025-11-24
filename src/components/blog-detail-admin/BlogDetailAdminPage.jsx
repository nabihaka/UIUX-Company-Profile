import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosCheckmark } from "react-icons/io";
import DOMPurify from "dompurify";
import { fetchBlogDetail } from "@/helpers/axiosGetBlogDetail";
// import { fetchBlogSlug } from "@/helpers/axiosGetBlogSlug";
import LoadingPurple from "@/assets/svg/loading_purple.svg";

export const BlogDetailAdminPage = () => {
  const navigate = useNavigate();
  // const { slug } = useParams();
  const token = localStorage.getItem("token");
  const blogId = localStorage.getItem("blogId");
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    // if (window.location.pathname !== `/blog-detail/${slug}`) {
    //   localStorage.removeItem("blogId");
    // }

    if (!blogId) {
      navigate("/dashboard/blog-admin");
    }
  }, [token]);

  useEffect(() => {
    const fetchBlogData = async () => {
      const data = await fetchBlogDetail(blogId);
      setBlogData(data);
      console.log(data);
    };

    fetchBlogData();

    // const fetchBlog = async () => {
    //   const data = await fetchBlogSlug(slug);
    //   setBlogData(data);
    //   console.log(data);
    // };

    // fetchBlog();

    // fetchBlog();
  }, []);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

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

  const createdAt = blogData.created_at; // Data dari backend
  const UpdatedAt = blogData.updated_at;
  const formattedCreatedAt = formatDate(createdAt);
  const formattedUpdatedAt = formatDate(UpdatedAt);

  const safeMessage = DOMPurify.sanitize(blogData.message);

  return (
    <div className="w-full min-h-screen relative">
      <div className="w-full px-14 py-10">
        <div dangerouslySetInnerHTML={{ __html: safeMessage }} />

        <div className="w-full mt-10 flex justify-between items-center">
          <div className="space-y-1">
            <p className="font-medium text-base text-custom-blue tracking-negative-2">
              {blogData.author.Full_Name}
            </p>
            <div className="flex items-center gap-2">
              <div className="bg-green-500 w-4 h-4 rounded-full flex justify-center items-center">
                <IoIosCheckmark className="text-white text-xl" />
              </div>
              <em className="font-light text-sm text-gray-500 tracking-negative-2">
                Verified admin
              </em>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-medium text-sm">{formattedCreatedAt}</span>
            <i
              className={`font-medium text-sm ${
                formattedCreatedAt === formattedUpdatedAt ? "hidden" : ""
              }`}
            >
              Last update: {formattedUpdatedAt}
            </i>
          </div>
        </div>
      </div>
      {/* <h1>{blogData.title}</h1> */}
    </div>
  );
};
