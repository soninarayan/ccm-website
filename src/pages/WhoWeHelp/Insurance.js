import '../WhoWeHelp/Insurance.css';
import React, { useEffect } from 'react';

import HospitalHero from "../WhoWeHelp/WWHImages/Insurance.jpg";
import ImproveCashflowImg from "../WhoWeHelp/WWHImages/revenue.jpg";
import HowItWorksImg1 from "../WhoWeHelp/WWHImages/how1.jpg";
import HowItWorksImg2 from "../WhoWeHelp/WWHImages/how2.jpg";
import HowItWorksImg3 from "../WhoWeHelp/WWHImages/how3.jpg";
import TestimonialPhoto from "../WhoWeHelp/WWHImages/Drjanki.webp";

const howItWorksSteps = [
  {
    number: 1,
    heading: "Book a personalized demo",
    subheading: "See how Chronic Care Bridge fits your workflow. We’ll walk you through the features and help you choose the right care program for your needs.",
    img: HowItWorksImg1,
    imgAlt: "Enroll Patients"
  },
  {
    number: 2,
    heading: " Onboard with expert guidance",
    subheading: "Our team will set you up quickly and train your staff so they feel confident managing care using our platform from day one",
    img: HowItWorksImg2,
    imgAlt: "Automate Care"
  },
  {
    number: 3,
    heading: "Deliver better care, consistently",
    subheading: "Launch high-impact chronic care programs that engage patients, reduce ER visits, and help your organization thrive under value-based care.",
    img: HowItWorksImg3,
    imgAlt: "Track Outcomes"
  }
];

