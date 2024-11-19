// import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const formLanding = async (formData, setLoading) => {
  // const [loading, setLoading] = useState(true);
  setLoading(true);

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/forms",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const successForm = response?.data?.message;
    toast.success(successForm || "Form submitted successfully");
    // setLoading(false);
    return true;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "An error occurred. Please try again.";
    toast.error(errorMessage);
    // setLoading(false);
    return false;
  } finally {
    setLoading(false);
  }
};
