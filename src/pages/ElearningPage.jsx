// src/pages/ElearningPage.jsx
import React from "react";

const ebooks = [
  {
    id: 1,
    title: "Customer Education in 2025: The New Experience Era",
    description:
      "Customer education has officially entered the spotlight. No longer a nice-to-have, it's now a core strategy.",
    image: "https://source.unsplash.com/400x250/?education,corporate",
    link: "#",
  },
  {
    id: 2,
    title: "Build a Customer Training Academy That Drives Results",
    description:
      "Discover how to engage and onboard customers, transforming them into passionate, lifelong brand advocates.",
    image: "https://source.unsplash.com/400x250/?training,academy",
    link: "#",
  },
  {
    id: 3,
    title: "Build an Employee Onboarding Program with an LMS",
    description:
      "Better onboarding = productive, happy employees. Learn how to deliver successful onboarding with an LMS.",
    image: "https://source.unsplash.com/400x250/?employee,onboarding",
    link: "#",
  },
];

const ElearningPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          <span className="text-blue-600">eBooks</span> that help you master
          corporate learning
        </h1>
        <p className="mt-4 text-gray-600">
          Champion learning and excel at training with knowledge from our
          experts.
        </p>
      </div>

      {/* eBooks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {ebooks.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {book.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm">{book.description}</p>
              <a
                href={book.link}
                className="mt-5 inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Read now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElearningPage;
