import React from "react";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description:
        "Learn HTML, CSS, JavaScript, and modern frameworks to build responsive websites from scratch.",
    },
    {
      id: 2,
      title: "Python for Data Science",
      description:
        "Master Python programming, data analysis, and visualization with hands-on projects.",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Create Android and iOS apps using React Native and Flutter frameworks.",
    },
    {
      id: 4,
      title: "Cybersecurity Essentials",
      description:
        "Understand cybersecurity principles, network protection, and ethical hacking basics.",
    },
    {
      id: 5,
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Explore AI concepts, neural networks, and ML algorithms to build intelligent systems.",
    },
    {
      id: 6,
      title: "UI/UX Design Fundamentals",
      description:
        "Learn design principles, wireframing, and prototyping to create stunning user interfaces.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Our Courses</h1>
        <Link
          to="/send-message"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Send Message
        </Link>
      </div>

      {/* Courses Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              {course.title}
            </h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <Link
              to={`/course/${course.id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
