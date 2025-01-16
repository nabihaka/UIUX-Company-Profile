import axios from "axios";
import { toast } from "react-toastify";

export const fetchBlogDetail = async (id) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(
      `http://localhost:8000/api/blogdetail/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response?.data?.blog;
    return data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
  }
};
