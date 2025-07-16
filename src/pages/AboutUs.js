import React, { useEffect, useState } from 'react';
import '../styles/AboutUs.css';

import AboutIMage from "../assets/images/AboutUs-Background.jpg";
import AboutImage1 from "../assets/images/Private.jpg";
import AboutImage2 from "../assets/images/Hospital_Image.jpg";
import AboutImage3 from "../assets/images/AboutUs-Image2.jpg";
import MissionImage1 from "../assets/images/Personalizedsupport.jpg";
import MissionImage2 from "../assets/images/Smartcaredev.jpg";
import MissionImage3 from "../assets/images/Accessforall.jpg";

const whatWeDoFeatures = [
    {
        img: AboutImage1,
        alt: "Reduce Hospitalizations",
        title: "Reduce Hospitalizations & ER Visits",
        bullets: [
            "Proactive health monitoring",
            "Early intervention for at-risk patients"
        ],
        more: "We use predictive analytics and real-time monitoring to identify at-risk patients, enabling timely interventions and reducing unnecessary admissions. Our platform integrates seamlessly with EHRs for a holistic view of patient health."
    },
    {
        img: AboutImage2,
        alt: "Improve Productivity",
        title: "Improve Staff Productivity",
        bullets: [
            "Automated patient status tracking",
            "Reduces manual workflows"
        ],
        more: "Automated reminders, streamlined documentation, and intelligent task management free up your staff to focus on what matters most—patient care. Our dashboards provide actionable insights for continuous improvement."
    },
    {
        img: AboutImage3,
        alt: "Generate Revenue",
        title: "Generate Revenue for Your Practice",
        bullets: [
            "Automatic documentation of care",
            "Maximized reimbursements"
        ],
        more: "We ensure compliance with billing requirements and maximize reimbursements through accurate, automated tracking of care coordination activities. Our reports make audits and claims submissions hassle-free."
    }
];

// Modal component for feature details
function FeatureModal({ open, onClose, feature }) {
    if (!open) return null;
    return (
        <div className="feature-modal-backdrop" onClick={onClose}>
            <div
                className="feature-modal-card feature-modal-large"
                onClick={e => e.stopPropagation()}
                tabIndex={-1}
            >
                <button className="feature-modal-close" onClick={onClose} aria-label="Close">&times;</button>
                <h3>{feature.title}</h3>
                <p>{feature.more}</p>
                <button className="feature-modal-contact-btn" onClick={() => window.location.href = "/contact"}>
                    Contact us
                </button>
            </div>
        </div>
    );
}

