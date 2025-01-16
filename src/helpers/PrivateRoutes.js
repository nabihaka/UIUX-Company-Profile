import { useEffect } from "react";

const privateRoutes = ({ children }) => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      // Jika tidak ada token, redirect ke halaman login menggunakan window.location.href
      window.location.href = "/login-admin";
    }
  }, [token]);

  // Jika ada token, render komponen privat
  return token ? children : null;
};

export default privateRoutes;
