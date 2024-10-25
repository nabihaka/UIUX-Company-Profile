import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import axiosHelper from "@/helpers/axiosInterceptor";
import Sidebar from "@/components/dashboard/Sidebar.jsx";
import Header from "@/components/dashboard/Header.jsx";

const DashboardLayout = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchData = () => {
    axiosHelper.get("/user");
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    fetchData();
  }, []);

  return (
    // <div className="font-poppins flex flex-col gap-[12px] items-center justify-center min-h-screen">
    //   <h1 className="text-4xl mb-2">Here Is The Dashboard Page</h1>

    //   {isLoading ? (
    //     <div className="animate-pulse bg-gray rounded-[6px] w-[100px] h-[12px]"></div>
    //   ) : (
    //     <h2 className="text-2xl mb-7">
    //       Welcome, <strong>{user.Full_Name}</strong>
    //     </h2>
    //   )}
    //   <button
    //     className="bg-blue-500 p-4 w-60 text-[30px] font-poppins font-medium text-white rounded-full"
    //     type="submit"
    //     onClick={handleSubmit}
    //   >
    //     Logout
    //   </button>
    // </div>
    <div>
      <div className="flex">
        <Sidebar />
        <div className="">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
