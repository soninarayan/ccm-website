import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { 
  faUsers, 
  faSyncAlt, 
  faFileInvoiceDollar, 
  faMobileAlt, 
  faBell 
} from '@fortawesome/free-solid-svg-icons';


import ccmImg from './images/ccm.jpg';
import healthcareTechImg from './images/healthcare-tech.jpg';
import telemedicineImg from './images/telemedicine.jpg';
import supportImg from './images/support.jpg';
const pageData = {
  heroImage: ccmImg,
  hero: {
    headline: 'Chronic Care Management (CCM)',
    subheading: 'Ongoing, proactive support for patients with two or more chronic conditions—designed to improve clinical outcomes, boost patient satisfaction, and capture every dollar of eligible reimbursement.',
  },
  sections: [
    {
      image: healthcareTechImg,
      title: 'A Proactive, Personalized Approach',
      text: 'Our dedicated care coordinators act as an extension of your practice, providing patients with the consistent, personalized support they need to stay on track. Through regular check-ins and proactive outreach, we help patients manage their conditions, adhere to treatment plans, and avoid preventable complications.'
    },
    {
      image: telemedicineImg,
      title: 'Seamless Integration, Powerful Insights',
      text: 'Our platform integrates seamlessly with your existing EHR, providing you with a holistic view of your patients\' health. With real-time data and actionable insights, you can identify at-risk patients, intervene earlier, and deliver more effective, data-driven care.'
    }
  ],
  intro: 'Our CCM program pairs your care team with a dedicated clinical support staff and integrated technology platform. Between office visits, we monitor vital signs, coach patients on self‑management, and automate the documentation that powers Medicare reimbursements. Let us help you close gaps in care, reduce unnecessary hospitalizations, and deliver a truly patient‑centered experience.',
  features: [
    {
      icon: faUsers,
      title: 'Dedicated Care Team',
      description: 'Licensed nurses & certified care coordinators become an extension of your practice. They conduct structured weekly outreach calls, review patient‐reported data, and escalate any risks directly to your providers.',
    },
    {
      icon: faSyncAlt,
      title: 'Seamless EHR Integration',
      description: 'Bi‑directional data syncing with your existing electronic health record eliminates duplicate charting. All progress notes, medication lists, and lab results flow automatically into your system, so your staff only ever works in one place.',
    },
    {
      icon: faFileInvoiceDollar,
      title: 'Automated Documentation & Billing',
      description: 'Every patient interaction is time‑stamped and captured in billing‑ready progress notes. At the end of each 30‑day CCM window, we generate a compliance‑checked summary that meets CMS requirements—so you maximize reimbursement without extra back‑office effort.',
    },
    {
      icon: faMobileAlt,
      title: 'Patient Engagement Portal',
      description: 'Through our secure mobile and web app, patients log symptoms, medications, and device readings on their own schedule. Two‑way messaging and educational modules keep them engaged and empowered between calls.',
    },
    {
      icon: faBell,
      title: 'Real‑Time Alerts & Compliance Flags',
      description: 'Customizable thresholds trigger instant alerts for missed check‑ins, abnormal readings, or patient‑reported red‑flags. Your care team sees these alerts on a unified dashboard—so clinical issues are caught and documented immediately.',
    },
  ],
  benefits: [
    {
      title: 'Improved Clinical Outcomes',
      description: 'Patients in our CCM program experience up to a 40% reduction in 30‑day hospital readmissions, thanks to early intervention on warning signs.',
    },
    {
      title: 'Maximized Revenue Capture',
      description: 'Automated workflows and pre‑built CMS‑compliant notes mean you never leave reimbursement on the table—clients report recovering 100% of eligible CCM fees.',
    },
    {
      title: 'Enhanced Practice Efficiency',
      description: 'Offload routine outreach and documentation to our care coordinators. Your nurses and physicians can focus on high‑acuity patients and in‑office visits.',
    },
    {
      title: 'Scalable Growth',
      description: 'Add dozens—or hundreds—of patients without hiring additional headcount. Our flat‑fee model keeps your costs predictable as your program grows.',
    },
    {
      title: 'Actionable Population Insights',
      description: 'Monthly trend reports highlight clinical metrics (e.g., average A1C, blood pressure control) and financial KPIs—so you can continuously optimize your care pathways.',
    },
  ],
  howItWorksImage: supportImg,
  howItWorks: [
    {
      title: 'Identify & Enroll',
      description: 'We help you stratify your patient panel using EHR data, flagging those with two or more qualifying chronic conditions. Once consent is obtained, patients are seamlessly enrolled in the program.',
    },
    {
      title: 'Customize Care Plans',
      description: 'Collaborate with our clinical leads to set outreach cadence, select patient education modules, and define alert thresholds that match your practice’s protocols.',
    },
    {
      title: 'Continuous Monitoring',
      description: 'Patients log data via our portal or connected devices. Our system normalizes and displays trends—so your care coordinators immediately spot deviations.',
    },
    {
      title: 'Structured Outreach',
      description: 'Weekly check‑ins by phone or secure messaging ensure every patient touchpoint is documented. Any clinical concerns are triaged in real time and routed back to your providers.',
    },
    {
      title: 'Month‑End Close‑Out',
      description: 'At each 30‑day interval, we compile time‑stamped notes, call logs, and compliance checklists into a CMS‑ready summary. Simply review, approve, and submit—no manual paperwork required.',
    },
  ],
  faq: [
    {
      question: 'Which patients qualify for CCM?',
      answer: 'Any Medicare beneficiary with two or more chronic conditions—such as diabetes, hypertension, COPD, or CHF—is eligible. We can help you identify and consent them in under a week.',
    },
    {
      question: 'How quickly can we launch?',
      answer: 'Most practices go live in 10–14 days. Our implementation team handles onboarding, training, and EHR setup—so you start seeing value almost immediately.',
    },
    {
      question: 'What kind of support is included?',
      answer: 'You get a dedicated implementation specialist, 24/7 technical support, and a clinical operations manager who holds weekly governance calls to review program performance.',
    },
  ],
  cta: {
    headline: 'Ready to see how CCM can transform your practice?',
    contact: '(800) 123‑4567 | ccm@yourdomain.com',
  },
};

const ChronicCareManagement = () => {
  return <ServicePageLayout pageData={pageData} />;
};

export default ChronicCareManagement;
