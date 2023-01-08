import './App.css';
import Footer from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';
import Events from './components/Events/Events'
import Banner from './components/Banner/Banner'
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <Navbar/>
       <Banner/>
       <About/>
       <Events/>
       <Footer/>
       
      </header>
    </div>
  );
}

export default App;