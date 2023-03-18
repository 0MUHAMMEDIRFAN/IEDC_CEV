import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Startup from '../components/Startup/Startup'

function StartupPage() {
  
  return (
    <div>
      <Navbar navFill="Startup" />
      <Startup  />
      <Footer/>
    </div>
  )
}

export default StartupPage
