import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage'; // Assurez-vous que le chemin est correct
import ProgramPage from './Pages/ProgramPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programme" element={<ProgramPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
