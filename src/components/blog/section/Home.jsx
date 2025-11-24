import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import truncate from "html-truncate";
import BackgroundImgBlog from "@/assets/svg/bg_image_blog2.svg";
import { FaSearch } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import ButtonSearch from "../general/ButtonSearch";
import { fetchBlogDetail } from "@/helpers/axiosGetBlogDetail";
import LoadingPurple from "@/assets/svg/loading_purple.svg";

const Home = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState(null);

  const POPULAR_TAG_LIST = [
    { id: 1, title: "design" },
    { id: 2, title: "user experience" },
    { id: 3, title: "user interfaces" },
  ];

  const extractParagraphs = (html, wordLimit) => {
    const paragraphs = [...html.matchAll(/<p[^>]*>(.*?)<\/p>/gis)].map(
      (match) => match[1].replace(/&nbsp;/g, " ").trim()
    );

    const truncatedText = paragraphs
      .join(" ")
      .split(/\s+/)
      .slice(0, wordLimit)
      .join(" ");

    return (
      truncatedText +
      (truncatedText.split(" ").length >= wordLimit ? "..." : "")
    );
  };

  // const truncateHtml = (html, maxLength) => {
  //   return truncate(html, maxLength, { ellipsis: "..." });
  // };

  useEffect(() => {
    const fetchBlogData = async () => {
      const data = await fetchBlogDetail(14);
      setBlogData(data);
      // console.log(data);
    };

    fetchBlogData();
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
      <div
        id="blog"
        className="w-full flex flex-col items-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BackgroundImgBlog})`,
          backgroundSize: "100%",
        }}
      >
        <h1 className="capitalize font-medium text-5xl text-white tracking-negative-2 pt-[220px]">
          our newsroom
        </h1>
        <div className="bg-white w-[760px] h-14 pl-5 pr-2 flex justify-between items-center rounded-lg mt-[40px]">
          <div className="w-full pr-2 flex gap-2 items-center">
            <FaSearch className="text-custom-gray" />
            <input
              type="search"
              placeholder="Search article"
              className="w-full h-10 placeholder-custom-gray text-base tracking-negative-2 focus:outline-none"
            />
          </div>
          <ButtonSearch text="Search" />
        </div>
        <div className="w-[760px] flex gap-4 items-center mt-[23px]">
          <span className="capitalize font-normal text-base text-white tracking-negative-2">
            popular tags:
          </span>
          {POPULAR_TAG_LIST.map((list) => (
            <button
              key={list.id}
              type="button"
              className="backdrop-blur-sm bg-black/20 px-[17px] py-[6px] capitalize font-medium text-sm text-white tracking-negative-2 border-2 border-white rounded-md"
            >
              {list.title}
            </button>
          ))}
        </div>
        <div
          className=" bg-white w-[1140px] h-[381px] pr-12 flex justify-center items-center rounded-[17px] overflow-hidden shadow-xl mt-24"
          style={{
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.12)",
          }}
        >
          <img src={LoadingPurple} className="animate-spin h-16" />
        </div>
      </div>
    );
  }

  // const cleanHtml = (html) => {
  //   return html.replace(/<figure[^>]*>.*?<\/figure>/gis, "");
  // };

  const createdAt = blogData.created_at;
  const UpdatedAt = blogData.updated_at;
  const formattedCreatedAt = formatDate(createdAt);
  const formattedUpdatedAt = formatDate(UpdatedAt);

  const handleToBlogDetail = (id, slug) => {
    localStorage.setItem("blogId", id);

    navigate(`/blog/${slug}`);
  };

  return (
    <div
      id="blog"
      className="w-full flex flex-col items-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BackgroundImgBlog})`,
        backgroundSize: "100%",
      }}
    >
      <h1 className="capitalize font-medium text-5xl text-white tracking-negative-2 pt-[220px]">
        our newsroom
      </h1>
      <div className="bg-white w-[760px] h-14 pl-5 pr-2 flex justify-between items-center rounded-lg mt-[40px]">
        <div className="w-full pr-2 flex gap-2 items-center">
          <FaSearch className="text-custom-gray" />
          <input
            type="search"
            placeholder="Search article"
            className="w-full h-10 placeholder-custom-gray text-base tracking-negative-2 focus:outline-none"
          />
        </div>
        <ButtonSearch text="Search" />
      </div>
      <div className="w-[760px] flex gap-4 items-center mt-[23px]">
        <span className="capitalize font-normal text-base text-white tracking-negative-2">
          popular tags:
        </span>
        {POPULAR_TAG_LIST.map((list) => (
          <button
            key={list.id}
            type="button"
            className="backdrop-blur-sm bg-black/20 px-[17px] py-[6px] capitalize font-medium text-sm text-white tracking-negative-2 border-2 border-white rounded-md"
          >
            {list.title}
          </button>
        ))}
      </div>
      <div
        onClick={() => handleToBlogDetail(blogData.id, blogData.slug)}
        className=" bg-white w-[1140px] h-[381px] pr-12 flex justify-between items-center rounded-[17px] overflow-hidden shadow-xl mt-24 cursor-pointer"
        style={{
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.12)",
        }}
      >
        <img src={blogData.imageurl} />
        <div className="w-full h-full pl-8 py-8 flex flex-col justify-between">
          <div>
            <div className="bg-custom-purple/20 w-max px-4 py-1 rounded-3xl mb-4">
              <span className="uppercase font-semibold text-base text-custom-purple tracking-negative-2">
                featured
              </span>
            </div>
            <h2 className="capitalize font-semibold text-4xl text-custom-blue tracking-negative-2 mb-5">
              {blogData.title}
            </h2>
            <p className="font-light text-lg text-custom-gray tracking-negative-2">
              {extractParagraphs(blogData.message, 20)}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="space-y-1">
                <h4 className="capitalize font-medium text-base text-custom-blue tracking-negative-2">
                  {blogData.author.Full_Name}
                </h4>
                <div className="flex gap-1 items-center">
                  <div className="w-4 h-4 bg-green-500 flex justify-center items-center rounded-full">
                    <IoIosCheckmark className="text-white text-xl" />
                  </div>
                  <em className="font-light text-sm text-gray-500 tracking-negative-2">
                    Verified admin
                  </em>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="capitalize font-normal text-base">
                {formattedCreatedAt}
              </span>
              <i
                className={`font-medium text-sm text-custom-gray ${
                  formattedCreatedAt === formattedUpdatedAt ? "hidden" : ""
                }`}
              >
                Last update: {formattedUpdatedAt}
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
