import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-lg">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Do you have anything in your mind to tell us? Please don't hesitate
            to get in touch with us.
          </p>

          <div className="flex items-start mb-4">
            <FaMapMarkerAlt className="text-orange-500 text-2xl mr-4" />
            <div>
              <h3 className="font-medium">ADDRESS :</h3>
              <p className="text-gray-600">
                Itahari / Dharan
              </p>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <FaPhoneAlt className="text-orange-500 text-2xl mr-4" />
            <div>
              <h3 className="font-medium">PHONE :</h3>
              <p className="text-gray-600">9851096432 / 9856051715 / 9801096432</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaEnvelope className="text-orange-500 text-2xl mr-4" />
            <div>
              <h3 className="font-medium">EMAIL :</h3>
              <p className="text-gray-600">info@ekakshyaa.com</p>
              <p className="text-gray-600">info@ekakshyaa.com</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

            {/* reCAPTCHA Placeholder */}
            <div className="p-4 border rounded-md bg-gray-50 text-gray-500 text-sm">
              [ reCAPTCHA Placeholder ]
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition duration-200"
            >
              Send Message Now!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
