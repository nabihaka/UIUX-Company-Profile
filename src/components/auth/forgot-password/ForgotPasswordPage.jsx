import * as React from "react";
import { useState } from "react";
import HeaderForm from "@/components/auth/HeaderForm.jsx";
import GeneralInput from "@/components/auth/GeneralInput.jsx";
import ButtonSubmit from "@/components/auth/ButtonSubmit.jsx";
import { forgotPassword } from "@/helpers/axiosForgotPassword.js";
import Loading from "@/assets/svg/loading.svg";
import LogoHorizon from "@/assets/svg/horizon_logo.svg";

const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
  });

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("Email", data.email);

    forgotPassword(formData, setLoading);
  };

  return (
    <div className="bg-white min-h-screen w-screen flex justify-center items-center py-9">
      <div className="bg-white px-6 py-6 w-[30.3125rem] border-2 rounded-2xl">
        <div className="w-full space-y-5">
          <HeaderForm
            title="Forgot your password?"
            description="Please input your email to reset your password!"
          />
          <GeneralInput
            title="Email"
            forId="email"
            type="email"
            placeHolder="mail@simmmple.com"
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
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

export default ForgotPasswordPage;
