import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdCalendarToday } from "react-icons/md";
import TableIcon from "@/assets/active_tables_icon.svg";
import DollarIcon from "@/assets/dollar_icon.svg";
import UsCircleIcon from "@/assets/us_circle_icon.svg";
import NewTasksIcon from "@/assets/new_tasks_icon.svg";
import DocumentIcon from "@/assets/document_icon.svg";
import WeeklyRevenue from "@/assets/weekly_revenue_chart.svg";

const Main = () => {
  return (
    <div className="bg-custom-light min-h-screen w-[1610px] flex flex-col items-center space-y-5 ml-72 pl-6 pr-6">
      <div className="w-full flex space-x-5">
        <div className="bg-white w-[248px] h-[97px] flex items-center px-4 rounded-3xl">
          <div className="bg-custom-light w-14 h-14 rounded-full flex justify-center items-center">
            <img className="scale-110" src={TableIcon} />
          </div>
          <div className="ml-[18px] flex flex-col justify-center">
            <span className="font-medium text-sm text-custom-gray tracking-negative-2">
              Earnings
            </span>
            <span className="font-bold text-2xl text-custom-blue tracking-negative-2">
              $350.4
            </span>
          </div>
        </div>
        <div className="bg-white w-[248px] h-[97px] flex items-center px-4 rounded-3xl">
          <div className="bg-custom-light w-14 h-14 rounded-full flex justify-center items-center">
            <img className="scale-105" src={DollarIcon} />
          </div>
          <div className="ml-[18px] flex flex-col justify-center">
            <span className="font-medium text-sm text-custom-gray tracking-negative-2">
              Spend this month
            </span>
            <span className="font-bold text-2xl text-custom-blue tracking-negative-2">
              $642.39
            </span>
          </div>
        </div>
        <div className="bg-white w-[248px] h-[97px] flex items-center pl-[23px] pr-4 rounded-3xl">
          <div className="flex flex-col justify-center">
            <span className="font-medium text-sm text-custom-gray tracking-negative-2">
              Sales
            </span>
            <span className="font-bold text-2xl text-custom-blue tracking-negative-2">
              $350.4
            </span>
            <span className="font-bold text-sm text-custom-05CD99 tracking-negative-2">
              +23%
              <span className="font-normal text-sm text-custom-gray tracking-negative-2">
                {" "}
                since last month
              </span>
            </span>
          </div>
        </div>
        <div className="bg-white w-[248px] h-[97px] flex items-center pl-[29px] pr-4 rounded-3xl">
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col justify-center">
              <span className="font-medium text-sm text-custom-gray tracking-negative-2">
                Your balance
              </span>
              <span className="font-bold text-2xl text-custom-blue tracking-negative-2">
                $1,000
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <img src={UsCircleIcon} />
              <IoIosArrowDown className="text-custom-gray scale-125" />
            </div>
          </div>
        </div>
        <div className="bg-white w-[248px] h-[97px] flex items-center px-4 rounded-3xl">
          <div className="bg-custom-light w-14 h-14 rounded-full flex justify-center items-center">
            <img src={NewTasksIcon} />
          </div>
          <div className="ml-[18px] flex flex-col justify-center">
            <span className="font-bold text-base text-custom-gray tracking-negative-2">
              New tasks
            </span>
            <span className="font-bold text-lg text-custom-blue tracking-negative-2">
              154
            </span>
          </div>
        </div>
        <div className="bg-white w-[248px] h-[97px] flex items-center px-4 rounded-3xl">
          <div className="bg-custom-light w-14 h-14 rounded-full flex justify-center items-center">
            <img src={DocumentIcon} />
          </div>
          <div className="ml-[18px] flex flex-col justify-center">
            <span className="font-medium text-sm text-custom-gray tracking-negative-2">
              Total projects
            </span>
            <span className="font-bold text-2xl text-custom-blue tracking-negative-2">
              2935
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex space-x-5">
        <div className="bg-white w-[774px] h-[345px] px-8 py-[26px] flex justify-center items-center rounded-3xl">
          <div className="border w-full h-full flex flex-col justify-between items-center">
            <div className="w-full flex justify-between items-center">
              <div className="w-[123px] h-9 bg-custom-light flex space-x-[6px] items-center px-3 py-[10px] rounded-lg">
                <MdCalendarToday className="text-custom-gray" />
                <span className="font-medium text-sm text-custom-gray tracking-negative-2">
                  This month
                </span>
              </div>
              <div className="w-[33px] h-[33px] bg-custom-light flex justify-center items-center rounded-lg">
                <img className="scale-90" src={TableIcon} />
              </div>
            </div>
            <div className="border border-red-600 flex justify-between w-full h-full pt-7">
              <div className="flex flex-col">
                <span className="font-bold text-3xl text-custom-blue tracking-negative-2">
                  $37.5K
                </span>
                <span className="font-medium text-sm text-custom-gray">
                  Total Spent
                </span>
                <span className="font-bold text-base">On track</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white w-[796px] h-[345px] px-[22px] pt-[26px] pb-[7px] flex justify-center items-center rounded-3xl">
          <div className="w-full h-full flex flex-col justify-between items-center">
            <div className="w-full flex justify-between items-center">
              <span className="font-bold text-2xl text-custom-blue tracking-negative-2">
                Weekly Revenue
              </span>
              <div className="w-[33px] h-[33px] bg-custom-light flex justify-center items-center rounded-lg">
                <img className="scale-90" src={TableIcon} />
              </div>
            </div>
            <img src={WeeklyRevenue} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
