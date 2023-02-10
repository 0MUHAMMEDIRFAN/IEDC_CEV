import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Events from '../components/Events/Events'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Startup from '../components/Startup/Startup'

function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <About />
            <Startup />
            <Events />
            <Footer />
        </div>
    )
}

export default Home;
