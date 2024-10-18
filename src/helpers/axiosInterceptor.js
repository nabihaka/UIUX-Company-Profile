import axios from "axios";
import { toast } from "react-toastify";

/**
 * Function for calling api with axios
 *
 * @param {string} url
 * @param {*} options
 */
const token = localStorage.getItem("token");
const baseUrl = import.meta.env.VITE_BASE_API;

const config = {
  baseURL: `${baseUrl}/api`,
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

// Create a new instance of axios
const axiosHelper = axios.create(config);

// Axios request handler
axiosHelper.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Axios response handlers
axiosHelper.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    // Display error notification to user
    toast.error(error?.response?.data?.message || "Internal server error");

    if (error?.status === 401) {
      // Token expired or invalid, clear localStorage and redirect to login page
      if (typeof window !== "undefined") {
        localStorage.clear();

        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosHelper;
