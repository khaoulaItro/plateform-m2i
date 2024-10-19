import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';  // Assure-toi que le chemin est correct
import Footer from '../src/components/Footer';   // Assure-toi que le chemin est correct
import WelcomeSection from '../src/components/WelcomeSection';
function App() {
  return (
    <div className="App">
      <Header />
     <WelcomeSection />
      <Footer />
    </div>
  );
}

export default App;
