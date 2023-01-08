import React from 'react'
import { useState } from 'react'
import "./Navbar.css"

function Navbar() {
  const [moved, setMoved] = useState(false)
  const scrolled = (h) => {
    if (window.scrollY >= 50) {
      setMoved(true)
    }
    else {
      setMoved(false)
    }
  }
  window.addEventListener("scroll", scrolled)
  return (
    <div className={moved ? "navbar scrolled" : "navbar"}>
      <h2 className="logo">IEDC</h2>
      <div className='navShort'>
        <h4>Events</h4>
        <h4>Team</h4>
        <h4>About</h4>
        <h4>Contact</h4>


      </div>

    </div>
  )
}

export default Navbar
