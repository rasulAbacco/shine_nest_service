import React from 'react';
import HomeLayout from '../components/HomeLayout';
import '../styles/aboutPage.css';

// Import icons from react-icons
import { FaBullseye, FaEye, FaHeart, FaCertificate, FaLeaf, FaShieldAlt } from 'react-icons/fa';

const journey = [
  {
    year: '2014',
    title: 'Company Founded',
    description:
      'Started with a vision to revolutionize facility management services with a focus on cleaning and basic maintenance.',
  },
  {
    year: '2017',
    title: 'Service Expansion',
    description:
      'Expanded services to include pest control, landscaping, and comprehensive office support systems.',
  },
  {
    year: '2020',
    title: 'Technology Integration',
    description:
      'Implemented digital tools and customer portals for service booking, feedback, and facilities reporting.',
  },
  {
    year: '2023',
    title: 'ShineNest Services Launch',
    description:
      'Rebranded and upgraded service operations with eco-friendly products, enhanced training, and process automation.',
  },
];

const certifications = [
  {
    icon: <FaCertificate className="icon" aria-label="ISO 9001:2015 Icon" />,
    title: 'ISO 9001:2015',
    description: 'Quality Management System Certification',
  },
  {
    icon: <FaLeaf className="icon" aria-label="Green Building Certified Icon" />,
    title: 'Green Building Certified',
    description: 'Sustainable Facility Management Practices',
  },
  {
    icon: <FaShieldAlt className="icon" aria-label="Safety Standards Icon" />,
    title: 'Safety Standards',
    description: 'OSHA Compliant Safety Protocols',
  },
];

const AboutPage = () => (
  <HomeLayout>
    <section className="about-top-section">
      <h1>About ShineNest Services</h1>
      <p>
        ShineNest Services is committed to delivering exceptional facility management
        and integrated soft services backed.
      </p>
      <div className="about-mission-cards">
        <div className="about-mission-card">
          <FaBullseye className="icon" aria-label="Our Mission Icon" />
          <h3>Our Mission</h3>
          <p>
            To provide premier home and office support services that enhance comfort,
            productivity, and trust for every customer.
          </p>
        </div>
        <div className="about-mission-card">
          <FaEye className="icon" aria-label="Our Vision Icon" />
          <h3>Our Vision</h3>
          <p>
            To be the leader in integrated services across every environment we serve,
            raising the benchmark for quality and client satisfaction.
          </p>
        </div>
        <div className="about-mission-card">
          <FaHeart className="icon" aria-label="Our Values Icon" />
          <h3>Our Values</h3>
          <p>
            Integrity, professionalism, environmental care, and a relentless commitment
            to exceed expectations define our work ethic.
          </p>
        </div>
      </div>
    </section>

    {/* Our Journey Section */}
    <section className="about-journey-section">
      <h2>Our Journey</h2>
      <p className="journey-subtitle">A decade of excellence and continuous growth</p>
      <div className="journey-timeline">
        {journey.map((item, idx) => (
          <div
            key={idx}
            className={`journey-item ${idx % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="journey-dot" />
            <div className="journey-content">
              <div className="journey-year">{item.year}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Certifications & Partnerships Section */}
    <section className="about-certifications-section">
      <h2>Certifications & Partnerships</h2>
      <p className="certifications-subtitle">
        Trusted by industry leaders and certified professionals
      </p>
      <div className="certifications-cards">
        {certifications.map(({ icon, title, description }, idx) => (
          <div key={idx} className="certification-card">
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  </HomeLayout>
);

export default AboutPage;
