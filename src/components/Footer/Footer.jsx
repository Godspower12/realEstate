import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* Left side */}
            <div className="flexColStart f-left">
              <img src="./logo2.png" alt="footerlogo" width={120} />  
           
            <span className='secondaryText'>
                Our vision is to create the best place <br />
                 for people to live in
            </span>
            </div>
            {/* Right side */}
           
           <div className="flexColStart f-left">
            <span className='primaryText'>Information</span>
            <span className='secondaryText'>150 Colorado Street, Maitama, Abuja</span>
          
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
           </div>
          
          </div>
    <div className="attribution">
        Developed by <span><a href="http://godspowerogbudhu.netlify.app">Godspower</a></span> 
    </div>
    </section>
  )
}

export default Footer