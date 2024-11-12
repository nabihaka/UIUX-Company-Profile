import axiosHelper from "./axiosInterceptor";

export const forgotPassword = async (formData) => {
  await axiosHelper
    .post("http://127.0.0.1:8000/api/forgot-password", formData, {})
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
