import React, { useState } from 'react';
import '../styles/ServicesSection.css';

// Import images directly
import ccmImage from '../assets/images/ccm.jpg';
import caseImage from '../assets/images/case.jpg';
import behavioralImage from '../assets/images/behavioral.jpg';
import rpmImage from '../assets/images/rpm.jpg';

const services = [
  {
    title: "Chronic Care Management",
    description: "Our CCM program enhances your practice with EHR-integrated technology and dedicated professionals, providing exceptional patient care.",
    image: ccmImage,
    link: `${process.env.PUBLIC_URL}/services/chronic-care-management`,
    modalContent: "Our Chronic Care Management (CCM) program is designed to provide comprehensive, continuous care for patients with multiple chronic conditions. Through regular check-ins, medication management, and care coordination, we help improve patient outcomes while generating additional revenue for your practice."
  },
  {
    title: "Case Management",
    description: "Medical Case Management services coordinate and optimize patient care, collaborating with patients, families, and providers to create personalized plans that help improve health outcomes and quality of life.",
    image: caseImage,
    link: `${process.env.PUBLIC_URL}/services/case-management`,
    modalContent: "Our Case Management services provide comprehensive care coordination for complex medical cases. We work closely with healthcare providers, patients, and their families to develop and implement personalized care plans that optimize health outcomes and improve quality of life."
  },
  {
    title: "Behavioral Health",
    description: "Our team delivers tailored care, support, and therapeutic solutions to assist patients in managing mental health challenges, alleviating stress, and reaching their wellness goals.",
    image: behavioralImage,
    link: `${process.env.PUBLIC_URL}/services/behavioral-health`,
    modalContent: "Our Behavioral Health services offer comprehensive mental health support and interventions. We provide evidence-based treatments, counseling, and support services to help patients manage their mental health conditions and improve their overall well-being."
  },
  {
    title: "Remote Patient Monitoring",
    description: "Access RPM services which are designed to track, monitor, and help provide treatment for your patients, enhancing care in the comfort of their homes.",
    image: rpmImage,
    link: `${process.env.PUBLIC_URL}/services/remote-patient-monitoring`,
    modalContent: "Our Remote Patient Monitoring (RPM) program uses cutting-edge technology to track vital signs and health metrics in real-time. This allows for early intervention, reduced hospitalizations, and better management of chronic conditions, all while patients remain comfortable at home."
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleKnowMore = (link) => {
    window.location.href = link;
  };

  const handleCardHover = (index) => {
    // Add hover functionality if needed
  };

  const handleCardLeave = () => {
    // Add leave functionality if needed
  };

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          Our programs are led by a licensed team of clinicians, ensuring professional delivery and support.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card"
              onClick={() => handleCardClick(service)}
            >
              <div className="image-container">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                <a href={service.link} className="learn-more-btn">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>×</button>
            <h3 className="modal-title">{selectedService.title}</h3>
            <p className="modal-text">{selectedService.modalContent}</p>
            <button
              className="know-more-button"
              onClick={() => handleKnowMore(selectedService.link)}
            >
              Know More
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection; 