import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Program from "./Components/Programs/Program";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
// import Title from "./Components/Title/Title";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}/>
       
        <Route path="/program"element={<Program />} />
          <Route path="/about" element={<About />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/testimonial" element={<Testimonial/>} />
          <Route path="/contact" element={<Contact/>}  /> 
            
        </Routes>
      </BrowserRouter>
      

<Footer/>
    
    </div>
  );
}

export default App;
