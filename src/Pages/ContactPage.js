import React from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function ContactPage() {
  return (
    <div>
      <Navbar navFill="Contact"/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default ContactPage
