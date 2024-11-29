const privateRoutes = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Jika tidak ada token, redirect ke halaman login menggunakan window.location.href
    window.location.href = "/login-admin";
    return null; // Pastikan komponen tidak render sebelum redirect
  }

  // Jika ada token, render komponen privat
  return children;
};

export default privateRoutes;
