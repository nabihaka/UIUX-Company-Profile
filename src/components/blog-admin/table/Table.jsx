import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineRemoveRedEye, MdDeleteOutline } from "react-icons/md";
import DOMPurify from "dompurify";
import truncate from "html-truncate";
import { LuArrowUpDown } from "react-icons/lu";
import { fetchBlogData } from "@/helpers/axiosGetBlogData";
import { DeleteConfirm } from "../modal/DeleteConfirm";
import LoadingImg from "@/assets/svg/loading.svg";
import LoadingPurple from "@/assets/svg/loading_purple.svg";

export const Table = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [blogData, setBlogData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [isDescending, setIsDescending] = useState(true);
  // const [blogId, setBlogId] = useState(null);
  const idBlog = localStorage.getItem("blogId");

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const truncateHtml = (html, maxLength) => {
    return truncate(html, maxLength, { ellipsis: "..." });
  };

  // const truncatedMessage =

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
      // console.log(blogData);
    };

    getData();
  }, []);

  useEffect(() => {
    if (idBlog) {
      localStorage.removeItem("blogId");
    }
  }, [idBlog]);

  const cleanHtml = (html) => {
    return html.replace(/<figure[^>]*>.*?<\/figure>/gis, "");
  };

  // const handleDeleteBlog = async (id) => {};

  const handleToUpdateBlog = (id) => {
    localStorage.setItem("blogId", id);

    window.location.href = "/update-blog";
  };

  const handleToShowBlog = (id, slug) => {
    localStorage.setItem("blogId", id);

    // window.location.href = {`/blog-detail/`};
    navigate(`/blog-detail/${slug}`);
  };

  const toggleSortOrder = () => {
    setIsDescending((prev) => !prev);
  };

  const sortedBlogData = [...blogData].sort((a, b) =>
    isDescending ? b.id - a.id : a.id - b.id
  );

  return (
    <div className="bg-white w-[1400px] px-8 py-[1.625rem] space-y-5 rounded-xl transition">
      <div className="w-full flex justify-between items-center">
        <h2 className="font-bold text-2xl text-custom-blue tracking-negative-2">
          Blog List
        </h2>
        {/* ini adalah button untuk pengurutan */}
        <button
          onClick={toggleSortOrder}
          className="w-10 h-10 bg-custom-light flex justify-center items-center rounded-lg transition duration-200 ease-in-out hover:bg-gray-200 active:bg-gray-300"
        >
          <LuArrowUpDown className="text-lg text-custom-purple" />
        </button>
      </div>
      {fetchLoading ? (
        <div className="w-full flex justify-center items-center">
          <img src={LoadingPurple} className="animate-spin" />
        </div>
      ) : sortedBlogData.length === 0 ? (
        <div className="font-medium text-center text-lg text-custom-gray">
          There is no data available
        </div>
      ) : (
        <table className="w-full table-fixed border-collapse">
          <thead className="border-b-2">
            <tr>
              <th className="py-3 text-left font-bold text-md tracking-negative-2 w-12">
                No
              </th>
              <th className="py-3 text-left font-bold text-md tracking-negative-2 w-80">
                Title
              </th>
              <th className="py-3 text-left font-bold text-md tracking-negative-2">
                Desc
              </th>
              <th className="py-3 text-left font-bold text-md tracking-negative-2 w-56">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedBlogData.map((data, index) => (
              <tr key={data.id} className="border-b">
                <td className="pr-9 py-3 align-top">{index + 1}</td>
                <td className="pr-9 py-3 align-top text-justify">
                  {truncateText(data.title, 20)}
                </td>
                <td className="pr-9 py-3 align-top text-justify">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        truncateHtml(cleanHtml(data.message), 300)
                      ),
                    }}
                  />
                </td>
                <td className="pr-9 py-3">
                  <div className="flex gap-4 items-center">
                    <button
                      type="button"
                      onClick={() => handleToShowBlog(data.id, data.slug)}
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
