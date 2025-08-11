import React, { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
    // You can call API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create an Account
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Join our eLearning community today!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none"
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none"
              required
            />
          </div>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-500 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Register */}
        <button
          type="button"
          className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-lg transition duration-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.5 0 6.6 1.3 9 3.4l6.6-6.6C35.3 2.3 29.9 0 24 0 14.6 0 6.4 5.4 2.5 13.2l7.7 6C12.2 13.4 17.6 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.6 3.1-2.5 5.7-5.3 7.4l8.2 6.4c4.8-4.4 7.8-11 7.8-18.3z"
            />
            <path
              fill="#FBBC05"
              d="M10.2 28.8c-1.1-3.1-1.1-6.5 0-9.6l-7.7-6C-.8 18.5-2 21.2-2 24c0 2.8 1.2 5.5 3.4 7.8l8.8-3z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.5 0 12.1-2.1 16.1-5.8l-8.2-6.4c-2.2 1.5-5 2.4-7.9 2.4-6.4 0-11.8-3.9-13.8-9.3l-8.8 3c3.9 7.8 12.1 13.1 22.6 13.1z"
            />
          </svg>
          Sign up with Google
        </button>

        {/* Login Redirect */}
        <p className="text-sm text-gray-500 text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
