import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosCheckmark } from "react-icons/io";
import { fetchBlogDetail } from "@/helpers/axiosGetBlogDetail";
import TitleSection from "../general/TitleSection";
import DescSection from "../general/DescSection";
import ButtonAction from "../general/ButtonAction";
import LoadingPurple from "@/assets/svg/loading_purple.svg";

const PopularArticles = () => {
  const navigate = useNavigate();
  const [blogData1, setBlogData1] = useState(null);
  const [blogData2, setBlogData2] = useState(null);

  useEffect(() => {
    const fetchBlogData1 = async () => {
      const data = await fetchBlogDetail(14);
      setBlogData1(data);
      // console.log(data);
    };

    const fetchBlogData2 = async () => {
      const data = await fetchBlogDetail(15);
      setBlogData2(data);
      // console.log(data);
    };

    fetchBlogData1();
    fetchBlogData2();
  }, []);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  if (!blogData1 || !blogData2) {
    return (
      <div className="pt-24">
        <div className="w-[1140px] mx-auto space-y-12">
          <div className="space-y-4">
            <TitleSection title="popular articles" />
            <div className="flex justify-between">
              <DescSection
                text="We share common trends, strategies ideas, opinions, short & long
            stories from the team behind company."
              />
              <ButtonAction text="View all" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={LoadingPurple} className="animate-spin h-16" />
          </div>
        </div>
      </div>
    );
  }

  const createdAt1 = blogData1.created_at;
  const createdAt2 = blogData2.created_at;
  const UpdatedAt1 = blogData1.updated_at;
  const UpdatedAt2 = blogData2.updated_at;
  const formattedCreatedAt1 = formatDate(createdAt1);
  const formattedCreatedAt2 = formatDate(createdAt2);
  const formattedUpdatedAt1 = formatDate(UpdatedAt1);
  const formattedUpdatedAt2 = formatDate(UpdatedAt2);

  const handleToBlogDetail = (id, slug) => {
    localStorage.setItem("blogId", id);

    navigate(`/blog/${slug}`);
  };

  return (
    <div className="pt-24">
      <div className="w-[1140px] mx-auto space-y-12">
        <div className="space-y-4">
          <TitleSection title="popular articles" />
          <div className="flex justify-between">
            <DescSection
              text="We share common trends, strategies ideas, opinions, short & long
            stories from the team behind company."
            />
            <ButtonAction text="View all" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div
            onClick={() => handleToBlogDetail(blogData1.id, blogData1.slug)}
            className="w-[555px] h-[600px] rounded-[17px] overflow-hidden bg-cover cursor-pointer"
            style={{ backgroundImage: `url(${blogData1.imageurl})` }}
          >
            <div className="bg-gradient-to-b from-transparent via-custom-163146/45 to-custom-152532 h-full w-full px-[26px] pt-8 pb-[42px] flex flex-col justify-between">
              <div className="bg-white w-max px-4 py-1 rounded-3xl mb-4">
                <span className="uppercase font-semibold text-base text-green-500 tracking-negative-2">
                  featured
                </span>
              </div>
              <div className="space-y-8">
                <h2 className="font-semibold text-4xl text-white tracking-negative-2">
                  {blogData1.title}
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <div>
                      <h4 className="capitalize font-medium text-base text-white tracking-negative-2">
                        {blogData1.author.Full_Name}
                      </h4>
                      <div className="flex gap-1 items-center">
                        <div className="w-4 h-4 bg-green-500 flex justify-center items-center rounded-full">
                          <IoIosCheckmark className="text-white text-xl" />
                        </div>
                        <em className="font-light text-sm text-gray-400 tracking-negative-2">
                          Verified admin
                        </em>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="capitalize font-normal text-base text-white">
                      {formattedCreatedAt1}
                    </span>
                    <i
                      className={`font-medium text-sm text-white ${
                        formattedCreatedAt1 === formattedUpdatedAt1
                          ? "hidden"
                          : ""
                      }`}
                    >
                      Last update: {formattedUpdatedAt1}
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleToBlogDetail(blogData2.id, blogData2.slug)}
            className="w-[555px] h-[600px] rounded-[17px] overflow-hidden bg-cover cursor-pointer"
            style={{ backgroundImage: `url(${blogData2.imageurl})` }}
          >
            <div className="bg-gradient-to-b from-transparent via-custom-163146/45 to-custom-152532 h-full w-full px-[26px] pt-8 pb-[42px] flex flex-col justify-between">
              <div className="bg-white w-max px-4 py-1 rounded-3xl mb-4">
                <span className="uppercase font-semibold text-base text-green-500 tracking-negative-2">
                  featured
                </span>
              </div>
              <div className="space-y-8">
                <h2 className="font-semibold text-4xl text-white tracking-negative-2">
                  {blogData2.title}
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <div>
                      <h4 className="capitalize font-medium text-base text-white tracking-negative-2">
                        {blogData2.author.Full_Name}
                      </h4>
                      <div className="flex gap-1 items-center">
                        <div className="w-4 h-4 bg-green-500 flex justify-center items-center rounded-full">
                          <IoIosCheckmark className="text-white text-xl" />
                        </div>
                        <em className="font-light text-sm text-gray-400 tracking-negative-2">
                          Verified admin
                        </em>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="capitalize font-normal text-base text-white">
                      {formattedCreatedAt2}
                    </span>
                    <i
                      className={`font-medium text-sm text-white ${
                        formattedCreatedAt2 === formattedUpdatedAt2
                          ? "hidden"
                          : ""
                      }`}
                    >
                      Last update: {formattedUpdatedAt2}
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularArticles;
