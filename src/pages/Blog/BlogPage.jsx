// src/pages/BlogPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of E-Learning",
      category: "News",
      date: "15th August, 2025",
      description: "Explore how AI and interactive tools are transforming online learning...",
      image: "https://source.unsplash.com/400x250/?education,online",
    },
    {
      id: 2,
      title: "Top 10 Study Tips for Online Students",
      category: "Tips",
      date: "12th August, 2025",
      description: "Practical strategies to stay motivated and succeed in your e-learning journey...",
      image: "https://source.unsplash.com/400x250/?study,tips",
    },
    {
      id: 3,
      title: "The Rise of Virtual Classrooms",
      category: "Events",
      date: "5th August, 2025",
      description: "Virtual classrooms are bridging the gap between learners and teachers...",
      image: "https://source.unsplash.com/400x250/?classroom,virtual",
    },
    {
      id: 4,
      title: "E-Learning in Nepal: Opportunities Ahead",
      category: "News",
      date: "1st August, 2025",
      description: "How e-learning is shaping the education landscape in Nepal...",
      image: "https://source.unsplash.com/400x250/?Nepal,education",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Blog we share</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover insightful and engaging articles on our blog. From industry
          news to expert tips, we design content to inspire and inform. Explore
          our latest posts and join the conversation today!
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search Blogs"
            className="w-80 px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none"
          />
          <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            🔍
          </button>
        </div>

        {/* Add Blog Button */}
        <div className="mt-6">
            <Link to="/addblog">
                <button className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700">
                    + Add Blog
                 </button>
            </Link>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">
                {blog.category} | {blog.date}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-gray-800">
                {blog.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{blog.description}</p>
              <button className="mt-3 text-blue-600 font-semibold hover:underline">
                Read more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
