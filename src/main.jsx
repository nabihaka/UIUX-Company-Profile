import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoutes from "./helpers/PrivateRoutes.js";
import Landing from "@/pages/landing/Landing.jsx";
import Blog from "@/pages/blog/Blog.jsx";
import BlogAdmin from "@/pages/blog/BlogAdmin.jsx";
import CreateNewBlog from "@/pages/blog/CreateNewBlog.jsx";
import UpdateBlog from "@/pages/blog/UpdateBlog.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import ForgotPassword from "@/pages/auth/ForgotPassword.jsx";
import EmailConfirmation from "@/pages/auth/EmailConfirmation.jsx";
import NewPassword from "@/pages/auth/NewPassword.jsx";
// import EmailVerificationPage from "@/components/auth/verification/EmailVerificationPage.jsx";
import EmailVerification from "@/pages/auth/EmailVerification.jsx";
import SuccessfulVerification from "@/pages/auth/SuccessfulVerification.jsx";
import BlogDetailAdmin from "@/pages/blog/BlogDetailAdmin.jsx";
import BlogDetailUser from "@/pages/blog/BlogDetailUser.jsx";
import Dashboard from "@/pages/dashboard/dashboard.jsx";
// import DashboardLayout from "@/layout/Dashboard.jsx";
// import Home from "./pages/dashboard/home.jsx";
import Main from "@/pages/dashboard/Main.jsx";
// import Members from "@/pages/dashboard/Members.jsx";
import NftMarketplace from "@/pages/dashboard/NftMarketplace.jsx";
import Tables from "@/pages/dashboard/Tables.jsx";
import Kanban from "@/pages/dashboard/Kanban.jsx";
import Profile from "@/pages/dashboard/Profile.jsx";
import Client from "@/pages/dashboard/Client.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const router = createBrowserRouter([
  // Public routes
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "/blog",
    element: <Blog />,
  },

  // {
  //   path: "/blog-admin",
  //   element: <BlogAdmin />,
  // },

  {
    path: "/create-new-blog",
    element: <CreateNewBlog />,
  },

  {
    path: "/update-blog",
    element: <UpdateBlog />,
  },

  {
    path: "/login-admin",
    element: <Login />,
  },

  {
    path: "/register-admin",
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

  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/confirmation",
    element: <EmailConfirmation />,
  },

  {
    path: "/create-new-password",
    element: <NewPassword />,
  },

  {
    path: "/blog-detail/:slug",
    element: <BlogDetailAdmin />,
  },

  {
    path: "/blog/:slug",
    element: <BlogDetailUser />,
  },

  // Private routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      // { index: true, path: "main", element: <Main /> }, // Home sebagai default di /dashboard
      // { path: "nftmarketplace", element: <NftMarketplace /> },
      // { path: "tables", element: <Tables /> },
      // { path: "kanban", element: <Kanban /> },
      // { path: "profile", element: <Profile /> },
      { index: true, path: "client", element: <Client /> },
      { path: "blog-admin", element: <BlogAdmin /> },
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
