import * as React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineRemoveRedEye, MdDeleteOutline } from "react-icons/md";
import { fetchBlogData } from "@/helpers/axiosGetBlogData";
import { DeleteConfirm } from "../modal/DeleteConfirm";
import LoadingImg from "@/assets/svg/loading.svg";
import LoadingPurple from "@/assets/svg/loading_purple.svg";

const Table = () => {
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [blogData, setBlogData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  // const [blogId, setBlogId] = useState(null);
  const idBlog = localStorage.getItem("blogId");

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchBlogData(setFetchLoading);
      if (data) {
        setBlogData(data);
      }
      // else {
      //   console.log(data);
      // }
      console.log(data);
    };

    getData();
  }, []);

  useEffect(() => {
    if (idBlog) {
      localStorage.removeItem("blogId");
    }
  }, [idBlog]);

  // const handleDeleteBlog = async (id) => {};

  const handleToUpdateBlog = (id) => {
    localStorage.setItem("blogId", id);

    window.location.href = "/update-blog";
  };

  return (
    <div className="bg-white px-4 py-2 rounded-xl transition">
      {fetchLoading ? (
        <div className="w-full flex justify-center items-center">
          <img src={LoadingPurple} className="animate-spin" />
        </div>
      ) : (
        <table className="w-full table-fixed border-collapse">
          <thead className="border-b-2">
            <tr>
              <th className="py-3 text-left font-bold text-base tracking-negative-2 w-12">
                No
              </th>
              <th className="py-3 text-left font-bold text-base tracking-negative-2 w-96">
                Title
              </th>
              <th className="py-3 text-left font-bold text-base tracking-negative-2">
                Desc
              </th>
              <th className="py-3 text-left font-bold text-base tracking-negative-2 w-56">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogData.map((data, index) => (
              <tr key={data.id} className="border-b">
                <td className="pr-9 py-3 align-top">{index + 1}</td>
                <td className="pr-9 py-3 align-top text-justify">
                  {truncateText(data.title, 10)}
                </td>
                <td className="pr-9 py-3 align-top text-justify">
                  {truncateText(data.message, 50)}
                </td>
                <td className="pr-9 py-3">
                  <div className="flex gap-4 items-center">
                    <button
                      type="button"
                      className="bg-green-500 group relative w-9 h-9 flex rounded-lg hover:bg-green-600 active:bg-green-700 transition duration-200 ease-in-out"
                    >
                      <MdOutlineRemoveRedEye className="mx-auto my-auto font-bold text-xl text-white" />
                      <span className="bg-white absolute z-10 top-11 w-max px-2 py-1 font-normal text-sm tracking-negative-2 border border-black rounded-md scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-700 transition-opacity">
                        Show blog
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleToUpdateBlog(data.id)}
                      className="bg-blue-600 group relative w-9 h-9 flex rounded-lg hover:bg-blue-700 active:bg-blue-800 transition duration-200 ease-in-out"
                    >
                      <FaRegEdit className="mx-auto my-auto font-bold text-xl text-white" />
                      <span className="bg-white absolute z-10 top-11 w-max px-2 py-1 font-normal text-sm tracking-negative-2 border border-black rounded-md scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-700 transition-opacity">
                        Update blog
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedBlogId(data.id);
                        setIsOpen(true);
                      }}
                      className="bg-red-500 group relative w-9 h-9 flex rounded-lg hover:bg-red-600 active:bg-red-700 transition duration-200 ease-in-out"
                    >
                      <MdDeleteOutline className="mx-auto my-auto font-bold text-[21px] text-white" />
                      <span className="bg-white absolute z-10 top-11 w-max px-2 py-1 font-normal text-sm tracking-negative-2 border border-black rounded-md scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-700 transition-opacity">
                        Delete blog
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <DeleteConfirm
        open={isOpen}
        onClose={() => setIsOpen(false)}
        setIsOpen={setIsOpen}
        blogId={selectedBlogId}
        setBlogData={setBlogData}
        isLoading={loading}
        setLoading={setLoading}
        loadingImage={LoadingImg}
      />
    </div>
  );
};

export default Table;
