
import React from "react";


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
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Courses
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              {course.title}
            </h2>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
