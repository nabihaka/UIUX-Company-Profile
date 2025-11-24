import * as React from "react";
import { useState, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";
// import { deleteBlog } from "@/helpers/axiosDeleteBlog";
import { logout } from "@/helpers/axiosLogout.js";
import LoadingImg from "@/assets/svg/loading.svg";

export const LogoutConfirm = ({ open, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    await logout(setLoading);
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
        <FiLogOut className="mx-auto rotate-180 text-8xl text-red-500" />
        <div className="mx-auto w-56">
          <h3 className="font-bold text-xl text-center tracking-negative-2">
            Confirm Logout
          </h3>
          <p className="font-light text-base text-center tracking-negative-2">
            Are you sure you want to logout from this page?
          </p>
        </div>
        <div className="pt-4 flex gap-3 items-center">
          <button
            type="button"
            onClick={handleLogout}
            className="bg-red-500 w-full py-2 text-base font-normal text-white tracking-negative-2 rounded-lg shadow-lg hover:bg-red-600 active:bg-red-700 transition duration-200 ease-in-out"
          >
            {loading ? (
              <img src={LoadingImg} className="h-6 mx-auto animate-spin" />
            ) : (
              "Logout"
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
