import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fffaf0] text-[#65000b]">
      <Navbar />
      <main className="flex-grow items-start justify-center px-4 pt-24">
        <div className="min-h-screen flex items-start justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-16">
            <h2 className="text-2xl font-bold text-center">Welcome back!</h2>
            <p className="text-sm text-center mb-6">
              Please enter login details below
            </p>

            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-1">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button className="text-sm text-blue-800 hover:text-blue-500 focus:outline-none mb-6">
                Forgot Password?
              </button>

              <button
                type="submit"
                className="w-full bg-[#65000b] text-white font-semibold py-3 rounded-lg hover:bg-[#5B1F1F] transition-all"
              >
                Login
              </button>
              <div className="flex items-center my-4">
                <hr className="flex-1 border-t-2 border-gray-400" />
                <span className="mx-4 text-gray-600">OR</span>
                <hr className="flex-1 border-t-2 border-gray-400" />
              </div>
              <button className="flex items-center justify-center w-full py-2 px-4 bg-white border-2 border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <img
                  src="	https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                  alt="Google logo"
                  className="w-6 h-6 mr-3"
                />
                <span className="text-gray-700 font-semibold">
                  Login with Google
                </span>
              </button>
              <div className="flex items-center justify-center mt-4">
                <p className="text-sm text-gray-600">
                  Don't have an account?
                  <a href="/signup" className="ml-2">
                    <button className="text-sm text-blue-800 hover:text-blue-500 focus:outline-none mb-6">
                      Sign Up
                    </button>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
