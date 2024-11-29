import { toast } from "react-toastify";
import axiosHelper from "./axiosInterceptor";
import axios from "axios";

export const forgotPassword = async (formData, setLoading) => {
  // await axiosHelper
  //   .post("http://127.0.0.1:8000/api/forgot-password", formData, {})
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  setLoading(true);
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/forgot-password",
      formData
    );
    window.location.href = "/confirmation";
    // const tokenRes = response?.data?.token ?? "";
    // localStorage.setItem("token", tokenRes);
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
  } finally {
    setLoading(false);
  }
};
