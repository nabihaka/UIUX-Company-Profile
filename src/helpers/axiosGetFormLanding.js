import axiosHelper from "./axiosInterceptor";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

export const fetchFormLanding = async () => {
  await axiosHelper
    .get("http://127.0.0.1:8000/api/table", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const dataForm = response?.data;
      return dataForm;
    });
};
