import * as React from "react";
import { useState, useEffect } from "react";
import { createPassword } from "@/helpers/axiosCreateNewPassword.js";
import HeaderForm from "@/components/auth/HeaderForm.jsx";
import GeneralInput from "@/components/auth/GeneralInput.jsx";
import PasswordInput from "@/components/auth/PasswordInput.jsx";
import ButtonSubmit from "@/components/auth/ButtonSubmit.jsx";
import Loading from "@/assets/svg/Loading.svg";
import LogoHorizon from "@/assets/svg/horizon_logo.svg";

const NewPasswordPage = () => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");

    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);
    }
  }, []);

  const handleSubmit = () => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("token", token);
    formData.append("Email", data.email);
    formData.append("Password", data.password);
    formData.append("password_confirmation", data.confirmPassword);

    createPassword(formData, setLoading);
  };

  return (
    <div className="bg-white min-h-screen w-screen flex justify-center items-center py-9">
      <div className="bg-white px-6 py-6 w-[30.3125rem] border-2 rounded-2xl">
        <div className="w-full space-y-5">
          <HeaderForm
            title="New Password"
            description="Create and confirm your new password!"
          />
          <div className="w-full">
            <GeneralInput
              forId="email"
              title="Email"
              type="email"
              placeHolder="mail@simmmple.com"
              onChange={(e) =>
                setData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <PasswordInput
              forId="password"
              title="Password"
              onChange={(e) =>
                setData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <PasswordInput
              forId="retype_password"
              title="Retype Password"
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
            />
          </div>
          <ButtonSubmit
            isLoading={loading}
            loadingImg={Loading}
            title="Submit"
            handleSubmit={handleSubmit}
          />
          <div className="flex flex-row justify-center items-center pt-5">
            <img src={LogoHorizon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordPage;
