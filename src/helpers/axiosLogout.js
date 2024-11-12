import axiosHelper from "./axiosInterceptor";

export const logout = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    axiosHelper.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  try {
    await axiosHelper.delete("http://127.0.0.1:8000/api/logout");

    // Remove token from local storage
    localStorage.removeItem("token");

    // Redirect to login page
    window.location.href = "/";
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
