import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar(props) {

  useEffect(()=>{
    if (props.navFill) {
      let navFill = document.getElementById(props.navFill)
      navFill.style.color = "#DB6C10"
      navFill.style.borderBottom = "1px solid #DB6C10"
    }  
  })

  const [moved, setMoved] = useState(false)
  const [closed, setClosed] = useState(true)
  const [menu, setMenu] = useState(false)

  const scrolled = (h) => {
    if (window.scrollY >= 40) {
      setMoved(true)
    }
    else {
      setMoved(false)
    }
    setMenu(false)
    setClosed(true)
  }
  const navBtn = () => {
    setMenu(!menu);
    setClosed(!closed);
    if (closed && menu) { setClosed(false) }
    console.log("clicked");
  }
  window.addEventListener("scroll", scrolled)
  return (
    <div className="navbar">
      <div className={moved || !closed ? "scrolled blur" : "scrolled"}></div>
      <h2 id='logo'>IEDC</h2>
      <div className={menu ? "navLinks" : "navLinks hide"}>
        {/* <BrowserRouter> */}
        {/* <Routes> */}
        <Link to="/IEDC_CEV" >
          <h4 id='Home'>Home</h4>
        </Link>
        <Link to="/IEDC_CEV/startup">
          <h4 id='Startup'>Startup</h4>
        </Link>
        <Link to="/IEDC_CEV/events" >
          <h4 id='Events'>Events</h4>
        </Link>
        <Link to="/IEDC_CEV/team">
          <h4 id='Team'>Team</h4>
        </Link>
        <Link to="/IEDC_CEV/gallery">
          <h4 id='Gallery'>Gallery</h4>
        </Link>
        <Link to="/IEDC_CEV/contact">
          <h4 id='Contact'>Contact</h4>
        </Link>
        {/* </Routes> */}
        {/* </BrowserRouter> */}

      </div>
      <label className="menuBtn" onClick={navBtn}><span className={menu ? "x" : ""}></span></label>
      <div className={menu ? 'curtain ' : "curtain none"} onClick={navBtn}></div>

    </div>
  )
}

export default Navbar
