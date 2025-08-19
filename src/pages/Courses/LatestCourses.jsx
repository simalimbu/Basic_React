import React from "react";

const courses = [
  {
    id: 1,
    title: "The Role of Water in Socioeconomic Growth: Asian Development Bank's Actions for Water Security and Resilience in Asia-Pacific",
    image: "/images/course1.jpg",
  },
  {
    id: 2,
    title: "Accelerating Private Sector Action to Respond to Climate Change",
    image: "/images/course2.jpg",
  },
  {
    id: 3,
    title: "Engaging the Private Sector through Local Public-Private Partnerships (PPPs) for Sustainable Water and Sanitation in Asia",
    image: "/images/course3.jpg",
  },
  {
    id: 4,
    title: "Building Effective Systems for On-site Sanitation Management",
    image: "/images/course4.jpg",
  },
  {
    id: 5,
    title: "Advanced Water Treatment and Management Techniques",
    image: "/images/course5.jpg",
  },
  {
    id: 6,
    title: "Monitoring and Evaluation for Water Projects",
    image: "/images/course6.jpg",
  },
];

const LatestCourses = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">Latest Courses</h2>
      <p className="text-gray-500 mb-6">Click to view and take courses, anytime.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{course.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCourses;
