import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderForm from "@/components/auth/HeaderForm.jsx";
import GoogleButton from "@/components/auth/ButtonGoogle.jsx";
import HorizonLogo from "@/components/auth/HorizonLogo.jsx";
import GeneralInput from "@/components/auth/GeneralInput.jsx";
import PasswordInput from "@/components/auth/PasswordInput.jsx";
import KeepLoggedIn from "@/components/auth/KeepLoggedIn.jsx";
import ButtonSubmit from "@/components/auth/ButtonSubmit.jsx";
import ChangeAuth from "@/components/auth/ChangeAuth.jsx";
import { login } from "@/helpers/axiosLogin.js";

const LoginPage = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("Email", data.email);
    formData.append("Password", data.password);

    login(formData);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center py-9">
      <div className="bg-white px-6 py-6 w-[30.3125rem] border-2 rounded-2xl">
        <div className="w-full">
          <HeaderForm
            title="Sign In"
            description="Enter your email and password to sign in!"
          />
          <GoogleButton />
          <div className="w-full flex flex-row justify-center items-center my-[1.8125rem]">
            <span className="text-custom-gray text-base tracking-negative-2">
              or
            </span>
          </div>
          {/* <--------------------------FORM SIGN IN START---------------------------> */}
          <div className="w-full">
            {/* <--------------------------EMAIL---------------------------> */}
            <GeneralInput
              forId="email"
              title="Email"
              type="email"
              placeHolder="mail@simmmple.com"
              onChange={(e) =>
                setData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            {/* <--------------------------PASSWORD---------------------------> */}
            <PasswordInput
              forId="password"
              title="Password"
              onChange={(e) =>
                setData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            {/* <--------------------------KEEP ME LOGGED IN---------------------------> */}
            <div className="w-full flex justify-between items-center">
              <KeepLoggedIn />
              <Link
                to="/forgot-password"
                className="font-medium text-base text-custom-purple tracking-negative-2 mb-3.5 hover:text-custom-blue hover:underline cursor-pointer"
              >
                Forgot password?
              </Link>
            </div>
            {/* <--------------------------SUBMIT BUTTON---------------------------> */}
            <ButtonSubmit title="Sign In" handleSubmit={handleSubmit} />
            {/* <--------------------------CHANGE AUTH---------------------------> */}
            <ChangeAuth
              question="Not registered yet?"
              action="Create an account"
              link="/register-admin"
            />
          </div>
        </div>
        <HorizonLogo />
      </div>
    </div>
  );
};

export default LoginPage;
