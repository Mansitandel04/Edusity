import React from 'react';
import './Hero.css'
import Program from '../Programs/Program';
import About from '../About/About';
import Campus from '../Campus/Campus';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';

const Hero = () => {
  return (
    <>
    <div className='hero container'>
   <div className='hero-text'>
    <h1>
      We Ensur better education for a better world
    </h1>
    <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
    <button className='btn'>Explore more <i className="fa-solid fa-arrow-right"></i></button>
   </div>
    </div>
   
    <Program/>
<About/>
<Campus/>
<Testimonial/>
<Contact/>

</>
  );
}

export default Hero;
