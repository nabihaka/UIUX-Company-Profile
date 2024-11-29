import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "@/assets/svg/loading_purple.svg";
import { fetchFormLanding } from "@/helpers/axiosGetFormLanding";

const Client = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/table")
      .then((response) => {
        // console.log(response?.data);
        setData(response?.data);
        setLoading(false);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
        toast.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-custom-light min-h-screen w-screen ml-[290px] px-5">
      <div className="bg-white px-8 py-[1.625rem] flex flex-col space-y-5 rounded-3xl">
        <h2 className="font-bold text-2xl text-custom-blue tracking-negative-2">
          Client Table
        </h2>

        <div className="w-full flex flex-col">
          {loading ? (
            <div className="flex justify-center items-center">
              <img src={Loading} className="animate-spin" />
            </div>
          ) : (
            <table className="table-fixed border-collapse">
              <thead>
                <tr>
                  <th className="w-16 py-4 pl-3 uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left">
                    No
                  </th>
                  <th className="w-56 py-4 uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left">
                    Name
                  </th>
                  <th className="w-48 py-4 uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left">
                    Phone Number
                  </th>
                  <th className="w-80 py-4 uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left">
                    Email
                  </th>
                  <th className="py-4 uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left">
                    Date
                  </th>
                  <th className="w-96 py-4 uppercase font-medium text-sm text-custom-gray tracking-negative-2 text-left">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.id}
                    className={`${item.id % 2 !== 0 ? "bg-custom-light" : ""}`}
                    // className="border-b"
                  >
                    <td className="py-4 pl-3 font-bold text-sm text-custom-blue">
                      {item.id}
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
