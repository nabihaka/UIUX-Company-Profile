import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "@/assets/svg/loading.svg";
import HeaderForm from "@/components/auth/HeaderForm.jsx";
import GoogleButton from "@/components/auth/ButtonGoogle.jsx";
import HorizonLogo from "@/components/auth/HorizonLogo.jsx";
import GeneralInput from "@/components/auth/GeneralInput.jsx";
import PasswordInput from "@/components/auth/PasswordInput.jsx";
import KeepLoggedIn from "@/components/auth/KeepLoggedIn.jsx";
import ButtonSubmit from "@/components/auth/ButtonSubmit.jsx";
import ChangeAuth from "@/components/auth/ChangeAuth.jsx";
import { login } from "@/helpers/axiosLogin.js";
// app.use(cors());

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");
    const token = localStorage.getItem("token");
    const tokenTimeStamp = localStorage.getItem("tokenTimeStamp");

    // const isTokenExpired = () => {
    //   const currentTime = new Date().getTime();
    //   const tokenAge = currentTime - Number(tokenTimeStamp);
    //   return tokenAge > 3600000;
    // };

    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);
      localStorage.setItem("tokenTimeStamp", new Date().getTime());
      toast.success("Please check your email inbox and change your password.", {
        autoClose: 7000,
      });
      if (token) {
        setTimeout(() => {
          navigate("/dashboard/client");
        }, 7000);
      }
      return;
    }

    // if (token && isTokenExpired()) {
    //   localStorage.removeItem("token");
    //   localStorage.removeItem("tokenTimeStamp");

    //   toast.error("Session expired, please login again.", { autoClose: 3000 });
    //   setTimeout(() => {
    //     navigate("/login-admin");
    //   }, 3000);
    // }
    if (token) {
      navigate("/dashboard/client");
    }
  }, []);

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("Email", data.email);
    formData.append("Password", data.password);

    login(formData, setLoading);
  };

  const handleGoogleLogin = async () => {
    setLoadingGoogle(true);

    setTimeout(() => {
      window.location.href = "http://localhost:8000/auth/google";
      // fetchGoogleLogin();
    }, 200);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center py-9">
      <div className="bg-white px-6 py-6 w-[30.3125rem] border-2 rounded-2xl">
        <div className="w-full">
          <HeaderForm
            title="Sign In"
            description="Enter your email and password to sign in!"
          />
          <GoogleButton
            isLoading={loadingGoogle}
            handleClick={handleGoogleLogin}
            text="Sign in with Google"
          />
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
            <div className="w-full flex justify-end items-center">
              {/* <KeepLoggedIn /> */}
              <Link
                to="/forgot-password"
                className="font-medium text-base text-custom-purple tracking-negative-2 mb-3.5 hover:text-custom-blue hover:underline cursor-pointer"
              >
                Forgot password?
              </Link>
            </div>
            {/* <--------------------------SUBMIT BUTTON---------------------------> */}
            <ButtonSubmit
              isLoading={loading}
              loadingImg={Loading}
              title="Sign In"
              handleSubmit={handleSubmit}
            />
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
