import axios from "axios";
import { toast } from "react-toastify";

export const updateBlog = async (formData, setLoading) => {
  const token = localStorage.getItem("token");
  setLoading(true);

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/update",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const successMessage = response?.data?.message;
    toast.success(successMessage, { autoClose: 3000 });
    setTimeout(() => {
      window.location.href = "/dashboard/blog-admin";
    }, 3000);
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    // toast.error(errorMessage);
    if (errorMessage === "Unauthenticated.") {
      toast.error("Your access key is no longer valid, please sign in again.", {
        autoClose: 3000,
      });
      localStorage.removeItem("token");

      setTimeout(() => {
        window.location.href = "/login-admin";
      }, 3000);
    } else {
      toast.error(errorMessage);
    }
  } finally {
    setLoading(false);
  }
};
