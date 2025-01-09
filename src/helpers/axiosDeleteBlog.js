import axios from "axios";
import { toast } from "react-toastify";

export const deleteBlog = async (
  setLoading,
  setIsOpen,
  blogId,
  setBlogData
) => {
  setLoading(true);
  const token = localStorage.getItem("token");

  await axios
    .delete(`http://localhost:8000/api/destroy/${blogId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const successMessage = response?.data?.message;
      toast.success(successMessage);
      setBlogData((prev) => prev.filter((blog) => blog.id !== blogId));
    })
    .catch((error) => {
      const errorMessage = error?.response?.data?.message;
      // toast.error(errorMessage);
      if (errorMessage === "Unauthenticated.") {
        localStorage.removeItem("token");
        toast.error(
          "Your access key is no longer valid, please sign in again.",
          {
            autoClose: 3000,
          }
        );
        setTimeout(() => {
          window.location.href = "/login-admin";
        }, 3000);
      } else {
        toast.error(errorMessage);
      }
    })
    .finally(() => {
      setLoading(false);
      setIsOpen(false);
    });
};
