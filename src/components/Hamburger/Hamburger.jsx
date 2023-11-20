import React, {useState} from 'react'
import "./hamburger.css"

const Hamburger = () => {

  const [show, setShow] = useState(false)


  const handleMenu = () => {
    setShow(!show)
  }
  return (
    <div className='menu-wrap'>
    <input onClick={handleMenu} type="checkbox" className='toggler'/>
 <div className="hamburger">
    <div></div>
 </div>
 {show &&  <div className="menu-background">
    <div>
        <div className="menu-container">
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
        </div>
    </div>
 </div>
}
 
    </div>
  )
}

export default Hamburger