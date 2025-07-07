import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/AboutUs.css';

const MeshGradient = () => {
  return <div className="mesh-gradient" />;
};

const AboutUs = () => {
  return (
    <div className="about-page">
      <MeshGradient />
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background">
          <motion.div 
            className="hero-circle"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.div 
            className="hero-circle-2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.05 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          />
        </div>
        <motion.div 
          className="about-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.div 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We partner with you to deliver high quality care to your patients.
          </motion.div>
          <motion.div 
            className="hero-decoration"
            initial={{ width: "0%" }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <motion.div 
          className="vision-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
        >
          <motion.div 
            className="vision-text"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Vision</h2>
            <p>
              At Chronic Care Bridge, we believe in making healthcare accessible to all. 
              By providing increased patient access, our Chronic Care Management (CCM) 
              services are designed to bridge care gaps. With two-thirds of the Medicare 
              population managing multiple chronic conditions, your facility can benefit 
              significantly from available reimbursements.
            </p>
            <motion.div 
              className="separator"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.6 }}
            />
            <p>
              We are committed to enhancing clinical outcomes and expanding healthcare 
              access. With over 20 years of experience serving the Houston community, 
              we deeply understand patient needs, enabling us to efficiently manage and 
              treat chronic conditions.
            </p>
          </motion.div>
          <motion.div 
            className="vision-image"
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 }
            }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://soninarayan.github.io/ccm-website/images/about/healthcare-tech.jpg" 
              alt="Healthcare Technology" 
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <motion.div 
          className="mission-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
        >
          <div className="mission-layout">
            <motion.div 
              className="mission-image"
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -50 }
              }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://soninarayan.github.io/ccm-website/images/about/telemedicine.jpg" 
                alt="Telemedicine Consultation" 
              />
            </motion.div>

            <motion.div 
              className="mission-text-content"
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 50 }
              }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Mission</h2>
              <p className="mission-main">
                Our mission is to improve the lives of those with chronic conditions by 
                delivering innovative, patient-focused care management. We support healthcare 
                organizations with efficient, cost-effective coordination, ensuring patients 
                receive continuous care for better health outcomes.
              </p>
              <div className="mission-points">
                <motion.div 
                  className="point"
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <i className="fas fa-heartbeat"></i>
                  <p><strong>Patient-Centered Care:</strong> Focusing on individual patient needs and outcomes</p>
                </motion.div>

                <motion.div 
                  className="point"
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 }
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <i className="fas fa-chart-line"></i>
                  <p><strong>Continuous Improvement:</strong> Enhancing healthcare delivery through innovation</p>
                </motion.div>

                <motion.div 
                  className="point"
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 }
                  }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <i className="fas fa-users"></i>
                  <p><strong>Community Impact:</strong> Making healthcare accessible to all</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="about-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="cta-content">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Ready to Transform Your Healthcare Practice?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Partner with us to enhance patient care and optimize your practice operations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/contact" className="cta-button">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
