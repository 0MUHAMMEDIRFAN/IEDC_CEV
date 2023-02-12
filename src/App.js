import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './Pages/Home';
import Team from './Pages/Team';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/IEDC_CEV" element={<Home />} />
            <Route exact path="/IEDC_CEV/team" element={<Team />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
