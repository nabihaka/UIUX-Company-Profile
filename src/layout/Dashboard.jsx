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

  // const fetchData = () => {
  //   axiosHelper.get("/user");
  // };

  // useEffect(() => {
  //   if (!token) {
  //     setTimeout(() => {
  //       navigate("/login-admin");
  //     }, 3000);
  //   }
  //   // fetchData();
  // }, []);

  useEffect(() => {
    if (!token) {
      const timeOut = setTimeout(() => {
        navigate("/login-admin");
      }, 3000);

      return () => clearTimeout(timeOut);
    }
    // fetchData();
  }, [token]);

  return (
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
