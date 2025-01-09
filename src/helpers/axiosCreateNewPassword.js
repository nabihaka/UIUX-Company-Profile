import { toast } from "react-toastify";
import axios from "axios";

export const createPassword = async (formData, setLoading) => {
  setLoading(true);
  const token = localStorage.getItem("token");

  try {
    await axios.post("http://127.0.0.1:8000/api/reset-password", formData, {
      headers: {
        // "Content-Type": "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    window.location.href = "/login-admin";
    localStorage.removeItem("token");
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
  } finally {
    setLoading(false);
  }
};
