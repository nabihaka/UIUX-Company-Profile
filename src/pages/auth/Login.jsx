import { useEffect } from "react";
import LoginPage from "@/components/auth/login/LoginPage.jsx";

function Login() {
  useEffect(() => {
    //check token
    if (localStorage.getItem("token")) {
      //redirect page dashboard
      window.location.href = "/dashboard/main";
    }
  }, []);

  return <LoginPage />;
}

export default Login;
