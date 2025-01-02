import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import { RECENT_ARTICLES_DATA } from "@/models/blog/recent-articles/recentArticles";
import TitleSection from "../general/TitleSection";
import DescSection from "../general/DescSection";
import ButtonAction from "../general/ButtonAction";
import ViolaManisa from "@/assets/svg/viola_manisa.svg";
import RecentArticlesImg1 from "@/assets/svg/recent_articles_img1.svg";
import RecentArticlesImg2 from "@/assets/svg/recent_articles_img2.svg";
import RecentArticlesImg3 from "@/assets/svg/recent_articles_img3.svg";
import LinaHicks from "@/assets/svg/lina_hicks.svg";

const RecentArticles = () => {
  return (
    <div className="pt-24">
      <div className="w-[1140px] mx-auto space-y-12">
        <div className="space-y-1">
          <TitleSection title="Recent articles" />
          <div className="flex justify-between items-end">
            <DescSection text="Here's what we've been up to recently" />
            <ButtonAction text="View all" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          {RECENT_ARTICLES_DATA.map((data) => (
            <div
              key={data.id}
              className="w-[360px] h-[500px] rounded-[17px] overflow-hidden bg-cover"
              style={{ backgroundImage: `url(${data.imgBg})` }}
            >
              <div className="bg-gradient-to-b from-transparent to-custom-152532 w-full h-full px-8 pb-10 flex items-end">
                <div className="w-full space-y-6">
                  <h3 className="font-medium text-[28px] text-white tracking-negative-2">
                    {data.title}
                  </h3>
                  <p className="font-extralight text-xl text-white">
                    {data.desc}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <img src={data.imgAuthor} className="object-cover" />
                      <div>
                        <h4 className="capitalize font-medium text-base text-white tracking-negative-2">
                          {data.name}
                        </h4>
                        <div className="flex gap-1 items-center">
                          <div className="w-4 h-4 bg-custom-36B37E flex justify-center items-center rounded-full">
                            <IoIosCheckmark className="text-white text-xl" />
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

export default RecentArticles;
