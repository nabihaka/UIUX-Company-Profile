import axiosHelper from "./axiosInterceptor";
// import { useNavigate } from "react-router-dom";

export const formlanding = async (formData) => {
  await axiosHelper
    .post("http://127.0.0.1:8000/api/forms", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
