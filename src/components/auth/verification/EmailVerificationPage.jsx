import * as React from "react";
import { useState, useEffect } from "react";
import { resendEmail } from "@/helpers/axiosResendEmail.js";
import DirectboxIcon from "@/assets/svg/directbox_receive.svg";
import LogoHorizon from "@/assets/png/horizonui_logo.png";
import Loading from "@/assets/svg/loading.svg";

const EmailVerificationPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      setIsActive(false);
      setButtonActive(true);
      return;
    }

    setIsActive(true);
    setButtonActive(false);
    setTimer(60);
  }, [token]);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            setIsActive(false);
            setButtonActive(true);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  // console.log(isActive);

  const handleResendEmail = async () => {
    // const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("token", token);

    const isSuccess = await resendEmail(formData, setLoading);
    if (isSuccess) {
      setIsActive(true);
      setButtonActive(false);
      setTimer(60);
    }
  };

  // const handleResendEmail = async () => {
  //   // const token = localStorage.getItem("token");

  //   const formData = new FormData();
  //   formData.append("token", token);

  //   await resendEmail(formData, setLoading).finally(() => {
  //     setIsActive(true);
  //     setTimer(60);
  //   });
  //   // if (isSuccess) {
  //   //   setIsActive(true);
  //   //   setTimer(60);
  //   // }
  // };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center py-9">
      <div className="bg-white px-6 py-6 w-[458px] border-2 rounded-2xl">
        <div className="w-full flex flex-col justify-between items-center space-y-12">
          <div className="w-full flex flex-row justify-start items-center">
            <h2 className="font-bold text-4xl text-custom-blue tracking-negative-2">
              Successfully Register
            </h2>
          </div>
          <img src={DirectboxIcon} />
          <div className="w-full flex flex-row justify-start items-center">
            <p className="text-base text-custom-gray font-normal tracking-negative-2 text-justify">
              To start your account registration, please check your email inbox
              and confirm your email address to activate your account
            </p>
          </div>
          <div className="w-full flex flex-col space-y-4">
            <div className="w-full flex items-center">
              <span className="font-normal text-base tracking-negative-2">
                Didn't receive an email?
                <span className="text-custom-purple font-bold text-base">
                  {" "}
                  Click button below
                  <span> {isActive ? `in ${formatTime(timer)}` : ""}</span>
                </span>
              </span>
            </div>
            <button
              type="button"
              disabled={!buttonActive}
              onClick={handleResendEmail}
              className={`w-full py-5 border rounded-2xl font-bold text-base text-white transition duration-300 ease-in-out ${
                buttonActive
                  ? "bg-custom-purple hover:bg-custom-blue"
                  : "bg-custom-gray cursor-not-allowed"
              }`}
            >
              {loading ? (
                <img src={Loading} className="mx-auto h-6 animate-spin" />
              ) : (
                "Resend Email"
              )}
            </button>
          </div>
          <div className="transform -translate-y-2">
            <img src={LogoHorizon} className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
