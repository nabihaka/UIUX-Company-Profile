import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import { POPULAR_ARTICLES_DATA } from "@/models/blog/popular-articles/popularArticles";
import TitleSection from "../general/TitleSection";
import DescSection from "../general/DescSection";
import ButtonAction from "../general/ButtonAction";
import ViolaManisa from "@/assets/svg/viola_manisa.svg";
import JoshuaWilliam from "@/assets/svg/joshua_william.svg";
import PopularArticlesImg1 from "@/assets/svg/popular_articles_img1.svg";
import PopularArticlesImg2 from "@/assets/svg/popular_articles_img2.svg";

const PopularArticles = () => {
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
          {POPULAR_ARTICLES_DATA.map((data) => (
            <div
              key={data.id}
              className="w-[555px] h-[600px] rounded-[17px] overflow-hidden bg-cover"
              style={{ backgroundImage: `url(${data.imgBg})` }}
            >
              <div className="bg-gradient-to-b from-transparent via-custom-163146/45 to-custom-152532 h-full w-full px-[26px] pt-8 pb-[42px] flex flex-col justify-between">
                <div className="bg-white w-max px-4 py-1 rounded-3xl mb-4">
                  <span className="uppercase font-semibold text-base text-green-500 tracking-negative-2">
                    featured
                  </span>
                </div>
                <div className="space-y-8">
                  <h2 className="font-semibold text-4xl text-white tracking-negative-2">
                    {data.desc}
                  </h2>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <img src={data.imgAuthor} className="object-cover" />
                      <div>
                        <h4 className="capitalize font-medium text-base text-white tracking-negative-2">
                          {data.name}
                        </h4>
                        <div className="flex gap-1 items-center">
                          <div className="w-4 h-4 bg-white/20 flex justify-center items-center rounded-full">
                            <IoIosCheckmark className="text-green-500 text-xl" />
                          </div>
                          <em className="font-light text-sm text-gray-400 tracking-negative-2">
                            Verified writer
                          </em>
                        </div>
                      </div>
                    </div>
                    <span className="capitalize font-normal text-base text-white">
                      02 may 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularArticles;
