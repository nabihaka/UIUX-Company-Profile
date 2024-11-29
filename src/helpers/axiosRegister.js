import axiosHelper from "./axiosInterceptor";
// import { useNavigate } from "react-router-dom";

export const register = async (formData, setLoading) => {
  setLoading(true);
  // const navigate = useNavigate();

  // Simpan data user ke local storage
  await axiosHelper
    .post("http://127.0.0.1:8000/api/register/action", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      const tokenRes = response?.data?.verification_token ?? "";
      console.log(tokenRes);
      localStorage.setItem("token", tokenRes);

      // Jika berhasil, arahkan ke email verification
      window.location.href = "/verification";
    })
    .catch((error) => {
      console.log(error?.response);
    })
    .finally(() => {
      setLoading(false);
    });
};
