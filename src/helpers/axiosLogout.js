import axiosHelper from "./axiosInterceptor";
// import { useNavigate } from "react-router-dom";

export const logout = async () => {
  const token = localStorage.getItem("token");
  // const navigate = useNavigate();

  if (token) {
    axiosHelper.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  await axiosHelper
    .delete("http://127.0.0.1:8000/api/logout", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
      localStorage.removeItem("token");
      // navigate("/login-admin");
      window.location.href = "/login-admin";
    })
    .catch((error) => {
      const errorMessage = error?.response?.data?.message;
      if (errorMessage === "Unauthenticated.") {
        localStorage.removeItem("token");
        window.location.href = "/login-admin";
      }
    });
};
