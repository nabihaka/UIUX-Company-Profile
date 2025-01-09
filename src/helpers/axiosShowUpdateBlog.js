import axios from "axios";
import { toast } from "react-toastify";

export const showUpdateBlog = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/pickid/${id}`);
    const data = response?.data?.blog;
    return data;
    // console.log(data);
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
  }
};
