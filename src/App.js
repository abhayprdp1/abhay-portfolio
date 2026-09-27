import React, { useState } from 'react';
import './App.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

import CursorRibbonCanvas from './components/CursorRibbonCanvas';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SpinningFanIcon from './components/SpinningFanIcon';
import ScrollProgressBar from './components/ScrollProgressBar';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  const [activeNav, setActiveNav] = useState('Home');

  // Trigger scroll reveal observer for smooth scroll transitions
  useScrollReveal();

  const navItems = [
    { label: 'Home', href: '#banner' },
    { label: 'About Me', href: '#about-me' },
    { label: 'My Stack', href: '#my-stack' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (label, href) => {
    setActiveNav(label);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experiences = [
    {
      id: 1,
      company: "InThings Technologies",
      role: "Software Engineer",
      period: "Sept 2025 - Present"
    }
  ];

  return (
    <div className="App">
      {/* Interactive 3D WebGL Glowing Tube Light Stream Canvas Background */}
      <CursorRibbonCanvas />

      {/* Fixed Vertical Scroll Progress Bar on Right Side */}
      <ScrollProgressBar />

      {/* Floating Glassmorphic Header Navigation */}
      <header className="fixed-nav-header">
        <div className="nav-container">
          <a href="#banner" className="nav-brand">
            ABHAY P
          </a>

          <nav className="nav-links-wrapper">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.label, item.href);
                }}
                className={`nav-pill-link ${activeNav === item.label ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="ABHAY_P_RESUME.pdf"
            download="ABHAY_P_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn"
          >
            Resume
          </a>
        </div>
      </header>

      <main className="portfolio-main">
        {/* HERO BANNER SECTION (Role: Software Engineer, InThings Technologies) */}
        <section id="banner" className="hero-banner-section reveal">
          <div className="banner-content">
            <div className="banner-left-col reveal-left">
              <h1 className="banner-hero-title">
                <span className="accent-glow-text">SOFTWARE</span>
                <br />
                <span className="subtitle-hero-text">ENGINEER</span>
              </h1>

              <p className="banner-description">
                Hi! I'm <span className="highlight-name">Abhay P</span>. A Software Engineer at <span className="highlight-name">InThings Technologies</span> building high-performance, scalable web applications, modular software architectures & data-driven systems.
              </p>

              <div className="banner-actions">
                <a href="#contact" className="cta-talk-btn">
                  <span>Let's Talk</span>
                  <FaExternalLinkAlt size={13} />
                </a>

                <div className="availability-badge">
                  <span className="glowing-pulse-dot" />
                  <span>Available for Software Engineering opportunities</span>
                </div>
              </div>
            </div>

            <div className="banner-right-stats reveal-right">
              <div className="stat-card">
                <h3 className="stat-num">1+</h3>
                <p className="stat-label">Year of Experience</p>
              </div>

              <div className="stat-card">
                <h3 className="stat-num">10+</h3>
                <p className="stat-label">Completed Projects</p>
              </div>

              <div className="stat-card">
                <h3 className="stat-num">5K+</h3>
                <p className="stat-label">Hours Coded</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about-me" className="about-me-section reveal">
          <div className="about-me-quote-card reveal">
            <h2 className="quote-heading">
              "I believe in a data-driven & user-centered software engineering approach, ensuring every application is built for scale, performance, and real-world impact."
            </h2>
            <p className="quote-sub-tag">This is me.</p>
          </div>

          <div className="about-me-grid">
            <div className="about-left-headline reveal-left">
              <h3 className="about-headline">Hi, I'm Abhay.</h3>
            </div>

            <div className="about-right-body reveal-right">
              <p className="about-text-p">
                I'm a Software Engineer at InThings Technologies dedicated to turning complex requirements into clean, high-performance software solutions.
              </p>
              <p className="about-text-p">
                My approach focuses on building scalable, reliable architectures tailored to business objectives. By prioritizing code quality, robust system design, and API efficiency, I deliver software applications that drive tangible value.
              </p>

              <div className="about-highlights-pills">
                <span className="about-pill">🚀 Software Engineering & Architecture</span>
                <span className="about-pill">💻 Full-Stack Web Development</span>
                <span className="about-pill">🤖 AI & Machine Learning Integration</span>
                <span className="about-pill">🔧 Scalable API & Backend Systems</span>
              </div>
            </div>
          </div>
        </section>

        {/* MY STACK SECTION (Inspired by tajmirul.site) */}
        <Skills />

        {/* MY EXPERIENCE SECTION (InThings Technologies, Sept 2025 - Present) */}
        <section id="experience" className="taj-experience-section reveal">
          <div className="section-badge-header">
            <SpinningFanIcon size={20} />
            <span>MY EXPERIENCE</span>
          </div>

          <div className="experience-list-rows">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-list-row reveal">
                <div>
                  <span className="exp-company-name">{exp.company}</span>
                  <h3 className="exp-role-title">{exp.role}</h3>
                </div>
                <span className="exp-period-badge">{exp.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION (Inspired by tajmirul.site) */}
        <Projects />

        {/* CONTACT SECTION */}
        <Contact />
      </main>
    </div>
  );
}

export default App;