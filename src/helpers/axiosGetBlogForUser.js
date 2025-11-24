import axios from "axios";
import { toast } from "react-toastify";

export const fetchBlogForUser = async (setLoading) => {
  setLoading(true);

  //   // Mock API request for demonstration purposes
  //   await axios.get("http://localhost:8000/api/bloguser").then((response) => {
  //     const data = response;
  //     return data;
  //   });
  try {
    const response = await axios.get("http://localhost:8000/api/bloguser");
    const data = response?.data;
    return data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
  } finally {
    setLoading(false);
  }
};
