import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  section: {
    padding: '20px 0 60px',
    background: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #1a237e 100%)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: '60px',
    '@media (max-width: 768px)': {
      padding: '20px 0 40px',
      paddingTop: '50px',
    },
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
    position: 'relative',
    padding: '0 1rem',
  },
  heading: {
    fontSize: '3.2rem',
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: '1.25rem',
    position: 'relative',
    marginTop: '0',
    fontWeight: '700',
    '@media (max-width: 768px)': {
      fontSize: '2.6rem',
      marginBottom: '1rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '2.2rem',
    },
  },
  subheading: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '4rem',
    fontSize: '1.7rem',
    fontWeight: '500',
    maxWidth: '1200px',
    margin: '0 auto 4rem',
    lineHeight: '1.2',
    padding: '0 20px',
    '@media screen and (min-width: 1025px)': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    '@media screen and (max-width: 1024px)': {
      fontSize: '1.6rem',
      lineHeight: '1.4',
      maxWidth: '95%',
      whiteSpace: 'normal',
    },
    '@media screen and (max-width: 768px)': {
      fontSize: '1.4rem',
      marginBottom: '3rem',
      maxWidth: '100%',
      padding: '0 15px',
    },
    '@media screen and (max-width: 480px)': {
      fontSize: '1.2rem',
      marginBottom: '2.5rem',
    },
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.25rem',
    padding: '0.25rem',
  },
  card: {
    width: '300px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    // Desktop and large screens
    '@media (max-width: 1400px)': {
      width: 'calc(25% - 1rem)',
      minWidth: '260px',
    },
    // Small desktop and laptop
    '@media (max-width: 1100px)': {
      width: 'calc(33.333% - 1rem)',
      minWidth: '280px',
    },
    // iPad and tablets
    '@media (max-width: 900px)': {
      width: 'calc(50% - 0.75rem)',
      minWidth: '240px',
    },
    // Phones
    '@media (max-width: 600px)': {
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto',
    },
  },
  imageContainer: {
    width: '100%',
    height: '160px',
    overflow: 'hidden',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  cardContent: {
    padding: '1.25rem 1rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
      padding: '1rem',
    },
  },
  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '0.75rem',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      fontSize: '1.2rem',
      marginBottom: '0.5rem',
    },
  },
  cardDescription: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.4',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  cardButton: {
    display: 'inline-block',
    padding: '0.6rem 1.25rem',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '6px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    marginTop: 'auto',
    fontWeight: '600',
    fontSize: '0.95rem',
  },
  modal: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
      width: '95%',
    },
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#666',
  },
  modalTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#1a237e',
    '@media (max-width: 768px)': {
      fontSize: '1.25rem',
    },
  },
  modalText: {
    marginBottom: '1.5rem',
    lineHeight: '1.6',
    color: '#444',
    fontSize: '1.2rem',  /* Increased from 0.95rem */
    fontWeight: '500',  /* Added font weight */
    '@media (max-width: 768px)': {
      fontSize: '1.1rem',  /* Increased from 0.95rem */
    },
  },
  knowMoreButton: {
    backgroundColor: '#1a237e',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
    '@media (max-width: 768px)': {
      padding: '0.6rem 1.25rem',
      fontSize: '0.95rem',
    },
  },
};

const services = [
  {
    id: 'ccm',
    title: 'Chronic Care Management',
    description: 'Our CCM program enhances your practice with EHR-integrated technology and dedicated professionals, providing exceptional patient care.',
    image: '/images/ccm.jpg',
    modalContent: 'Chronic Care Management (CCM) services provide comprehensive care coordination for patients with multiple chronic conditions. Our program includes regular check-ins, medication management, and coordination between healthcare providers to ensure optimal health outcomes.',
    link: '/services/chronic-care-management'
  },
  {
    id: 'case',
    title: 'Case Management',
    description: 'Medical Case Management services coordinate and optimize patient care, collaborating with patients, families, and providers to create personalized plans that help improve health outcomes and quality of life.',
    image: '/images/case.jpg',
    modalContent: 'Our Case Management services provide dedicated support to coordinate complex medical care needs. We work closely with patients, families, and healthcare providers to develop and implement comprehensive care plans that address all aspects of patient health and well-being.',
    link: '/services/case-management'
  },
  {
    id: 'behavioral',
    title: 'Behavioral Health',
    description: 'Our team delivers tailored care, support, and therapeutic solutions to assist patients in managing mental health challenges, alleviating stress, and reaching their wellness goals.',
    image: '/images/behavioral.jpg',
    modalContent: 'Our Behavioral Health services integrate mental health care with primary care, providing comprehensive support for patients dealing with mental health challenges. We offer counseling, therapy, and medication management services to help patients achieve better mental health outcomes.',
    link: '/services/behavioral-health'
  },
  {
    id: 'rpm',
    title: 'Remote Patient Monitoring',
    description: 'Access RPM services which are designed to track, monitor, and help provide treatment for your patients, enhancing care in the comfort of their homes.',
    image: '/images/rpm.jpg',
    modalContent: 'Our Remote Patient Monitoring (RPM) program uses cutting-edge technology to track vital signs and health metrics in real-time. This allows healthcare providers to monitor patients remotely, identify potential issues early, and make timely interventions when necessary.',
    link: '/services/remote-patient-monitoring'
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const handleCardHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleKnowMore = (link) => {
    navigate(link);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Our Services</h2>
        <p style={styles.subheading}>
          Our programs are led by a licensed team of clinicians, ensuring professional delivery and support.
        </p>
        <div style={styles.grid}>
          {services.map((service) => (
            <div
              key={service.id}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                const image = e.currentTarget.querySelector('img');
                if (image) image.style.transform = 'scale(1.05)';
                const button = e.currentTarget.querySelector('a');
                if (button) {
                  button.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                  button.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                const image = e.currentTarget.querySelector('img');
                if (image) image.style.transform = 'none';
                const button = e.currentTarget.querySelector('a');
                if (button) {
                  button.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  button.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }
              }}
              onClick={() => handleCardClick(service)}
            >
              <div style={styles.imageContainer}>
                <img src={service.image} alt={service.title} style={styles.cardImage} />
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{service.title}</h3>
                <p style={styles.cardDescription}>{service.description}</p>
                <a href={service.link} style={styles.cardButton}>Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div style={styles.modal} onClick={handleCloseModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={handleCloseModal}>×</button>
            <h3 style={styles.modalTitle}>{selectedService.title}</h3>
            <p style={styles.modalText}>{selectedService.modalContent}</p>
            <button
              style={styles.knowMoreButton}
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