import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ContactPage from './Pages/ContactPage';
import EventsPage from './Pages/EventsPage';
import GalleryPage from './Pages/GalleryPage';
import Home from './Pages/Home';
import StartupPage from './Pages/StartupPage';
import TeamPage from './Pages/TeamPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path="/IEDC_CEV" element={<Home />} />
            <Route path="/IEDC_CEV/startup" element={<StartupPage />} />
            <Route path="/IEDC_CEV/events" element={<EventsPage />} />
            <Route path="/IEDC_CEV/gallery" element={<GalleryPage />} />
            <Route path="/IEDC_CEV/team" element={<TeamPage />} />
            <Route path="/IEDC_CEV/Contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
