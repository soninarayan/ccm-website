// src/components/HeroSection.js
import React from 'react';
import '../styles/HeroSection.css';
import { getPublicAssetUrl } from '../utils/assetHelper';

function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <video
        className="hero-video"
        src={getPublicAssetUrl('video.mp4')}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      />

      {/* Slightly lighter overlay */}
      <div className="hero-overlay" />

      {/* Centered Content */}
      <div className="hero-content">
        <h1>
          Improve Health Outcomes<br />
          and Increase Revenue
        </h1>
        <p>
          Our Chronic Care Management and Remote Patient Monitoring solutions<br />
          help you increase patient engagement, improve health outcomes,<br />
          and drive new revenue for your business.
        </p>
        <a href="#features" className="hero-cta">Schedule Demo</a>
      </div>
    </section>
  );
}

export default HeroSection;
