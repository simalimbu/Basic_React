// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
        <h1 className="text-xl font-bold">E-Learning</h1>
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300 font-bold">Home</Link>
          <Link to="/about" className="hover:text-gray-300 font-bold">About Us</Link>
          <Link to="/blog" className="hover:text-gray-300 font-bold">Blog</Link>
          <Link to="/courses" className="hover:text-gray-300 font-bold">Courses</Link>
          <Link to="/contact" className="hover:text-gray-300 font-bold">Contact</Link>
          <Link to="/Faqs" className="hover:text-gray-300 font-bold">FaQs</Link>
          <Link to="/login" className="hover:text-gray-300 font-bold">Login</Link>
          <Link to="/register" className="hover:text-gray-300 font-bold">Register</Link>
          <Link to="/logout" className="hover:text-gray-300 font-bold">Logout</Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
