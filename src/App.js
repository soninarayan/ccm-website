// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './fontawesome'; // Import FontAwesome initialization
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RemotePatientMonitoring from './pages/services/RemotePatientMonitoring';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/remote-patient-monitoring" element={<RemotePatientMonitoring />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;