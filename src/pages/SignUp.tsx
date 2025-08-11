import bgImage from "../assets/4.png";
import logo from "../assets/OG.png";
import { Link } from "react-router-dom";

const SignUp = () => {
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

      {/* Form Container */}
      <div className="relative z-10 flex justify-center items-center min-h-screen text-gray-700">
        <div className="max-w-lg w-full mx-4 md:mx-auto rounded-xl py-14 px-10 bg-white shadow-2xl shadow-yellow-100">
          <h2 className="text-2xl font-bold mb-2 text-start">
            Create an <span className="text-yellow-600">Account.</span>
          </h2>
          <p className="text-start text-gray-400">Please enter your details</p>

          <form className="space-y-4 text-md">
            <div className="flex gap-4 pt-8">
              <div className="w-1/2">
                <label htmlFor="firstName" className="font-medium">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  className="py-2 border rounded-md w-full mt-2 px-4"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="font-medium">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="py-2 border rounded-md w-full mt-2 px-4"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email Address"
                className="py-2 px-4 border rounded-md mt-3"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="py-2 px-4 border rounded-md mt-3"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className="font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="py-2 px-4 border rounded-md mt-3"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-500 text-white py-3 w-full rounded-full text-lg font-medium"
            >
              Register Now
            </button>

            <p className="text-center text-gray-500 pt-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-yellow-600 underline font-medium"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
