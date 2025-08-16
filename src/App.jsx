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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
