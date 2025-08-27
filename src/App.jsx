import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountPractice from "./CountPractice";
import Index from "./pages/Index";
import AddStudent from "./pages/CreateStudent";
import EditStudent from "./pages/EditStudent";
import CreateTeacher from "./pages/CreateTeacher";
import EditTeacher from "./pages/EditTeacher";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/NavBar";  // <-- Import navbar
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/Courses/CoursesPage";
import SinglePage from "./pages/Courses/SinglePage";
import SendMessage from "./pages/Courses/SendMessage";
import AboutUs from "./pages/AboutUs";
import Footer from "./pages/Footer";
import ContactUs from "./pages/ContactUs";
import BlogPage from "./pages/Blog/BlogPage";
import AddBlog from "./pages/Blog/AddBlog";
import LatestCourses from "./pages/Courses/LatestCourses";
import FaQsPage from "./pages/FaQsPage";
import ReadMore from "./pages/Blog/ReadMore";
import ElearningPage from "./pages/ElearningPage";
import SingleEbook from "./pages/SingleEbook";
import CommunityPage from "./pages/CommunityPage";


CoursesPage
const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* Always visible */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/count" element={<CountPractice />} />
        <Route path="/addstudent" element={<AddStudent />} /> 
        <Route path="/editstudent" element={<EditStudent />} />
        <Route path="/addteacher" element={<CreateTeacher />} />
        <Route path="/editteacher" element={<EditTeacher />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/index" element={<Index />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/courses" element={<CoursesPage/>} />
        <Route path="/course/:id" element={<SinglePage/>} />
        <Route path="/send-message" element={<SendMessage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/addblog" element={<AddBlog/>} />
        <Route path="/latest-courses" element={<LatestCourses/>} />
        <Route path="/Faqs" element={<FaQsPage/>} />
        <Route path="/blog/:id" element={<ReadMore />} />
        <Route path="/ebooks" element={<ElearningPage />} />
        <Route path="/ebook/foundation" element={<SingleEbook />} />
        <Route path="/community" element={<CommunityPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
