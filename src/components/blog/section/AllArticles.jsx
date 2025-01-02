import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import { ALL_ARTICLES_DATA1 } from "@/models/blog/all-articles/allArticles";
import { ALL_ARTICLES_DATA2 } from "@/models/blog/all-articles/allArticles";
import TitleSection from "../general/TitleSection";
import DescSection from "../general/DescSection";
import ButtonAction from "../general/ButtonAction";
import ViolaManisa from "@/assets/svg/viola_manisa.svg";
import JasonStatham from "@/assets/svg/jason_statham.svg";
import AllArticlesImg1 from "@/assets/svg/all_articles_img1.svg";
import AllArticlesImg2 from "@/assets/svg/all_articles_img2.svg";
import AllArticlesImg3 from "@/assets/svg/all_articles_img3.svg";

const AllArticles = () => {
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
        <div className="grid grid-cols-6 gap-[30px]">
          {ALL_ARTICLES_DATA1.map((data) => (
            <div
              key={data.id}
              className="bg-cover col-span-3 h-[600px] rounded-2xl overflow-hidden"
              style={{ backgroundImage: `url(${data.imgBg})` }}
            >
              <div className="h-full bg-gradient-to-b from-transparent via-custom-163146/45 to-custom-152532 px-[26px] pt-8 pb-[42px] flex flex-col justify-between">
                <div className="bg-white w-max px-4 py-1 rounded-3xl mb-4">
                  <span className="uppercase font-semibold text-base text-green-500 tracking-negative-2">
                    featured
                  </span>
                </div>
                <div className="w-full space-y-8">
                  <h2 className="font-semibold text-4xl text-white tracking-negative-2">
                    {data.title}
                  </h2>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <img src={data.imgAuthor} />
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
          {ALL_ARTICLES_DATA2.map((data) => (
            <div
              key={data.id}
              className="bg-cover col-span-2 h-[500px] rounded-2xl overflow-hidden"
              style={{ backgroundImage: `url(${data.imgBg})` }}
            >
              <div className="bg-gradient-to-b from-transparent to-custom-152532 h-full px-8 pb-10 flex items-end">
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
        <div className="flex justify-center">
          <ButtonAction text="More articles" />
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
