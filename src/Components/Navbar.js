import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assetes/logo.png";
import { Link } from "react-router-dom";
import menu_icon from "../assetes/menu-icon.png"

const Navbar = () => {

   const [sticky , setSticky]= useState(false);

   useEffect(()=>{
    window.addEventListener('scroll' ,()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
   },[]);
  const [mobileMenu , setMobileMenu]=useState(false)
   const toggleMenu=()=>{
     mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
   }
  return (
   

    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
<Link to='/'>      <img src={logo} alt="logo" className="logo"></img></Link>
      <ul className={mobileMenu ? "" : 'hide-mobile-menu' }>
        <li> <Link to='/'>Home</Link></li>
        <li><Link to='/program'>Program</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/campus'>Campus</Link></li>
        <li><Link to='/testimonial'>Testimonial</Link></li>
        <li><Link to='/contact'><button className="btn">Contact Us</button></Link></li>
        
      </ul>

      <img src={menu_icon} alt="menu" className="menu-icon" onClick={toggleMenu}></img>
    </nav>
  );
};

export default Navbar;
