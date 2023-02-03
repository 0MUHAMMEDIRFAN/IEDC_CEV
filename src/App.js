import './App.css';
import Footer from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';
import Events from './components/Events/Events'
import Banner from './components/Banner/Banner'
import About from './components/About/About';
import ImageSlider from './components/EventsCopy/Events';
import Startup from './components/Startup/Startup';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar />
        <Banner />
        <About />
        <Startup/>
        <Events />
        {/* <ImageSlider /> */}
        <Footer />

      </header>
    </div>
  );
}

export default App;
