import React from "react"  
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CountPractice from "./CountPractice";



const App = () => {
    return(
        <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<CountPractice/>} />
              
          </Routes>
        </BrowserRouter>
        </>
    );
};

export default App;