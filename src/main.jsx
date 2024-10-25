import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoutes from "./helpers/PrivateRoutes.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
// import EmailVerificationPage from "@/components/auth/verification/EmailVerificationPage.jsx";
import EmailVerification from "@/pages/auth/EmailVerification.jsx";
import SuccessfulVerification from "@/pages/auth/SuccessfulVerification.jsx";
// import Dashboard from "./pages/dashboard/dashboard.jsx";
import DashboardLayout from "@/layout/Dashboard.jsx";
// import Home from "./pages/dashboard/home.jsx";
import Main from "@/pages/dashboard/Main.jsx";
// import Members from "@/pages/dashboard/Members.jsx";
import NftMarketplace from "@/pages/dashboard/NftMarketplace.jsx";
import Tables from "@/pages/dashboard/Tables.jsx";
import Kanban from "@/pages/dashboard/Kanban.jsx";
import Profile from "@/pages/dashboard/Profile.jsx";
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
    element: <EmailVerification />,
  },

  {
    path: "/successful-verification",
    element: <SuccessfulVerification />,
  },

  // Private routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      { index: true, path: "main", element: <Main /> }, // Home sebagai default di /dashboard
      { path: "nftmarketplace", element: <NftMarketplace /> }, // Members di /dashboard/members
      { path: "tables", element: <Tables /> }, // Members di /dashboard/members
      { path: "Kanban", element: <Kanban /> }, // Members di /dashboard/members
      { path: "Profile", element: <Profile /> }, // Members di /dashboard/members
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
