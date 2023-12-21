import React, { useState,useEffect } from 'react'
import logo from "../../public/FOODI-logos_black.png"
import { FaRegUser } from "react-icons/fa";

import { SlCallIn } from "react-icons/sl";
const Navbar = () => {
  
  const [isSticky, setSticky] = useState(false);

  {/* handle scroll function */}
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navitems = <>
   <li>
    <a href='/'>Home</a></li>
    <li tableindex={0}>
        <details>
          <summary>menu</summary>
          <ul className="p-2">
            <li><a href="/menu">ALL</a></li>
            <li><a>SALAD</a></li>
            <li><a>PIZZA</a></li>
          </ul>
        </details>
      </li> <li tableindex={0}>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li><a>Online Order</a></li>
            <li><a>Table Booking</a></li>
            <li><a>Oreder Tracking</a></li>
          </ul>
        </details>
      </li>
      <li><a>Offers</a></li>
  </>
  return (
    <header className='max-w-screen-2x1 container mx-auto top-0 left-0 right-0 transition-all  duration-300 ease-in-out'> 
     <div className="navbar xl:px-24">
     <div
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
     <h1>logo </h1>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navitems }
    </ul>
  </div>
  <div className="navbar-end">
    {/*search button */}
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
    {/*cart items */}
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-3 lg:flex hidden item-center justify-center" >
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>

    {/* btn */}
    <button className="btn bg-green rounded-full px-6 text-white flex items-center gap-2"><FaRegUser /> Contact</button>
  </div>
</div>
    </header>
  )
}

export default Navbar