import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { LuArrowUpDown } from "react-icons/lu";
import Loading from "@/assets/svg/loading_purple.svg";

const Client = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAscending, setIsAscending] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/table")
      .then((response) => {
        // console.log(response?.data);
        const sortedData = response?.data.sort((a, b) => b.id - a.id);
        setData(sortedData);
        setLoading(false);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
        toast.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const toggleSortOrder = () => {
    const sortedData = [...data].sort((a, b) =>
      isAscending ? b.id - a.id : a.id - b.id
    );
    setData(sortedData);
    setIsAscending(!isAscending);
  };

  return (
    <div className="bg-custom-light min-h-screen w-full pl-[310px] pr-5 pt-5 overflow-x-auto">
      <div className="bg-white w-[1500px] mb-4 px-8 py-[1.625rem] flex flex-col space-y-5 rounded-xl">
        <div className="w-full flex justify-between items-center">
          <h2 className="font-bold text-2xl text-custom-blue tracking-negative-2">
            Client Table
          </h2>
          <button
            onClick={toggleSortOrder}
            className="w-10 h-10 bg-custom-light flex justify-center items-center rounded-lg transition duration-200 ease-in-out hover:bg-gray-200 active:bg-gray-300"
          >
            <LuArrowUpDown className="text-lg text-custom-purple" />
          </button>
        </div>

        <div className="w-full flex flex-col">
          {loading ? (
            <div className="flex justify-center items-center">
              <img src={Loading} className="animate-spin" />
            </div>
          ) : data.length === 0 ? (
            <div className="font-medium text-center text-lg text-custom-gray">
              There is no data available
            </div>
          ) : (
            <table className="table-fixed border-collapse">
              <thead>
                <tr>
                  <th className="w-16 py-4 pl-3 text-left font-bold text-md tracking-negative-2">
                    No
                  </th>
                  <th className="w-56 py-4 text-left font-bold text-md tracking-negative-2">
                    Name
                  </th>
                  <th className="w-48 py-4 text-left font-bold text-md tracking-negative-2">
                    Phone Number
                  </th>
                  <th className="w-80 py-4 text-left font-bold text-md tracking-negative-2">
                    Email
                  </th>
                  <th className="w-64 py-4 text-left font-bold text-md tracking-negative-2">
                    Date
                  </th>
                  <th className="w-96 py-4 text-left font-bold text-md tracking-negative-2">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`${
                      (index + 1) % 2 !== 0 ? "bg-custom-light" : ""
                    }`}
                    // className="border-b"
                  >
                    <td className="py-4 pl-3 font-bold text-sm text-custom-blue">
                      {index + 1}
                    </td>
                    <td className="py-4 pr-3 font-bold text-sm text-custom-blue">
                      {item.name}
                    </td>
                    <td className="py-4 pr-3 font-bold text-sm text-custom-blue">
                      {item.phone_number}
                    </td>
                    <td className="py-4 pr-3 font-bold text-sm text-custom-blue">
                      {item.email}
                    </td>
                    <td className="py-4 pr-3 font-bold text-sm text-custom-blue">
                      {item.date === null
                        ? "-"
                        : new Date(item.date).toLocaleString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          })}
                    </td>
                    <td className="py-4 font-bold text-sm text-custom-blue text-justify">
                      {item.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Client;
