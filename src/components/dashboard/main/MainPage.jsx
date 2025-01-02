import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { IoIosArrowDown, IoMdAddCircle } from "react-icons/io";
import { RxDragHandleDots2 } from "react-icons/rx";
import {
  MdCalendarToday,
  MdArrowDropUp,
  MdArrowDropDown,
  MdMoreHoriz,
} from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { task_lists } from "@/models/dashboard/main/taskLists";
import { table_lists } from "@/models/dashboard/main/tableLists";
import { complex_table_lists } from "@/models/dashboard/main/complexTableLists";
import Calendar from "@/components/dashboard/main/Calendar";
import TeamMembers from "@/components/dashboard/main/TeamMembers";
import Safety from "@/components/dashboard/main/Safety";
import Cashback from "@/components/dashboard/main/Cashback";
import TableIcon from "@/assets/svg/active_tables_icon.svg";
import DollarIcon from "@/assets/svg/dollar_icon.svg";
import UsCircleIcon from "@/assets/svg/us_circle_icon.svg";
import NewTasksIcon from "@/assets/svg/new_tasks_icon.svg";
import DocumentIcon from "@/assets/svg/document_icon.svg";
import TasksIcon from "@/assets/svg/tasks_icon.svg";
// import WeeklyRevenue from "@/assets/svg/weekly_revenue_chart.svg";
import Sign from "@/assets/svg/group_97.svg";
import Vector13 from "@/assets/svg/vector_13.svg";
import Vector14 from "@/assets/svg/vector_14.svg";
import Approved from "@/assets/svg/approved.svg";
import Disable from "@/assets/svg/disable.svg";
import ErrorStatus from "@/assets/svg/error.svg";
import FireIcon from "@/assets/svg/fire_icon.svg";
import TimerIcon from "@/assets/svg/timer_icon.svg";
import VideoFormatIcon from "@/assets/svg/video_format_icon.svg";
import Avatar1 from "@/assets/png/avatar1.png";
import Avatar2 from "@/assets/png/avatar2.png";
import Avatar3 from "@/assets/png/avatar3.png";
import Avatar4 from "@/assets/png/avatar4.png";

ChartJS.register(ArcElement, Tooltip, Legend);

