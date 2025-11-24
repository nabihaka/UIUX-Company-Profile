import axiosHelper from "./axiosInterceptor";

export const login = async (formData, setLoading) => {
  setLoading(true);

  await axiosHelper
    .post("http://127.0.0.1:8000/api/login", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      const tokenRes = response?.data?.token ?? "";

      // Save token to local storage
      const timestamp = new Date().getTime();
      localStorage.setItem("token", tokenRes);
      localStorage.setItem("tokenTimeStamp", timestamp);

      // Jika berhasil, arahkan ke dashboard
      window.location.href = "/dashboard/client";
    })
    .finally(() => {
      setLoading(false);
    });
};
