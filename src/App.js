// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ChronicCareManagement from './pages/OurServices/ChronicCareManagement';
import RemotePatientMonitoring from './pages/OurServices/RemotePatientMonitoring';
import Hospitals from './pages/WhoWeHelp/Hospitals';
import PrivatePractices from './pages/WhoWeHelp/PrivatePractices';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services/chronic-care-management" element={<ChronicCareManagement />} />
          <Route path="/services/remote-patient-monitoring" element={<RemotePatientMonitoring />} />
          <Route path="/who-we-help/hospitals" element={<Hospitals />} />
          <Route path="/who-we-help/private-practices" element={<PrivatePractices />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;