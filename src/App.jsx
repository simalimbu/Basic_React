import React from "react"  
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CountPractice from "./CountPractice";
import Index from "./pages/Index";
import AddStudent from "./pages/CreateStudent";
import EditStudent from "./pages/EditStudent";
import CreateTeacher from "./pages/CreateTeacher";
import EditTeacher from "./pages/EditTeacher";
import LoginPage from "./pages/LoginPage";



const App = () => {
    return(
        <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Index/>} />
              <Route path="/count" element={<CountPractice/>} />
              <Route path="/addstudent" element={<AddStudent/>} /> 
              <Route path="/editstudent" element={<EditStudent/>} />
              <Route path="/addteacher" element={<CreateTeacher/>} />
              <Route path="/editteacher" element={<EditTeacher/>} />
              <Route path="/login" element={<LoginPage/>} />
          </Routes>
        </BrowserRouter>
        </>
    );
};

export default App;