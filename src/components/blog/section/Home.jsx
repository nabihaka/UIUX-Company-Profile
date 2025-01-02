import * as React from "react";
// import BackgroundImgBlog from "@/assets/png/bg_image_blog.png";
// import BackgroundImgBlog from "@/assets/svg/bg_image_blog.svg";
import BackgroundImgBlog from "@/assets/svg/bg_image_blog2.svg";
import BlogImg1 from "@/assets/svg/blog_image1.svg";
import ViolaManisa from "@/assets/svg/viola_manisa.svg";
// import { FiSearch } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import ButtonSearch from "../general/ButtonSearch";

const Home = () => {
  const POPULAR_TAG_LIST = [
    { id: 1, title: "design" },
    { id: 2, title: "user experience" },
    { id: 3, title: "user interfaces" },
  ];

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
        className=" bg-white w-[1140px] h-[381px] pr-12 flex justify-between items-center rounded-[17px] shadow-xl mt-24"
        style={{
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.12)",
        }}
      >
        <img src={BlogImg1} />
        <div className="w-full h-full pl-8 py-8 flex flex-col justify-between">
          <div>
            <div className="bg-custom-purple/20 w-max px-4 py-1 rounded-3xl mb-4">
              <span className="uppercase font-semibold text-base text-custom-purple tracking-negative-2">
                featured
              </span>
            </div>
            <h2 className="capitalize font-semibold text-4xl text-custom-blue tracking-negative-2 mb-5">
              cheap airline ticket great ways to save
            </h2>
            <p className="font-light text-lg text-custom-gray tracking-negative-2">
              In this digital generation where information can be easily
              obtained within seconds, business cards ...
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img src={ViolaManisa} className="object-cover" />
              <div>
                <h4 className="capitalize font-medium text-base text-custom-blue tracking-negative-2">
                  viola manisa
                </h4>
                <div className="flex gap-1 items-center">
                  <div className="w-4 h-4 bg-green-100 flex justify-center items-center rounded-full">
                    <IoIosCheckmark className="text-green-500 text-xl" />
                  </div>
                  <em className="font-light text-sm text-gray-500 tracking-negative-2">
                    Verified writer
                  </em>
                </div>
              </div>
            </div>
            <span className="capitalize font-normal text-base text-custom-gray">
              02 may 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
