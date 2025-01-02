import * as React from "react";
import { useState, useEffect } from "react";
import Loading from "@/assets/svg/loading.svg";
import HeaderForm from "@/components/auth/HeaderForm.jsx";
import GoogleButton from "@/components/auth/ButtonGoogle.jsx";
import HorizonLogo from "@/components/auth/HorizonLogo.jsx";
import GeneralInput from "@/components/auth/GeneralInput.jsx";
import PasswordInput from "@/components/auth/PasswordInput.jsx";
import KeepLoggedIn from "@/components/auth/KeepLoggedIn.jsx";
import ButtonSubmit from "@/components/auth/ButtonSubmit.jsx";
import ChangeAuth from "@/components/auth/ChangeAuth.jsx";
import ProvinceCityInput from "@/components/auth/register/ProvinceCityInput.jsx";
import { register } from "@/helpers/axiosRegister.js";
import axios from "axios";

const RegisterPage = () => {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    province: "",
    city: "",
    street: "",
    zipCode: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // console.log(data);

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("Full_Name", data.name);
    formData.append("Email", data.email);
    formData.append("Province", data.province);
    formData.append("City", data.city);
    formData.append("Street", data.street);
    formData.append("Zip_Code", data.zipCode);
    formData.append("Password", data.password);
    formData.append("Password_confirmation", data.confirmPassword);

    register(formData, setLoading);
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/provinces")
      .then((response) => {
        setProvinces(response.data); // Axios mengembalikan data dalam response.data
      })
      .catch((error) => {
        // console.error("Error fetching provinces:", error);
      });
  }, []);

  const handleFetchCities = (provinceId) => {
    axios
      .get(`http://127.0.0.1:8000/api/cities?regency_id=${provinceId}`)
      .then((response) => {
        setCities(response.data); // Set cities dengan data dari response
      })
      .catch((error) => {
        // console.error("Error fetching cities:", error);
      });
  };

  const handleSelectProvince = (e) => {
    const provinceId = e.target.value;
    setData((prev) => ({ ...prev, province: provinceId }));
    handleFetchCities(provinceId);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center py-9">
      <div className="bg-white px-6 py-6 w-[30.3125rem] border-2 rounded-2xl">
        <div className="w-full">
          <HeaderForm
            title="Sign Up"
            description="Enter your email and password to sign up!"
          />
          <GoogleButton />
          <div className="w-full flex flex-row justify-center items-center my-[1.8125rem]">
            <span className="text-custom-gray text-base tracking-negative-2">
              or
            </span>
          </div>
          {/* <--------------------------FORM SIGN UP START---------------------------> */}
          <div className="w-full">
            {/* <--------------------------FULL NAME---------------------------> */}
            <GeneralInput
              forId="name"
              title="Name"
              type="text"
              placeHolder="Full Name"
              onChange={(e) =>
                setData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            {/* <--------------------------PROVINCE---------------------------> */}
            <ProvinceCityInput
              title="Province"
              forId="province"
              onChange={handleSelectProvince}
              placeHolder="Select a province"
              option={provinces.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            />
            {/* <--------------------------CITY---------------------------> */}
            <ProvinceCityInput
              title="City"
              forId="city"
              onChange={(e) =>
                setData((prev) => ({ ...prev, city: e.target.value }))
              }
              placeHolder="Select a city"
              option={cities?.data?.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            />
            {/* <--------------------------STREET---------------------------> */}
            <GeneralInput
              forId="street"
              title="Street"
              type="text"
              placeHolder="Name of the street"
              onChange={(e) =>
                setData((prev) => ({ ...prev, street: e.target.value }))
              }
            />
            {/* <--------------------------ZIP CODE---------------------------> */}
            <GeneralInput
              forId="zip"
              title="Zip Code"
              type="text"
              placeHolder="50365"
              onChange={(e) =>
                setData((prev) => ({ ...prev, zipCode: e.target.value }))
              }
            />
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
            {/* <--------------------------RETYPE PASSWORD---------------------------> */}
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
            {/* <--------------------------KEEP ME LOGGED IN---------------------------> */}
            <KeepLoggedIn />
            {/* <--------------------------SUBMIT BUTTON---------------------------> */}
            <ButtonSubmit
              isLoading={loading}
              loadingImg={Loading}
              title="Sign Up"
              handleSubmit={handleSubmit}
            />
            {/* <--------------------------CHANGE AUTH---------------------------> */}
            <ChangeAuth
              question="Already have an account?"
              action="Sign in"
              link="/login-admin"
            />
          </div>
        </div>
        <HorizonLogo />
      </div>
    </div>
  );
};

export default RegisterPage;
