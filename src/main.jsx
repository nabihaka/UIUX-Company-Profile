import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoutes from "./helpers/PrivateRoutes.jsx";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import EmailVerificationPage from "./components/auth/verification/EmailVerificationPage.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Home from "./pages/dashboard/home.jsx";
import Members from "./pages/dashboard/members.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const router = createBrowserRouter([
  // Public routes
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/verification",
    element: <EmailVerificationPage />,
  },

  // Private routes
  {
    path: "/dashboard/home",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      { index: true, element: <Home /> }, // Home sebagai default di /dashboard
      { path: "members", element: <Members /> }, // Members di /dashboard/members
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="font-dm-sans">
      <RouterProvider router={router} />
      <ToastContainer />
    </main>
  </React.StrictMode>
);
