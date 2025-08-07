import React from "react"  
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CountPractice from "./CountPractice";
import Index from "./pages/Index";



const App = () => {
    return(
        <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Index/>} />
              <Route path="/count" element={<CountPractice/>} />
              
          </Routes>
        </BrowserRouter>
        </>
    );
};

export default App;