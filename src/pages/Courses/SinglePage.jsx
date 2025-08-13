import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaHeart } from "react-icons/fa";

const SinglePage = () => {
  const { id } = useParams(); // Get course ID from URL
  const [isFavorite, setIsFavorite] = useState(false);

  // Example course data (in real case, fetch from DB or API)
  const courses = [
    {
      id: "1",
      title: "React for Beginners",
      description:
        "Learn React from scratch, including components, hooks, state management, and routing. Perfect for beginners!",
      image: "https://via.placeholder.com/600x300",
      rating: 4.5,
    },
    {
      id: "2",
      title: "Advanced JavaScript",
      description:
        "Master closures, prototypes, async/await, and advanced JS concepts to become a professional developer.",
      image: "https://via.placeholder.com/600x300",
      rating: 4.8,
    },
  ];

  // Find selected course
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <p className="text-center text-red-500 mt-10">Course not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Course Image */}
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover rounded-xl shadow-lg"
        />
        <button
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <FaHeart
            className={`text-2xl ${
              isFavorite ? "text-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      {/* Course Details */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold">{course.title}</h1>

        {/* Rating */}
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`${
                index < Math.round(course.rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              } text-lg`}
            />
          ))}
          <span className="ml-2 text-gray-600">{course.rating} / 5</span>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700 leading-relaxed">
          {course.description}
        </p>

        {/* Enroll Button */}
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default SinglePage;
