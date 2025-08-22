// src/pages/ReadMore.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "The Future of E-Learning",
    category: "News",
    date: "15th August, 2025",
    description:
      "Explore how AI and interactive tools are transforming online learning...",
    fullContent:
      "Artificial Intelligence (AI) is revolutionizing education. With personalized learning paths, smart assessments, and immersive experiences through VR and AR, the future of e-learning looks promising. The integration of gamification and AI-driven tutors ensures students stay engaged while mastering new skills. Online learning platforms are becoming more adaptive, helping learners of all ages succeed.",
    image: "https://source.unsplash.com/800x400/?education,online",
  },
  {
    id: 2,
    title: "Top 10 Study Tips for Online Students",
    category: "Tips",
    date: "12th August, 2025",
    description:
      "Practical strategies to stay motivated and succeed in your e-learning journey...",
    fullContent:
      "Studying online requires discipline and consistency. Some useful tips include: 1) Set a daily schedule, 2) Create a distraction-free study space, 3) Take regular breaks, 4) Use digital tools to stay organized, 5) Actively participate in discussions, 6) Stay connected with peers, 7) Break tasks into smaller chunks, 8) Use the Pomodoro technique, 9) Reward yourself for progress, 10) Stay motivated by revisiting your goals regularly.",
    image: "https://source.unsplash.com/800x400/?study,tips",
  },
  {
    id: 3,
    title: "The Rise of Virtual Classrooms",
    category: "Events",
    date: "5th August, 2025",
    description:
      "Virtual classrooms are bridging the gap between learners and teachers...",
    fullContent:
      "Virtual classrooms have become essential in bridging gaps between teachers and students worldwide. With real-time video conferencing, shared whiteboards, and collaborative tools, learning has never been more accessible. As technology advances, we can expect even more interactive features like AI teaching assistants and advanced analytics to enhance the classroom experience.",
    image: "https://source.unsplash.com/800x400/?classroom,virtual",
  },
  {
    id: 4,
    title: "E-Learning in Nepal: Opportunities Ahead",
    category: "News",
    date: "1st August, 2025",
    description:
      "How e-learning is shaping the education landscape in Nepal...",
    fullContent:
      "E-learning in Nepal has opened doors for rural and urban students alike. Despite challenges like internet connectivity and access to digital devices, online education has gained momentum. With government initiatives and private sector collaboration, Nepal is witnessing a new era of education. The future holds promise with blended learning models and localized digital resources.",
    image: "https://source.unsplash.com/800x400/?Nepal,education",
  },
];

const ReadMore = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2 className="text-center text-red-500">Blog not found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      {/* Back Button */}
      <Link to="/blog">
        <button className="mb-6 bg-gray-500 px-4 py-2 rounded-lg hover:bg-gray-300">
          ← Back to Blogs
        </button>
      </Link>

      {/* Blog Content */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <p className="text-sm text-gray-500">
            {blog.category} | {blog.date}
          </p>
          <h1 className="text-3xl font-bold mt-2">{blog.title}</h1>
          <p className="mt-4 text-gray-700">{blog.fullContent}</p>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