function WhatWeDoSection() {
    const [modalIdx, setModalIdx] = useState(null);

    // Close modal on ESC key
    useEffect(() => {
        if (modalIdx === null) return;
        const handler = (e) => {
            if (e.key === 'Escape') setModalIdx(null);
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [modalIdx]);

    return (
        <section className="what-we-do-section">
            <div className="what-we-do-header">
                <h2>What We Do</h2>
                <p>
                    We are leaders in chronic care management that believe better care comes from better communication.<br />
                    Founded in 2025, better connected patients equals better patient care.
                </p>
            </div>
            <div className="what-we-do-cards">
                {whatWeDoFeatures.map((feature, idx) => (
                    <div className="what-we-do-card" key={feature.title}>
                        <div className="what-we-do-img-wrapper">
                            <img src={feature.img} alt={feature.alt} className="what-we-do-icon-large" />
                        </div>
                        <h3 className="what-we-do-title">{feature.title}</h3>
                        {/* <ul className="what-we-do-bullets">
                            {feature.bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul> */}
                        <button
                            className="what-we-do-plus"
                            aria-label="More info"
                            onClick={() => setModalIdx(idx)}
                        >+</button>
                        <FeatureModal
                            open={modalIdx === idx}
                            onClose={() => setModalIdx(null)}
                            feature={feature}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

// Accordion component for values
const valuesData = [
    {
        title: "Compassion",
        content: "We lead with empathy. Every patient we support is someone’s family, and we treat their care journey with the humanity and dignity it deserves."
    },
    {
        title: "Innovation",
        content: "We don’t just adapt, we design. Our technology is built to challenge outdated processes and deliver smarter, scalable care coordination."
    },
    {
        title: "Accountability",
        content: "We take ownership of outcomes - clinical and operational. We stand behind the accuracy, reliability, and results of the care we help deliver."
    },
    {
        title: "Collaboration",
        content: "Great care doesn’t happen in silos. We work closely with providers, payers, and partners to ensure our solutions fit your workflow—not the other way around."
    },
    {
        title: "Equity",
        content: "We believe high-quality care shouldn’t depend on geography, background, or resources. Our solutions are designed to close gaps and expand access for all."
    }
];

function Accordion() {
    const [openIndex, setOpenIndex] = React.useState(0);
    return (
        <div className="values-accordion">
            {valuesData.map((item, idx) => (
                <div key={item.title} className={`values-accordion-item${openIndex === idx ? " open" : ""}`}>
                    <button
                        className="values-accordion-title"
                        onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                        aria-expanded={openIndex === idx}
                    >
                        <span className={openIndex === idx ? "active" : ""}>{item.title}</span>
                        <span className="values-accordion-icon">
                            {openIndex === idx ? "−" : "+"}
                        </span>
                    </button>
                    {openIndex === idx && (
                        <div className="values-accordion-content">
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

// Mission section code
const missionValues = [
    {
        key: 'trust',
        title: 'Personalized Support',
        desc: 'Every patient journey is different. We focus on individualized care plans and regular check-ins to ensure patients feel heard, supported, and cared for every step of the way.',
        image: MissionImage1,
    },
    {
        key: 'harmony',
        title: 'Smarter Care Delivery',
        desc: 'We streamline workflows with technology that automates simplifies CCM ,and documentation- saving time and improving outcomes.',
        image: MissionImage2,
    },
    {
        key: 'empathy',
        title: 'Access for All',
        desc: 'We believe better healthcare shouldn’t depend on zip code or resources. Our solutions are designed to expand access, reduce disparities, and bring quality care to more communities.',
        image: MissionImage3,
    },
];

function OurMissionSection() {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="our-mission-section">
            <div className="our-mission-left">
                <h2 className="our-mission-title">Our Mission</h2>
                <div className="our-mission-values-list">
                    {missionValues.map((val, idx) => (
                        <div
                            key={val.key}
                            className={`our-mission-value${activeIdx === idx ? ' active' : ''}`}
                            onMouseEnter={() => setActiveIdx(idx)}
                            onFocus={() => setActiveIdx(idx)}
                            tabIndex={0}
                        >
                            <h3>{val.title}</h3>
                            <p>{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="our-mission-right">
                {missionValues.map((val, idx) => (
                    <img
                        key={val.key}
                        src={val.image}
                        alt={val.title}
                        className={`our-mission-image${activeIdx === idx ? ' show' : ''}`}
                        style={{
                            zIndex: activeIdx === idx ? 2 : 1,
                            opacity: activeIdx === idx ? 1 : 0,
                            transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1)'
                        }}
                    />
                ))}
            </div>
        </section>
    );
}

const AboutUs = () => {
    return (
        <>
            <section className="aboutus-hero">
                <div className="aboutus-hero-content">
                    <span className="aboutus-hero-badge">Meet Chronic Care Bridge</span>
                    <h1 className="aboutus-hero-title">Our Story</h1>
                    <blockquote className="aboutus-hero-quote">
                        <em>
                            At Chronic Care Bridge, we didn’t set out to chase trends - we set out to solve real problems. While the spotlight often shines on flashy tech ventures, we saw a critical need in a space that impacts millions every day: chronic care. Our mission is simple - use intelligent technology and thoughtful care coordination to improve lives, reduce burden on providers, and make a meaningful difference in how healthcare is delivered, now and into the future.
                        </em>
                        <footer className="aboutus-hero-quote-author">
                            — Dr. Patricia Janki, Founder
                        </footer>
                    </blockquote>
                </div>
                <div className="aboutus-hero-image-wrapper">
                    <img
                        src={AboutIMage}
                        alt="About Us"
                        className="aboutus-hero-image"
                    />
                </div>
            </section>
            {/* What We Do Section */}
            <WhatWeDoSection />
            {/* Our Mission Section */}
            <OurMissionSection />
            {/* Our Values Section */}
            <section className="our-values-section">
                <div className="our-values-left">
                    <span className="our-values-badge">IMPACT DRIVEN</span>
                    <h2 className="our-values-title">Our Vision</h2>
                    <p className="our-values-desc">
                        The belief that we can do better as a healthcare industry for patients and providers is reinforced by our five core values.
                    </p>
                </div>
                <div className="our-values-right">
                    <Accordion />
                </div>
            </section>
        </>
    );
};

export default AboutUs;
