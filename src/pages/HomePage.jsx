import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
     

      {/* Introduction Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to Our E-Learning Platform
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Our platform provides high-quality online courses to help you learn
          anytime, anywhere. With interactive lessons, expert instructors, and a
          wide variety of subjects, we make learning engaging and accessible for
          everyone.
        </p>
        <a
          href="/courses"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md"
        >
          Explore Courses
        </a>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} E-Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
