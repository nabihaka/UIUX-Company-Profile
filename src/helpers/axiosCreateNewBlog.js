import axios from "axios";
import { toast } from "react-toastify";

export const createNewBlog = async (setLoading, formData) => {
  setLoading(true);

  try {
    const response = await axios.post(
      "http://localhost:8000/api/posting",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const successMessage = response?.data?.message;
    toast.success(successMessage);
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
  } finally {
    setLoading(false);
  }
};
