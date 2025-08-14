// src/pages/SendMessage.jsx
import React, { useState } from "react";

const SendMessage = () => {
  const [formData, setFormData] = useState({
    topic: "",
    description: "",
    message: "",
    remarks: "",
    problem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can handle sending the data to the backend API
    alert("Message sent successfully!");
    setFormData({ topic: "", description: "", message: "", remarks: "", problem: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send a Message to Admin</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Topic */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Topic</label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Enter topic"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              rows="3"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            ></textarea>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="3"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            ></textarea>
          </div>

          {/* Remarks */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Remarks</label>
            <input
              type="text"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Enter remarks"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          {/* Problem in Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Describe Problem</label>
            <textarea
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              placeholder="Explain the problem"
              rows="2"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            ></textarea>
          </div>

          {/* Send Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendMessage;
