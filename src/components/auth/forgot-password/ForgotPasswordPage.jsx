import * as React from "react";
import { useState } from "react";
import HeaderForm from "@/components/auth/HeaderForm.jsx";
import GeneralInput from "@/components/auth/GeneralInput.jsx";
import ButtonSubmit from "@/components/auth/ButtonSubmit.jsx";
import { forgotPassword } from "@/helpers/axiosForgotPassword.js";
import LogoHorizon from "@/assets/horizon_logo.svg";

const ForgotPasswordPage = () => {
  const [data, setData] = useState({
    email: "",
  });

  const handleSubmit = () => {};
  const formData = new FormData();

  formData.append("Email", data.email);

  forgotPassword(formData);

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
          {/* <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-custom-blue font-medium text-base tracking-negative-2"
            >
              Email
              <span className="text-custom-purple">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="bg-white placeholder-custom-gray font-normal text-base border tracking-negative-2 border-custom-outline-gray pl-6 pr-10 py-[1.125rem] rounded-2xl mt-[0.8125rem] focus:bg-white focus:outline-none focus:ring-1 focus:ring-custom-purple"
              placeholder="mail@simmmple.com"
            />
          </div> */}
          <ButtonSubmit title="Submit" handleSubmit={handleSubmit} />
          <div className="flex flex-row justify-center items-center pt-5">
            <img src={LogoHorizon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
