import * as React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/landing/Navbar.jsx";
import LandingPage from "@/components/landing/LandingPage.jsx";

const Landing = () => {
  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default Landing;
