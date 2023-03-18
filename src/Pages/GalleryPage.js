import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Gallery from '../components/Gallery/Gallery'

function GalleryPage() {
  return (
    <div>
      <Navbar navFill="Gallery"/>
      <Gallery />
      <Footer/>
    </div>
  )
}

export default GalleryPage
