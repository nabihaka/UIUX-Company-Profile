import axiosHelper from "./axiosInterceptor";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

export const fetchFormLanding = async (setLoading) => {
  setLoading(true);
  // await axiosHelper
  //   .get("http://127.0.0.1:8000/api/table", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //   .then((response) => {
  //     const dataForm = response?.data;
  //     return dataForm;
  //   });

  try {
    const response = await axios.get("http://127.0.0.1:8000/api/table", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response?.data;
    return data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
    return;
  } finally {
    setLoading(false);
  }
};
