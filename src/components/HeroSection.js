// src/components/HeroSection.js
import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <video
        className="hero-video"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Slightly lighter overlay */}
      <div className="hero-overlay" />

      {/* Centered Content */}
      <div className="hero-content">
        <h1>Improve health outcomes <br />
        And  <br />Increase your revenue</h1>
        <p>
          Our Chronic Care Management and Remote Patient Monitoring solutions are designed to help you  increase patient engagement, improve their health outcomes, and drive new revenue for your business.
        </p>
        <a href="#features" className="hero-cta">Schedule Demo</a>
      </div>
    </section>
  );
}

export default HeroSection;
