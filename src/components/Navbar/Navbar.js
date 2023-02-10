import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [moved, setMoved] = useState(false)
  const [closed, setClosed] = useState(true)
  const [menu, setMenu] = useState(false)
  const navigate = useNavigate();
  const scrolled = (h) => {
    if (window.scrollY >= 50) {
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
    // setMoved(true);
    if (closed && menu) { setClosed(false) }
    console.log("clicked");
  }
  window.addEventListener("scroll", scrolled)
  return (
    <div className="navbar">
      <div className={moved || !closed ? "scrolled blur" : "scrolled"}></div>
      <h2 className="logo" onClick={() => { navigate("/") }}>IEDC</h2>
      <div className={menu ? "navLinks" : "navLinks hide"}>
        {/* <BrowserRouter> */}
          {/* <Routes> */}
            <Link to="/events">
              <h4>Events</h4>
            </Link>
            <Link to="/team">
              <h4>Team</h4>
            </Link>
            <Link to="/About">
              <h4>About</h4>
            </Link>
            <Link to="/Contact">
              <h4>Contact</h4>
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