const HowItWorksSection = () => (
  <section className="hospital-howitworks">
    <h2 className="hospital-howitworks-title">How It Works</h2>
    <p className="hospital-howitworks-subtitle">
      Our process is simple, seamless, and designed to fit your workflow. Here’s how we help your hospital deliver better care with less effort.
    </p>
    <div className="hospital-howitworks-cards">
      {howItWorksSteps.map((step, idx) => (
        <div className="howitworks-flip-card" key={idx}>
          <div className="howitworks-flip-card-inner">
            <div className="howitworks-flip-card-front">
              <div className="howitworks-step-number">{step.number}</div>
              <h3 className="howitworks-step-heading">{step.heading}</h3>
              <p className="howitworks-step-subheading">{step.subheading}</p>
            </div>
            <div className="howitworks-flip-card-back">
              <img src={step.img} alt={step.imgAlt} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="testimonial-section">
    <button className="testimonial-arrow testimonial-arrow-left" aria-label="Previous testimonial">
      <span>&larr;</span>
    </button>
    <div className="testimonial-container">
      <div className="testimonial-left">
        <div className="testimonial-label">TESTIMONIAL</div>
        <blockquote className="testimonial-quote">
          Chronic Care Bridge platform allowed us to Increase our quality measure scores and reduced hospital readmits, resulting in a decrease in overall spending.
        </blockquote>
        <div className="testimonial-person">
          <span className="testimonial-person-dot"></span>
          <span>
            Dr. Patricia Janki, MD.,PA| Owner,<br />
            Ecare Medical Group
          </span>
        </div>
      </div>
      <div className="testimonial-right">
        <img src={TestimonialPhoto} alt="Lindsey Valenzuela" className="testimonial-photo" />
      </div>
    </div>
    <button className="testimonial-arrow testimonial-arrow-right" aria-label="Next testimonial">
      <span>&rarr;</span>
    </button>
  </section>
);

const WhyItMattersAccordion = () => {
  const items = [
    {
      title: "Clinical Excellence",
      content: "Better control of chronic conditions through proactive, continuous care. We help you manage complex patient needs with precision and compassion."
    },
    {
      title: "New Revenue Streams",
      content: "Maximize reimbursable services with compliant, automated billing. Expand your revenue without increasing administrative burden."
    },
    {
      title: "EHR and Workflow Integration",
      content: "Designed to fit into your existing staff and tech stack, not replace it. We integrate seamlessly with your EHR and care management systems, automating workflows to reduce manual tasks and errors."
    },
    {
      title: "ROI Measument",
      content: "From readmission reduction and claims recapture to population health improvements and contract performance. We provide the data you need to prove value and drive growth."
    }
  ];
  const [openIdx, setOpenIdx] = React.useState(0);

  return (
    <div className="whyitmatters-accordion">
      {items.map((item, idx) => (
        <div
          key={item.title}
          className={`whyitmatters-accordion-item${openIdx === idx ? " open" : ""}`}
          onMouseEnter={() => setOpenIdx(idx)}
        >
          <button
            className="whyitmatters-accordion-title"
            onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            aria-expanded={openIdx === idx}
            type="button"
          >
            <span className={openIdx === idx ? "active" : ""}>{item.title}</span>
            <span className="whyitmatters-accordion-icon">
              {openIdx === idx ? "−" : "+"}
            </span>
          </button>
          {openIdx === idx && (
            <div className="whyitmatters-accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const WhyItMattersSection = () => (
  <section className="hospital-whyitmatters">
    <h2 className="hospital-whyitmatters-title">Why it Matters</h2>
    <WhyItMattersAccordion />
  </section>
);

const whyUsTextBlocks = [
  {
    heading: " 🩺 Preventative Care at Scale",
    text: "Identify high-risk patients early and engage them in structured, reimbursable care programs—improving outcomes while controlling costs."
  },
  {
    heading: "Claims & Risk Insights 📊",
    text: "Track the real-world impact of chronic care on hospitalization rates, ER usage, and adherence with detailed population health analytics and custom reports."
  },
  {
    heading: "📱 Member Engagement Tools ",
    text: "SMS reminders, virtual check-ins, and remote monitoring keep members on track and reduce the need for costly interventions or follow-up calls."
  }
];

const WhyUsSection = () => (
  <section className="hospital-whyus">
    <div className="hospital-whyus-header">
      <h2 className="hospital-whyus-title">Why Us</h2>
      <p className="hospital-whyus-subtitle">
        Whether you're building a chronic care program from scratch or expanding an existing one, Chronic Care Bridge offers flexible solutions tailored to fit organizations of every size and setting.
      </p>
    </div>
    <div className="hospital-whyus-row-redesign">
      <div className="hospital-whyus-textcol">
        {whyUsTextBlocks.map((block, idx) => (
          <div className="hospital-whyus-textbox" key={idx}>
            <div className="hospital-whyus-textbox-heading">{block.heading}</div>
            <div className="hospital-whyus-textbox-desc">{block.text}</div>
          </div>
        ))}
      </div>
      <div className="hospital-whyus-imgcol">
        <img src={ImproveCashflowImg} alt="Why Us" className="hospital-whyus-img-main" />
      </div>
    </div>
  </section>
);

const Insurance = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
  <>
    <section className="hospital-hero">
      <div className="hospital-hero-left">
        <span className="hospital-hero-small">Insurances</span>
        <h1 className="hospital-hero-title">Smarter Care. <br/>Stronger Returns.</h1>
        <p className="hospital-hero-desc">
          Our platform helps insurance groups improve population health with scalable remote monitoring and proactive engagement reducing utilization, boosting member satisfaction, and supporting value-based care.
        </p>
        <button className="hospital-hero-btn" onClick={() => window.location.href = "/contact"}>
          Book a Demo
        </button>
      </div>
      <div className="hospital-hero-right">
        <img
          src={HospitalHero}
          alt="Hospital Hero"
          className="hospital-hero-image"
        />
      </div>
    </section>
    {/* Why Us Section */}
    <WhyUsSection />
    <HowItWorksSection />
    <TestimonialSection />
    <WhyItMattersSection />
  </>
);
};

export default Insurance;