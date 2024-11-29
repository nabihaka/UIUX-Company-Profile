import axios from "axios";
import { toast } from "react-toastify";

export const googleLogin = async (setLoading) => {
  setLoading(true);

  try {
    await axios.get("http://localhost:8000/auth/google");
    // window.location.href = "/dashboard/main";
  } catch (error) {
    // const errorMessage = error?.response?.data?.message;
    console.log(error?.response);
    // toast.error(errorMessage);
  } finally {
    setLoading(false);
  }
};
