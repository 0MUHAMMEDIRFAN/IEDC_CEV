import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Gallery from '../components/Gallery/Gallery'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Startup from '../components/Startup/Startup'

function Home() {
    return (
        <div>
            <Navbar navFill="Home" />
            <Banner />
            <About />
            <Startup viewMore={true} num={2}/>
            <Gallery viewMore={true}/>
            <Footer />
        </div>
    )
}

export default Home;
