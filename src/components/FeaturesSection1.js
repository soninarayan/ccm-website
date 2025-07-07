// src/components/FeaturesSection1.js
import React from 'react';
import FeatureCard from './FeatureCard';
import '../styles/FeaturesSection1.css';

const features = [
  { id:1, title: 'Improve Health Outcomes', points: ['Tailored support','Effective management','Proactive monitoring'] },
  { id:2, title: 'Increase Engagement', points: ['Regular check-ins','Active health management','Stronger patient relationships'] },
  { id:3, title: 'More Revenue', points: ['Billable services','Timely visits','Gap reimbursement'] },
];

export default function FeaturesSection1() {
  return (
    <section className="features1-section" id="features">
      <div className="features1-wave">{/* …SVG as before… */}</div>
      <div className="features1-content">
        <h2 className="features1-title">Your Priority, Our Focus.</h2>
        <div className="features1-grid">
          {features.map(f => (
            <FeatureCard key={f.id} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}