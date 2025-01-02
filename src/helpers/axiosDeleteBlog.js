import axios from "axios";
import { toast } from "react-toastify";

export const DeleteBlog = async (setLoading, setIsOpen, blogId) => {
  setLoading(true);

  await axios
    .delete(`http://localhost:8000/api/destroy/${blogId}`)
    .then(() => {
      setIsOpen(false);
    })
    .catch((error) => {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    })
    .finally(() => {
      setLoading(false);
    });
};
