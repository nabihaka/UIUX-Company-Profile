import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const privateRoutes = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const tokenTimeStamp = localStorage.getItem("tokenTimeStamp");

  useEffect(() => {
    // Cek apakah token sudah kadaluarsa
    const checkTokenValidity = () => {
      if (token && tokenTimeStamp) {
        const currentTime = new Date().getTime();
        const tokenAge = currentTime - Number(tokenTimeStamp);

        if (tokenAge > 3600000) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenTimeStamp");
          toast.error("Session expired, please login again.", {
            autoClose: 3000,
          });
          setTimeout(() => {
            navigate("/login-admin");
          }, 3000);
        }
      } else {
        navigate("/");
      }
    };

    checkTokenValidity();

    const interval = setInterval(checkTokenValidity, 1000 * 60);

    return () => clearInterval(interval);
  }, [token, tokenTimeStamp]);

  // Jika ada token, render komponen privat
  return token ? children : null;
};

export default privateRoutes;
