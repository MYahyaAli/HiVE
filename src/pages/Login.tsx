import bgImage from "../assets/4.png";
import logo from "../assets/OG.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Logo - hidden on mobile */}
      <div className="absolute top-10 left-16 z-20 hidden sm:flex items-center gap-4">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="MyHive Logo" className="h-12 w-auto" />
          <span className="bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent text-2xl font-bold">
            myhive
          </span>
        </Link>
      </div>

      {/* Login Form */}
      <div className="relative z-10 flex justify-center items-center min-h-screen text-gray-700">
        <div className="max-w-lg w-full mx-4 md:mx-auto rounded-xl py-14 px-10 bg-white shadow-2xl shadow-yellow-100">
          <h2 className="text-2xl font-bold mb-2 text-start">
            Welcome <span className="text-yellow-600">Back!</span>
          </h2>
          <p className="text-start text-gray-400">Please enter your details</p>

          <form className="space-y-4 text-md">
            <div className="text-md">
              <div className="flex flex-col pt-8">
                <label htmlFor="email" className="font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email Address"
                  className="py-2 px-4 border rounded-md my-2"
                />
              </div>

              <div className="flex flex-col py-4">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  className="py-2 px-4 border rounded-md my-2"
                />
              </div>

              <div className="flex flex-row items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember Me
                </label>

                <Link
                  to="/login"
                  className="text-md text-yellow-600 underline font-medium"
                >
                  Forgot password
                </Link>
              </div>

              <button className="bg-yellow-600 hover:bg-yellow-500 text-white py-3 px-6 mt-6 w-full rounded-full text-lg font-medium cursor-pointer">
                Continue
              </button>

              <div className="text-gray-500 text-center pt-6">
                <p>
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-yellow-600 underline font-semibold"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
