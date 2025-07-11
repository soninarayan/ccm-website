import "../styles/WhoWeServe.css";

const WHO_WE_SERVE = [
  {
    image: "/images/case.jpg",
    title: "Private Practices",
    desc: "Deliver continuous patient monitoring and seamless EHR integration from one centralized platform",
    link: "/who-we-help/private-practices"
  },
  {
    image: "/images/integration.jpg",
    title: "Hospitals",
    desc: "Enable real-time insights and streamline chronic care management for improved patient outcomes.",
    link: "/who-we-help/hospitals"
  },
  {
    image: "/images/support.jpg",
    title: "Insurance Groups",
    desc: "Enhance member care management and reduce healthcare costs through proactive monitoring and intervention strategies.",
    link: "/who-we-help/insurance-groups"
  },
  {
    image: "/images/behavioral.jpg",
    title: "Third Party Administrator",
    desc: "Streamline healthcare administration and improve care coordination with our integrated platform solutions.",
    link: "/who-we-help/third-party-administrator"
  },
  {
    image: "/images/enroll.jpg",
    title: "Case Management Groups",
    desc: "Optimize patient care coordination and improve outcomes with our comprehensive case management tools.",
    link: "/who-we-help/case-management-groups"
  }
];

export default function WhoWeServe() {
  return (
    <section className="who-we-serve-section">
      <h2 className="who-we-serve-title">Who We Serve</h2>
      <div className="who-we-serve-container">
        {WHO_WE_SERVE.map((item, idx) => (
          <div className="who-we-serve-item" key={idx}>
            <div className="who-we-serve-image-container">
              <img src={item.image} alt={item.title} className="who-we-serve-image" />
            </div>
            <div className="who-we-serve-content">
              <h3 className="who-we-serve-heading">{item.title}</h3>
              <p className="who-we-serve-description">{item.desc}</p>
              <a className="who-we-serve-btn" href={item.link}>
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}