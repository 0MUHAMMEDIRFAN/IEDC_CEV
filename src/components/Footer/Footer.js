import React from 'react'
import './Footer.css'
import mapImage from "../../images/map.png"

function Footer() {
  return (
    <div className='footer'>
      <div className="mapContainer">
        <img src={mapImage} alt="Error" />
        <div className="details">
          <h2>Location & Contact</h2>
          <div className="location">
            <i className='bx bx-map'></i>
            <span>IEDC Collage of Engineering<br />Vadakara<br />kurunthodi,cherandathoor<br /><b>234423,lafksd</b></span>
          </div>
          <div className="contactDetails">
            <div className="phone">
              <i className='bx bxs-phone' ></i>
              <span>+910000000000</span>
            </div>
            <div className="phone">
              <i className='bx bx-envelope' ></i>
              <span>abcd@xyz.com</span>
            </div>
            <div className='social'>
              <i className='bx bxl-facebook'></i>
              <i className='bx bxl-linkedin'></i>
              <i className='bx bxl-twitter' ></i>
              <i className='bx bxl-instagram' onClick={()=>window.open("https://www.instagram.com/iedc_cev/")}></i>
            </div>
          </div>
        </div>

      </div>
      {/* <div className='footerDetails'> */}
      {/* <h4>Follow on</h4> */}

      <h4>©IEDC CEV - All rights reserved</h4>
      {/* </div> */}
    </div>
  )
}

export default Footer
