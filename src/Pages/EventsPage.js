import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Events from '../components/Events/Events'

function EventsPage() {
  return (
    <div>
      <Navbar navFill="Events"/>
      <Events/>
      <Footer/>
    </div>
  )
}

export default EventsPage
