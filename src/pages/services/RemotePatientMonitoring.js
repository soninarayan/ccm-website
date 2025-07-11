import React from 'react';

const styles = {
  page: {
    padding: '120px 20px 80px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2.5rem',
    color: '#1a237e',
    marginBottom: '2rem',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'center',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#444',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  features: {
    marginTop: '3rem',
  },
  featuresList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  featureItem: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  featureTitle: {
    fontSize: '1.25rem',
    color: '#1a237e',
    marginBottom: '1rem',
  },
};

const RemotePatientMonitoring = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Remote Patient Monitoring</h1>
        <div style={styles.content}>
          <div>
            <p style={styles.text}>
              Our Remote Patient Monitoring (RPM) program revolutionizes healthcare delivery by enabling continuous monitoring of patient vital signs and health metrics from the comfort of their homes. Using state-of-the-art technology, we help healthcare providers deliver proactive care and early interventions.
            </p>
            <p style={styles.text}>
              The program includes real-time monitoring of vital signs, automated alerts for concerning readings, and regular reports to healthcare providers. This comprehensive approach helps improve patient outcomes while reducing hospital readmissions.
            </p>
          </div>
          <img src="/images/rpm.jpg" alt="Remote Patient Monitoring" style={styles.image} />
        </div>

        <div style={styles.features}>
          <h2 style={styles.title}>Key Features</h2>
          <div style={styles.featuresList}>
            <div style={styles.featureItem}>
              <h3 style={styles.featureTitle}>24/7 Monitoring</h3>
              <p style={styles.text}>Continuous monitoring of vital signs and health metrics with real-time data transmission.</p>
            </div>
            <div style={styles.featureItem}>
              <h3 style={styles.featureTitle}>Early Detection</h3>
              <p style={styles.text}>Automated alerts help identify potential health issues before they become serious.</p>
            </div>
            <div style={styles.featureItem}>
              <h3 style={styles.featureTitle}>Easy Integration</h3>
              <p style={styles.text}>Seamless integration with existing EHR systems and healthcare workflows.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemotePatientMonitoring; 