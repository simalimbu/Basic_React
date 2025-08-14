// src/pages/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      tutor: "John Doe",
      image: "https://via.placeholder.com/400x200?text=Web+Dev",
    },
    {
      id: 2,
      title: "Python for Data Science",
      tutor: "Jane Smith",
      image: "https://via.placeholder.com/400x200?text=Python+DS",
    },
    {
      id: 3,
      title: "Mobile App Development",
      tutor: "Mike Johnson",
      image: "https://via.placeholder.com/400x200?text=Mobile+Dev",
    },
    {
      id: 4,
      title: "Cybersecurity Essentials",
      tutor: "Alice Brown",
      image: "https://via.placeholder.com/400x200?text=Cybersecurity",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        About Our eLearning Platform
      </h1>
      <p className="max-w-3xl mx-auto text-gray-700 text-center mb-10">
        Welcome to our eLearning platform! We provide high-quality courses
        taught by experienced instructors. Our mission is to make learning
        accessible, engaging, and effective for everyone. Explore our courses
        and join thousands of students learning new skills every day.
      </p>

      {/* Courses & Tutors */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {course.title}
              </h2>
              <p className="text-gray-700 mb-2">Instructor: {course.tutor}</p>
              <p className="text-gray-600 text-sm">
                This course provides practical skills and knowledge to help you
                excel in {course.title.split(" ")[0]}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
