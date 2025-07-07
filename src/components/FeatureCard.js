// src/components/FeatureCard.js
import React from 'react';
import '../styles/FeatureCard.css';

export default function FeatureCard({ feature }) {
  return (
    <div className="features1-card">
      <div className="features1-number">
        {String(feature.id).padStart(2, '0')}
      </div>
      <h3 className="features1-card-title">{feature.title}</h3>
      <ul className="features1-points">
        {feature.points.map((pt, i) => <li key={i}>{pt}</li>)}
      </ul>
    </div>
  );
}