const MainPage = () => {
  const [isChecked, setIsChecked] = useState({});
  const handleCheckboxChange = (id) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    return () => {
      if (chart) {
        chart.destroy(); // Hancurkan chart saat komponen di-unmount atau dirender ulang
      }
    };
  }, []);

  const data = {
    labels: ["Your files", "System", "Others"],
    datasets: [
      {
        label: "Votes",
        data: [60, 17, 23], // Persentase atau nilai tiap bagian
        backgroundColor: [
          "#4318FF", // Warna ungu
          "#6AD2FF", // Warna biru
          "#EFF4FB", // Warna kuning
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Mengaktifkan legenda
      },
      tooltip: {
        enabled: true, // Tooltip tetap aktif
      },
    },
  };

  return (
    <div className="bg-custom-light min-h-screen w-screen flex flex-col items-center ml-[18.125rem] pl-5">
      <div className="w-full">
        <div className="w-full flex flex-wrap">
          <div className="w-1/6 pr-5 pb-5">
            <div className="bg-white h-[6.0625rem] px-4 flex items-center rounded-3xl space-x-[1.125rem]">
              <div className="bg-custom-light w-14 h-14 rounded-full flex justify-center items-center">
                <img className="scale-110" src={TableIcon} />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-medium text-sm text-custom-gray tracking-negative-2">
                  Earnings
                </span>
                <span className="font-bold text-2xl text-custom-blue tracking-negative-2">
                  $350.4
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/6 pr-5 pb-5">
            <div className="bg-white h-[6.0625rem] px-4 flex items-center rounded-3xl space-x-[1.125rem]">
              <div className="bg-custom-light w-14 h-14 rounded-full flex justify-center items-center">
                <img className="scale-105" src={DollarIcon} />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-medium text-sm text-custom-gray tracking-negative-2">
                  Spend this month
                </span>
                <span className="font-bold text-2xl text-custom-blue tracking-negative-2">
                  $642.39
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/6 pr-5 pb-5">
            <div className="bg-white h-[6.0625rem] px-4 flex items-center rounded-3xl space-x-[1.125rem]">
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
          </div>
          <div className="w-1/6 pr-5 pb-5">
            <div className="bg-white h-[6.0625rem] px-4 flex items-center rounded-3xl space-x-[1.125rem]">
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
                  <img src={UsCircleIcon} className="" />
                  <IoIosArrowDown className="text-custom-gray scale-125" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/6 pr-5 pb-5">
            <div className="bg-white h-[6.0625rem] px-4 flex items-center rounded-3xl space-x-[1.125rem]">
              <div className="bg-custom-light w-14 h-14 rounded-full flex justify-center items-center">
                <img src={NewTasksIcon} />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-base text-custom-gray tracking-negative-2">
                  New tasks
                </span>
                <span className="font-bold text-lg text-custom-blue tracking-negative-2">
                  154
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/6 pr-5 pb-5">
            <div className="bg-white h-[6.0625rem] px-4 flex items-center rounded-3xl space-x-[1.125rem]">
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
          <div className="w-2/4 pr-5 pb-5">
            <div className="bg-white h-[21.5625rem] px-8 py-[1.625rem] rounded-3xl">
              <div className="w-full h-full flex flex-col justify-between items-center">
                <div className="w-full flex justify-between items-center">
                  <div className="w-[7.8125rem] h-9 bg-custom-light flex space-x-[0.375rem] items-center px-3 py-[0.625rem] rounded-lg">
                    <MdCalendarToday className="text-custom-gray" />
                    <span className="font-medium text-sm text-custom-gray tracking-negative-2">
                      This month
                    </span>
                  </div>
                  <div className="w-[2.0625rem] h-[2.0625rem] bg-custom-light flex justify-center items-center rounded-lg">
                    <img className="scale-90" src={TableIcon} />
                  </div>
                </div>
                <div className="flex justify-between w-full h-full pt-7">
                  <div className="w-44 flex flex-col">
                    <span className="font-bold text-3xl text-custom-blue tracking-negative-2">
                      $37.5K
                    </span>
                    <div className="flex items-center">
                      <span className="font-medium text-sm text-custom-gray mr-3">
                        Total Spent
                      </span>
                      <MdArrowDropUp className="text-custom-05CD99 scale-125 mr-1" />
                      <span className="font-bold text-sm text-custom-05CD99">
                        +2.45%
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mt-6">
                      <FaCircleCheck className="text-custom-05CD99" />
                      <span className="font-bold text-base text-custom-05CD99">
                        On track
                      </span>
                    </div>
                  </div>
                  <div className="h-full flex flex-col justify-between ml-4">
                    <div className="relative pt-10">
                      <img
                        className="absolute left-[39%] top-[9%]"
                        src={Sign}
                      />
                      <img className="" src={Vector13} />
                      <img className="absolute top-[70%]" src={Vector14} />
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase font-medium text-xs text-custom-gray tracking-negative-2">
                        sep
                      </span>
                      <span className="uppercase font-medium text-xs text-custom-gray tracking-negative-2">
                        oct
                      </span>
                      <span className="uppercase font-medium text-xs text-custom-gray tracking-negative-2">
                        nov
                      </span>
                      <span className="uppercase font-medium text-xs text-custom-gray tracking-negative-2">
                        des
                      </span>
                      <span className="uppercase font-medium text-xs text-custom-gray tracking-negative-2">
                        jan
                      </span>
                      <span className="uppercase font-medium text-xs text-custom-gray tracking-negative-2">
                        feb
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/4 pr-5 pb-5">
            <div className="bg-white h-[21.5625rem] px-8 pt-[1.625rem] pb-[1.875rem] rounded-3xl">
              <div className="w-full h-full flex flex-col justify-between items-center">
                <div className="w-full flex justify-between items-center">
                  <span className="font-bold text-2xl text-custom-blue tracking-negative-2">
                    Weekly Revenue
                  </span>
                  <div className="w-[2.0625rem] h-[2.0625rem] bg-custom-light flex justify-center items-center rounded-lg">
                    <img className="scale-90" src={TableIcon} />
                  </div>
                </div>
                <div className="w-full h-full flex justify-between">
                  <div className="h-full flex flex-col justify-end items-center space-y-3">
                    <div className="bg-custom-E6EDF9 w-[18px] h-[63%] rounded-t-full flex flex-col justify-end items-center">
                      <div className="bg-custom-84D9FD w-full h-[65%] flex flex-col justify-end items-center">
                        <div className="bg-custom-775FFC w-full h-[50%]"></div>
                      </div>
                    </div>
                    <span className="font-medium text-base text-custom-gray">
                      17
                    </span>
                  </div>
                  <div className="h-full flex flex-col justify-end items-center space-y-3">
                    <div className="bg-custom-E6EDF9 w-[18px] h-[58%] rounded-t-full flex flex-col justify-end items-center">
                      <div className="bg-custom-84D9FD w-full h-[65%] flex flex-col justify-end items-center">
                        <div className="bg-custom-775FFC w-full h-[50%]"></div>
                      </div>
                    </div>
                    <span className="font-medium text-base text-custom-gray">
                      18
                    </span>
                  </div>
                  <div className="h-full flex flex-col justify-end items-center space-y-3">
                    <div className="bg-custom-E6EDF9 w-[18px] h-[52%] rounded-t-full flex flex-col justify-end items-center">
                      <div className="bg-custom-84D9FD w-full h-[65%] flex flex-col justify-end items-center">
                        <div className="bg-custom-775FFC w-full h-[50%]"></div>
                      </div>
                    </div>
                    <span className="font-medium text-base text-custom-gray">
                      19
                    </span>
                  </div>
                  <div className="h-full flex flex-col justify-end items-center space-y-3">
                    <div className="bg-custom-E6EDF9 w-[18px] h-[63%] rounded-t-full flex flex-col justify-end items-center">
                      <div className="bg-custom-84D9FD w-full h-[65%] flex flex-col justify-end items-center">
                        <div className="bg-custom-775FFC w-full h-[50%]"></div>
                      </div>
                    </div>
                    <span className="font-medium text-base text-custom-gray">
                      20
                    </span>
                  </div>
                  <div className="h-full flex flex-col justify-end items-center space-y-3">
                    <div className="bg-custom-E6EDF9 w-[18px] h-[50%] rounded-t-full flex flex-col justify-end items-center">
                      <div className="bg-custom-84D9FD w-full h-[65%] flex flex-col justify-end items-center">
                        <div className="bg-custom-775FFC w-full h-[50%]"></div>
                      </div>
                    </div>
                    <span className="font-medium text-base text-custom-gray">
                      21
                    </span>
                  </div>
                  <div className="h-full flex flex-col justify-end items-center space-y-3">
                    <div className="bg-custom-E6EDF9 w-[18px] h-[55%] rounded-t-full flex flex-col justify-end items-center">
                      <div className="bg-custom-84D9FD w-full h-[65%] flex flex-col justify-end items-center">
                        <div className="bg-custom-775FFC w-full h-[50%]"></div>
                      </div>
                    </div>
                    <span className="font-medium text-base text-custom-gray">
                      22
                    </span>
                  </div>
                  <div className="h-full flex flex-col justify-end items-center space-y-3">
                    <div className="bg-custom-E6EDF9 w-[18px] h-[58%] rounded-t-full flex flex-col justify-end items-center">
                      <div className="bg-custom-84D9FD w-full h-[65%] flex flex-col justify-end items-center">
                        <div className="bg-custom-775FFC w-full h-[50%]"></div>
                      </div>
                    </div>
                    <span className="font-medium text-base text-custom-gray">
                      23
                    </span>
                  </div>
                  <div className="h-full flex flex-col justify-end items-center space-y-3">
                    <div className="bg-custom-E6EDF9 w-[18px] h-[50%] rounded-t-full flex flex-col justify-end items-center">
                      <div className="bg-custom-84D9FD w-full h-[65%] flex flex-col justify-end items-center">
                        <div className="bg-custom-775FFC w-full h-[50%]"></div>
                      </div>
                    </div>
                    <span className="font-medium text-base text-custom-gray">
                      24
                    </span>
                  </div>
                  <div className="h-full flex flex-col justify-end items-center space-y-3">
                    <div className="bg-custom-E6EDF9 w-[18px] h-[63%] rounded-t-full flex flex-col justify-end items-center">
                      <div className="bg-custom-84D9FD w-full h-[65%] flex flex-col justify-end items-center">
                        <div className="bg-custom-775FFC w-full h-[50%]"></div>
                      </div>
                    </div>
                    <span className="font-medium text-base text-custom-gray">
                      25
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/4 pr-5 pb-5">
            <div className="bg-white h-[21.5625rem] px-8 py-[1.625rem] rounded-3xl">
              <div className="h-full w-full flex flex-col justify-between">
                <div className="w-full flex justify-between items-center">
                  <h2 className="font-bold text-2xl text-custom-blue tracking-negative-2">
                    Check Table
                  </h2>
                  <div className="w-[33px] h-[33px] bg-custom-light flex justify-center items-center rounded-lg">
                    <MdMoreHoriz className="text-custom-purple scale-150" />
                  </div>
                </div>
                <div className="w-full">
                  <table>
                    <thead className="align-top h-12">
                      <tr>
                        <th className="uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left w-52">
                          Name
                        </th>
                        <th className="uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left w-44">
                          Progress
                        </th>
                        <th className="uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left w-44">
                          Quantity
                        </th>
                        <th className="uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left">
                          Date
                        </th>
                      </tr>
                    </thead>
                    {/* <div className="w-full border-2"></div> */}
                    <tbody>
                      {table_lists.map((list) => (
                        <tr
                          key={list.id}
                          className={
                            list.id === table_lists.length
                              ? "align-top"
                              : "h-10 align-top"
                          }
                        >
                          <td className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={list.forId}
                              className="w-[1.125rem] h-[1.125rem] accent-custom-purple ring-custom-purple"
                            />
                            <label
                              htmlFor={list.forId}
                              className="font-bold text-sm text-custom-blue tracking-negative-2 cursor-pointer"
                            >
                              {list.name}
                            </label>
                          </td>
                          <td className="font-bold text-sm text-custom-blue tracking-negative-2">
                            {list.progress}
                          </td>
                          <td className="font-bold text-sm text-custom-blue tracking-negative-2">
                            {list.quantity}
                          </td>
                          <td className="font-bold text-sm text-custom-blue tracking-negative-2">
                            {list.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 pr-5 pb-5">
            <div className="bg-white h-[21.5625rem] px-8 py-[1.625rem] rounded-3xl">
              <div className="w-full h-full flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm text-custom-gray tracking-negative-2">
                    Daily Traffic
                  </span>
                  <div className="flex gap-1 items-center">
                    <MdArrowDropUp className="text-custom-05CD99 scale-125" />
                    <span className="font-bold text-sm text-custom-05CD99 tracking-negative-2">
                      +2.45%
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-[2.125rem] text-custom-blue tracking-negative-2">
                    2.579{" "}
                    <span className="font-medium text-sm text-custom-gray tracking-negative-2">
                      Visitors
                    </span>
                  </span>
                </div>
                <div className="h-full flex justify-between">
                  <div className="h-full flex flex-col justify-end items-center gap-4">
                    <div className="bg-gradient-to-b from-custom-purple to-custom-purple/30 w-4 h-[50%] rounded-t-full"></div>
                    <div className="font-bold text-xs text-custom-gray tracking-negative-2">
                      00
                    </div>
                  </div>
                  <div className="h-full flex flex-col justify-end items-center gap-4">
                    <div className="bg-gradient-to-b from-custom-purple to-custom-purple/30 w-4 h-[35%] rounded-t-full"></div>
                    <div className="font-bold text-xs text-custom-gray tracking-negative-2">
                      04
                    </div>
                  </div>
                  <div className="h-full flex flex-col justify-end items-center gap-4">
                    <div className="bg-gradient-to-b from-custom-purple to-custom-purple/30 w-4 h-[70%] rounded-t-full"></div>
                    <div className="font-bold text-xs text-custom-gray tracking-negative-2">
                      08
                    </div>
                  </div>
                  <div className="h-full flex flex-col justify-end items-center gap-4">
                    <div className="bg-gradient-to-b from-custom-purple to-custom-purple/30 w-4 h-[45%] rounded-t-full"></div>
                    <div className="font-bold text-xs text-custom-gray tracking-negative-2">
                      12
                    </div>
                  </div>
                  <div className="h-full flex flex-col justify-end items-center gap-4">
                    <div className="bg-gradient-to-b from-custom-purple to-custom-purple/30 w-4 h-[60%] rounded-t-full"></div>
                    <div className="font-bold text-xs text-custom-gray tracking-negative-2">
                      14
                    </div>
                  </div>
                  <div className="h-full flex flex-col justify-end items-center gap-4">
                    <div className="bg-gradient-to-b from-custom-purple to-custom-purple/30 w-4 h-[80%] rounded-t-full"></div>
                    <div className="font-bold text-xs text-custom-gray tracking-negative-2">
                      16
                    </div>
                  </div>
                  <div className="h-full flex flex-col justify-end items-center gap-4">
                    <div className="bg-gradient-to-b from-custom-purple to-custom-purple/30 w-4 h-[20%] rounded-t-full"></div>
                    <div className="font-bold text-xs text-custom-gray tracking-negative-2">
                      18
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 pr-5 pb-5">
            <div className="bg-white h-[21.5625rem] px-8 py-[1.625rem] rounded-3xl">
              <div className="w-full h-full flex flex-col justify-between">
                <div className="w-full flex justify-between">
                  <span className="font-bold text-base text-custom-blue tracking-negative-2">
                    Your Pie Chart
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-xs text-custom-gray tracking-negative-2">
                      Monthly
                    </span>
                    <MdArrowDropDown className="text-custom-gray" />
                  </div>
                </div>
                <div className="relative h-full">
                  <Pie
                    ref={chartRef}
                    data={data}
                    options={options}
                    className="scale-[73%] absolute bottom-[2%] left-[20%]"
                  />
                </div>
                <div
                  className="bg-white flex justify-between items-center py-2 rounded-2xl shadow-xl"
                  style={{
                    boxShadow: "0 1.25rem 1.875rem rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="w-full flex flex-col justify-center items-center -space-y-1">
                    <div className="flex justify-center items-center">
                      <BsDot className="text-custom-purple scale-[280%]" />
                      <span className="font-medium text-sm text-custom-gray tracking-negative-2">
                        Your files
                      </span>
                    </div>
                    <span className="font-bold text-lg text-custom-blue tracking-negative-2">
                      63%
                    </span>
                  </div>
                  <div className="h-14 border border-custom-light"></div>
                  <div className="w-full flex flex-col justify-center items-center -space-y-1">
                    <div className="flex justify-center items-center">
                      <BsDot className="text-custom-6AD2FF scale-[280%]" />
                      <span className="font-medium text-sm text-custom-gray tracking-negative-2">
                        System
                      </span>
                    </div>
                    <span className="font-bold text-lg text-custom-blue tracking-negative-2">
                      25%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/4 pr-5 pb-5">
            <div className="bg-white h-[21.5625rem] py-[1.625rem] rounded-3xl">
              <div className="h-full w-full flex flex-col space-y-5">
                <div className="w-full px-8 flex justify-between items-center">
                  <h2 className="font-bold text-2xl text-custom-blue tracking-negative-2">
                    Complex Table
                  </h2>
                  <div className="w-[33px] h-[33px] bg-custom-light flex justify-center items-center rounded-lg">
                    <MdMoreHoriz className="text-custom-purple scale-150" />
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full px-8">
                    <table className="h-9">
                      <thead>
                        <tr>
                          <th className="uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left w-52">
                            name
                          </th>
                          <th className="uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left w-44">
                            status
                          </th>
                          <th className="uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left w-44">
                            date
                          </th>
                          <th className="uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left w-28">
                            progress
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <hr className="border border-custom-light mb-4" />
                  <div className="w-full px-8">
                    <table>
                      <thead>
                        <tr>
                          <th className="uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left w-52"></th>
                          <th className="uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left w-44"></th>
                          <th className="uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left w-44"></th>
                          <th className="uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left w-28"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {complex_table_lists.map((list) => (
                          <tr
                            key={list.id}
                            className={
                              list.id === complex_table_lists.length
                                ? "align-top"
                                : "h-12 align-top"
                            }
                          >
                            <td className="flex items-center gap-2">
                              <span className="font-bold text-sm text-custom-blue tracking-negative-2 cursor-pointer">
                                {list.name}
                              </span>
                            </td>
                            <td className="font-bold text-sm text-custom-blue tracking-negative-2">
                              <div className="flex items-center space-x-2">
                                {list.status === "Approved" ? (
                                  <img src={Approved} />
                                ) : list.status === "Disable" ? (
                                  <img src={Disable} />
                                ) : list.status === "Error" ? (
                                  <img src={ErrorStatus} />
                                ) : (
                                  ""
                                )}
                                <span>{list.status}</span>
                              </div>
                            </td>
                            <td className="font-bold text-sm text-custom-blue tracking-negative-2">
                              {list.date}
                            </td>
                            <td className="font-bold text-sm text-custom-blue tracking-negative-2">
                              <div className="w-full h-2 bg-custom-EFF4FB rounded-full">
                                <div
                                  className="h-full bg-custom-purple rounded-full"
                                  style={{
                                    width: `${list.progress}%`,
                                  }}
                                ></div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <-------------------------------------TASKS-------------------------------------> */}
          <div className="w-1/4 pr-5 pb-5">
            <div className="bg-white h-[21.5625rem] px-8 pt-[1.625rem] pb-[50px] rounded-3xl">
              <div className="w-full h-full flex flex-col space-y-[38px]">
                <div className="w-full flex justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-[33px] h-[33px] bg-custom-light flex justify-center items-center rounded-full">
                      <img src={TasksIcon} className="scale-90" />
                    </div>
                    <h2 className="font-bold text-2xl tracking-negative-2 text-custom-blue">
                      Tasks
                    </h2>
                  </div>
                  <div className="w-[33px] h-[33px] bg-custom-light flex justify-center items-center rounded-lg">
                    <MdMoreHoriz className="text-custom-purple scale-150" />
                  </div>
                </div>
                <div className="flex flex-col space-y-5 pl-[6.4px] pr-[7.5px]">
                  {task_lists.map((list) => (
                    <div
                      key={list.id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center space-x-4">
                        <input
                          type="checkbox"
                          id={list.id}
                          onChange={() => handleCheckboxChange(list.id)}
                          checked={isChecked[list.id] || false}
                          className="w-[18px] h-[18px] accent-custom-purple border border-red-500"
                        />
                        <label
                          htmlFor={list.id}
                          className={`text-base cursor-pointer ${
                            isChecked[list.id]
                              ? "font-bold text-custom-blue"
                              : "font-medium text-custom-gray"
                          }`}
                        >
                          {list.name}
                        </label>
                      </div>
                      <RxDragHandleDots2 className="text-custom-gray scale-150" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Calendar />
          <div className="w-1/4 pr-5 pb-5">
            <div className="bg-white h-[21.5625rem] pt-[1.625rem] flex flex-col justify-between rounded-3xl">
              <div className="w-full px-5">
                <div className="w-full flex items-center gap-3">
                  <div className="bg-custom-FEEFEE w-12 h-12 rounded-2xl flex">
                    <img src={FireIcon} className="mx-auto my-auto" />
                  </div>
                  <div className="flex flex-col -space-y-[2px]">
                    <span className="font-bold text-sm text-custom-gray tracking-negative-2">
                      Business Design
                    </span>
                    <span className="font-bold text-base text-custom-blue tracking-negative-2">
                      New lession is available
                    </span>
                  </div>
                </div>
                <h2 className="mt-[38px] max-w-80 font-bold text-lg text-custom-blue tracking-negative-2">
                  What do you need to know to create better products?
                </h2>
              </div>
              <div className="bg-custom-FAFCFE px-5 pt-[17px] pb-[22px] space-y-9 rounded-b-3xl">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-[6px]">
                    <img src={TimerIcon} />
                    <span className="font-bold text-sm text-custom-blue tracking-negative-2">
                      85 mins
                    </span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <img src={VideoFormatIcon} />
                    <span className="font-bold text-sm text-custom-blue tracking-negative-2">
                      Video Format
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src={Avatar1}
                      className="w-[30px] h-[30px] object-cover ring-2 ring-white rounded-full"
                    />
                    <img
                      src={Avatar2}
                      className="-ml-2 w-[30px] h-[30px] object-cover ring-2 ring-white rounded-full"
                    />
                    <img
                      src={Avatar3}
                      className="-ml-2 w-[30px] h-[30px] object-cover ring-2 ring-white rounded-full"
                    />
                    <img
                      src={Avatar4}
                      className="-ml-2 w-[30px] h-[30px] object-cover ring-2 ring-white rounded-full"
                    />
                    <div className="bg-custom-outline-gray -ml-2 w-[30px] h-[30px] flex ring-2 ring-white rounded-full">
                      <span className="mx-auto my-auto font-bold text-[10px] text-custom-purple">
                        20+
                      </span>
                    </div>
                  </div>
                  <button className="bg-custom-purple px-6 py-2 font-bold text-sm text-white tracking-negative-2 rounded-2xl">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <TeamMembers />
          <Safety />
          <Cashback />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
