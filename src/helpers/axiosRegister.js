import axiosHelper from "./axiosInterceptor";
// import { useNavigate } from "react-router-dom";

export const register = async (formData) => {
  // const navigate = useNavigate();

  // Simpan data user ke local storage
  await axiosHelper
    .post("http://127.0.0.1:8000/api/register/action", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(() => {
      // Jika berhasil, arahkan ke email verification
      window.location.href = "/verification";
    });
};
