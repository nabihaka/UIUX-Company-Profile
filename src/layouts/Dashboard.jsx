import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import axiosHelper from "@/helpers/axiosInterceptor";
import Sidebar from "@/components/dashboard/Sidebar.jsx";
import Header from "@/components/dashboard/Header.jsx";

const DashboardLayout = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const tokenFromUrl = urlParams.get("token");

  //   if (tokenFromUrl) {
  //     localStorage.setItem("token", tokenFromUrl);
  //   }
  // }, []);

  // const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if (!token) {
  //     const timeOut = setTimeout(() => {
  //       navigate("/login-admin");
  //     }, 3000);

  //     return () => clearTimeout(timeOut);
  //   }
  //   // fetchData();
  // }, [token]);

  return (
    <div>
      <div>
        <Sidebar />
        <div>
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
