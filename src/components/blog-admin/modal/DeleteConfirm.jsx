import * as React from "react";
import { RxCross2 } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";
import { deleteBlog } from "@/helpers/axiosDeleteBlog";

export const DeleteConfirm = ({
  open,
  onClose,
  setIsOpen,
  blogId,
  setBlogData,
  isLoading,
  setLoading,
  loadingImage,
}) => {
  const handleDeleteBlog = async () => {
    await deleteBlog(setLoading, setIsOpen, blogId, setBlogData);
  };

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white p-4 w-72 space-y-2 rounded-xl transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className="flex justify-end items-center">
          <RxCross2 onClick={onClose} className="text-xl cursor-pointer" />
        </div>
        <MdDeleteOutline className="mx-auto text-8xl text-red-500" />
        <div className="mx-auto w-56">
          <h3 className="font-bold text-xl text-center tracking-negative-2">
            Confirm Delete
          </h3>
          <p className="font-light text-base text-center tracking-negative-2">
            Are you sure you want to delete this blog?
          </p>
        </div>
        <div className="pt-4 flex gap-3 items-center">
          <button
            type="button"
            onClick={handleDeleteBlog}
            className="bg-red-500 w-full py-2 text-base font-normal text-white tracking-negative-2 rounded-lg shadow-lg hover:bg-red-600 active:bg-red-700 transition duration-200 ease-in-out"
          >
            {isLoading ? (
              <img src={loadingImage} className="h-6 mx-auto animate-spin" />
            ) : (
              "Delete"
            )}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-white w-full py-2 text-base font-normal tracking-negative-2 rounded-lg shadow-lg hover:bg-gray-50 active:bg-gray-100 transition duration-200 ease-in-out"
            style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
