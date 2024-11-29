import axios from "axios";
import { toast } from "react-toastify";

export const resendEmail = async (formData, setLoading) => {
  setLoading(true);

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/email/verification-notification",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const successMessage = response?.data?.message;
    toast.success(successMessage);
    return true;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
    return false;
  } finally {
    setLoading(false);
  }
};
