import React, { useState } from "react";

const courses = [
  {
    id: 1,
    title: "The Role of Water in Socioeconomic Growth",
    details:
      "Asian Development Bank's actions for water security and resilience in Asia-Pacific.",
  },
  {
    id: 2,
    title: "Accelerating Private Sector Action",
    details: "Responding to climate change with innovative and sustainable strategies.",
  },
  {
    id: 3,
    title: "Engaging the Private Sector through PPPs",
    details:
      "Local Public-Private Partnerships (PPPs) for sustainable water and sanitation in Asia.",
  },
  {
    id: 4,
    title: "Building Effective Systems",
    details: "On-site sanitation management and improved infrastructure planning.",
  },
  {
    id: 5,
    title: "Advanced Water Treatment",
    details: "Modern techniques for safe and sustainable water treatment.",
  },
  {
    id: 6,
    title: "Monitoring and Evaluation",
    details: "Best practices for tracking progress in water projects.",
  },
];

const LatestCourses = () => {
  const [openId, setOpenId] = useState(null);

  const toggleCourse = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">Latest Courses</h2>
      <p className="text-gray-500 mb-6">Click a course to view details.</p>

      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition"
            onClick={() => toggleCourse(course.id)}
          >
            <div className="flex justify-between items-center">
              <h3
                className={`font-semibold text-lg ${
                  openId === course.id ? "text-blue-600" : "text-gray-800"
                }`}
              >
                {course.title}
              </h3>
              <span className="text-xl">
                {openId === course.id ? "▲" : "▼"}
              </span>
            </div>
            {openId === course.id && (
              <p className="mt-2 text-gray-600">{course.details}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCourses;
