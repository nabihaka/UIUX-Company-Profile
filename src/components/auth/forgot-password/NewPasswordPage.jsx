import * as React from "react";
import HeaderForm from "@/components/auth/HeaderForm.jsx";
import GeneralInput from "@/components/auth/GeneralInput.jsx";
import PasswordInput from "@/components/auth/PasswordInput.jsx";
import ButtonSubmit from "@/components/auth/ButtonSubmit.jsx";
import LogoHorizon from "@/assets/horizon_logo.svg";

const NewPasswordPage = () => {
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
            />
            <PasswordInput forId="password" title="Password" />
            <PasswordInput forId="retype_password" title="Retype Password" />
          </div>
          <ButtonSubmit title="Submit" />
          <div className="flex flex-row justify-center items-center pt-5">
            <img src={LogoHorizon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordPage;
