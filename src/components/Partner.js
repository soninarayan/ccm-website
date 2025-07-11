import React from 'react';
import '../styles/Partner.css';

const PARTNER_FEATURES = [
  {
    // Medical hand with cross (Bootstrap style)
    icon: (
      <span className="partner-svg-icon" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#0B53A6"/>
          <path d="M24 16v8M20 20h8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M15.5 29.5c0-1.38 1.12-2.5 2.5-2.5h12c1.38 0 2.5 1.12 2.5 2.5v.5c0 2.485-2.015 4.5-4.5 4.5h-8c-2.485 0-4.5-2.015-4.5-4.5v-.5z" fill="#fff" fillOpacity=".15" stroke="#fff" strokeWidth="2"/>
          <circle cx="24" cy="24" r="15" stroke="#fff" strokeWidth="2" opacity=".15"/>
        </svg>
      </span>
    ),
    title: "Personalized Support",
    desc: "Dedicated care team committed to providing exceptional support for your patients and practice."
  },
  {
    // Laptop with checkmark (Material style)
    icon: (
      <span className="partner-svg-icon" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#0B53A6"/>
          <rect x="14" y="18" width="20" height="12" rx="2" stroke="#fff" strokeWidth="2"/>
          <path d="M16 32h16M21 24l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    ),
    title: "Simple Integration",
    desc: "Our flexible platform seamlessly integrates with your EHR always keeping you in the loop."
  },
  {
    // Dollar sign in circle (Heroicons style)
    icon: (
      <span className="partner-svg-icon" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#0B53A6"/>
          <circle cx="24" cy="24" r="10" stroke="#fff" strokeWidth="2"/>
          <path d="M24 19v10M21.5 21.5C22 20.5 23 20 24 20c1.5 0 2.5 1 2.5 2s-1 2-2.5 2-2.5 1-2.5 2 1 2 2.5 2c1 0 2-.5 2.5-1.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>
    ),
    title: "New Revenue",
    desc: "We unlock new revenue stream for your practice with no additional overhead or costs to you."
  },
  {
    // Home with medical cross (Flat style)
    icon: (
      <span className="partner-svg-icon" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#0B53A6"/>
          <path d="M16 26v8a2 2 0 002 2h12a2 2 0 002-2v-8" stroke="#fff" strokeWidth="2"/>
          <path d="M24 14l-12 10h4v8h16v-8h4L24 14z" fill="#fff" fillOpacity=".15" stroke="#fff" strokeWidth="2"/>
          <path d="M24 22v4M22 24h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>
    ),
    title: "Proactive Care",
    desc: "Reduced hospital readmissions by proactively managing care and lowering emergency room visits"
  }
];

const Partner = () => (
  <section className="partner-section" aria-labelledby="partner-title">
    <div className="partner-container">
      <h2 id="partner-title" className="partner-title">
        A Partner You Can Rely On
      </h2>
      <div className="partner-features">
        {PARTNER_FEATURES.map((feature, idx) => (
          <div className="partner-feature" key={idx}>
            <div className="partner-icon">{feature.icon}</div>
            <h3 className="partner-feature-title">{feature.title}</h3>
            <p className="partner-feature-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Partner;