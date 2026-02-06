import React, { useState } from 'react';
import './App.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import profilePhoto from './images/profile-photo.jpg'; // Your photo

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">Abhay P</h1>

          {/* Hamburger icon */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="ABHAY_P.pdf" download="Abhay_P_Resume.pdf" onClick={() => setMenuOpen(false)}>Resume</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <h1 className="hero-title slide-in-left">
              Hi, I'm <span className="highlight">Abhay P</span>
            </h1>
            <p className="hero-subtitle">Python Developer</p>
            <p className="hero-description">
              Energetic Python Developer | Ready to Make an Impact

              A self-driven Python Developer with a strong foundation in Machine Learning and Artificial Intelligence. Skilled in building intelligent, data-driven solutions and translating complex models into scalable, real-world applications.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={profilePhoto}
              alt="Abhay P - Full Stack Developer"
              className="profile-photo"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2 className="section-title">About Me</h2>
                <h3 style={{ fontSize: '1.5rem', margin: '1rem 0', color: '#333' }}>Hi, I’m a Python Developer 👋</h3>
                <p className="about-description">
                  I’m a passionate Python Developer specializing in Artificial Intelligence and Machine Learning, focused on building intelligent, data-driven solutions. I enjoy solving complex problems using clean code, scalable architectures, and well-trained models.
                </p>
                <p className="about-description">
                  My journey started with curiosity about how data powers modern applications, and today I work on developing AI-driven systems, automating workflows, and deploying machine learning models that create real-world impact.
                </p>


                <div className="about-highlights">
                  <h3>What I Do</h3>
                  <ul className="highlights-list">
                    <li>🚀 Python Development & Automation</li>
                    <li>🤖 Machine Learning & AI Solutions</li>
                    <li>📊 Data Processing, Analysis & Visualization</li>
                    <li>🔧 API Development & Model Deployment</li>
                  </ul>
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Abhay P. All rights reserved.</p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/pabhay"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://www.instagram.com/abh4.y"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;