import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegisterPage from "@/components/auth/register/RegisterPage.jsx";

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    //check token
    if (localStorage.getItem("token")) {
      //redirect page dashboard
      navigate("/dashboard/client");
    }
  }, []);

  return <RegisterPage />;
}

export default Register;
