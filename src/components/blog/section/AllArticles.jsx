import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import { ALL_ARTICLES_DATA1 } from "@/models/blog/all-articles/allArticles";
import { ALL_ARTICLES_DATA2 } from "@/models/blog/all-articles/allArticles";
import { fetchBlogForUser } from "@/helpers/axiosGetBlogForUser";
import TitleSection from "../general/TitleSection";
import DescSection from "../general/DescSection";
import ButtonAction from "../general/ButtonAction";
import LoadingPurple from "@/assets/svg/loading_purple.svg";
import ViolaManisa from "@/assets/svg/viola_manisa.svg";
import JasonStatham from "@/assets/svg/jason_statham.svg";
import AllArticlesImg1 from "@/assets/svg/all_articles_img1.svg";
import AllArticlesImg2 from "@/assets/svg/all_articles_img2.svg";
import AllArticlesImg3 from "@/assets/svg/all_articles_img3.svg";

const AllArticles = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBlogForUser(setLoading);
      setBlogData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const handleToBlogDetail = (id, slug) => {
    localStorage.setItem("blogId", id);

    navigate(`/blog/${slug}`);
  };

  return (
    <div className="pt-24">
      <div className="w-[1140px] mx-auto space-y-12">
        <div className="space-y-4">
          <TitleSection title="All articles" />
          <DescSection
            text="We share common trends, strategies ideas, opinions, short & long
            stories from the team behind company."
          />
        </div>
        {loading ? (
          <div className="w-full flex justify-center">
            <img src={LoadingPurple} className="animate-spin h-16" />
          </div>
        ) : (
          <div className="grid grid-cols-6 gap-[30px]">
            {blogData.map((data) => (
              <div
                key={data.id}
                onClick={() => handleToBlogDetail(data.id, data.slug)}
                className="bg-cover col-span-2 h-[500px] rounded-2xl overflow-hidden cursor-pointer"
                style={{ backgroundImage: `url(${data.imageurl})` }}
              >
                <div className="bg-gradient-to-b from-transparent to-custom-152532 h-full px-8 pb-10 flex items-end">
                  <div className="w-full space-y-6">
                    <h3 className="font-medium text-[28px] text-white tracking-negative-2">
                      {data.title}
                    </h3>
                    <p className="font-extralight text-xl text-white">
                      {extractParagraphs(data.message, 10)}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3 items-center">
                        {/* <img src={data.imgAuthor} className="object-cover" /> */}
                        <div>
                          <h4 className="capitalize font-medium text-base text-white tracking-negative-2">
                            {data.author.Full_Name}
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
                          {formatDate(data.created_at)}
                        </span>
                        <i
                          className={`font-medium text-xs text-white ${
                            formatDate(data.created_at) ===
                            formatDate(data.updated_at)
                              ? "hidden"
                              : ""
                          }`}
                        >
                          Last update: {formatDate(data.updated_at)}
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center">
          <ButtonAction text="More articles" />
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
