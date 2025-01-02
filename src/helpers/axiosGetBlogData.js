import axios from "axios";
import { toast } from "react-toastify";

export const fetchBlogData = async (setLoading) => {
  setLoading(true);

  try {
    const response = await axios.get("http://127.0.0.1:8000/api/showblog");
    const data = response?.data;
    return data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    // console.error(errorMessage);
    toast.error(errorMessage);
  } finally {
    setLoading(false);
  }
};
