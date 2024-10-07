import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function Register() {
  return (
    <div className="font-poppins bg-blue-50 bg-cover min-h-screen flex flex-col items-center justify-center text-black">
      <div className="w-[350px] flex justify-center items-center bg-white px-6 py-6 my-4 border-2 border-blue-500 rounded-xl">
        <div className="w-full">
          <h2 className="font-poppins text-blue-500 text-3xl font-bold pb-6 text-center">
            Register
          </h2>
          <form className="flex flex-col items-center" action="">
            <div className="w-full relative">
              <input
                className="border border-gray-400 w-full rounded-full py-2 pr-9 pl-4 my-2 bg-transparent"
                placeholder="Full Name"
                type="text"
              />
              <FaUser className="absolute top-[35%] right-3" />
            </div>
            <div className="w-full relative">
              <input
                className="border border-gray-400 w-full rounded-full py-2 pr-9 pl-4 my-2 bg-transparent"
                placeholder="Address"
                type="text"
              />
              <IoLocationSharp className="absolute top-[35%] right-3" />
            </div>
            <div className="w-full relative">
              <input
                className="border border-gray-400 w-full rounded-full py-2 pr-9 pl-4 my-2 bg-transparent"
                placeholder="Email"
                type="email"
              />
              <MdEmail className="absolute top-[35%] right-3" />
            </div>
            <div className="w-full relative">
              <input
                className="border border-gray-400 w-full rounded-full py-2 pr-9 pl-4 my-2 bg-transparent"
                placeholder="Password"
                type="password"
              />
              <FaLock className="absolute top-[35%] right-3" />
            </div>
            <div className="w-full relative">
              <input
                className="border border-gray-400 w-full rounded-full py-2 pr-9 pl-4 my-2 bg-transparent"
                placeholder="Retype Password"
                type="password"
              />
              <FaLock className="absolute top-[35%] right-3" />
            </div>
            <button
              className="font-poppins mb-5 mt-4 py-2 w-full rounded-full bg-blue-500 text-white"
              type="submit"
            >
              Register
            </button>
            <span className="font-poppins">
              Already have an account?{" "}
              <Link to="/login" className="font-poppins text-blue-600">
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
