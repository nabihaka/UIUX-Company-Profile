import axios from "axios";
import { toast } from "react-toastify";

/**
 * Fungsi untuk mengambil data blog berdasarkan slug.
 * @param {string} slug - Slug dari blog yang ingin diambil.
 * @returns {Promise<object>} - Data blog dalam format JSON.
 */

export const fetchBlogSlug = async (slug) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/blog/${slug}`);
    return response?.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
  }
};
