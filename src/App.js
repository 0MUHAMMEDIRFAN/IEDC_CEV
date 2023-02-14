import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Events from './Pages/Events';
import Home from './Pages/Home';
import Team from './Pages/Team';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path="/IEDC_CEV" element={<Home />} />
            <Route path="/IEDC_CEV/team" element={<Team />} />
            <Route path="/IEDC_CEV/events" element={<Events />} />
            <Route path="/IEDC_CEV/About" element={<Team />} />
            <Route path="/IEDC_CEV/Contact" element={<Team />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
