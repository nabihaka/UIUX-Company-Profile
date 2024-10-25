import axiosHelper from "./axiosInterceptor";

export const login = async (formData) => {
  await axiosHelper
    .post("http://127.0.0.1:8000/api/login", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      const tokenRes = response?.data?.token ?? "";

      // Save token to local storage
      localStorage.setItem("token", tokenRes);

      // Jika berhasil, arahkan ke dashboard
      window.location.href = "/dashboard/main";
    });
};
