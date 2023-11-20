import React from 'react'
import "./Header.css";
import Hamburger from '../Hamburger/Hamburger';

const Header = () => {
  return (
    <section className='h-wrapper'>
   <div className="flexCenter paddings innerWidth h-container">
    <img src= "./logo.png" alt="logo" width={100} />

    <div className="flexCenter h-menu">
       <a 
       href="">
     Residencies
       </a>
       <a 
       href="">

       </a>
       <a href="">Our Value</a>
       <a href="">Contact Us</a>
       <a href="">Get started</a> 
       <button className="button">
        <a href="">Contact</a>
       </button>
    </div>
    <Hamburger/>
   </div>
    </section>
  )
}

export default Header