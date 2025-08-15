import React, { useState } from 'react';
import './App.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

import Contact from './components/Contact';
import Skills from './components/Skills';
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
              <li><a href="resume.pdf" download="Abhay_P_Resume.pdf" onClick={() => setMenuOpen(false)}>Resume</a></li>
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
            <p className="hero-subtitle">Full-Stack Developer</p>
            <p className="hero-description">
              Energetic Full-Stack Developer | Ready to Make an Impact
              
              A self-driven fresher with a strong foundation in MERN stack and UI/UX principles. I turn complex challenges into elegant, user-friendly solutions.
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
                <p className="about-description">
                  I'm a passionate Full-Stack Developer with a love for creating innovative 
                  digital solutions. With expertise in both frontend and backend technologies, 
                  I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
                </p>
                <p className="about-description">
                  My journey in web development started with curiosity about how websites work, 
                  and it has evolved into a career where I get to build amazing user experiences 
                  and robust applications every day.
                </p>

                <div className="about-stats">
                  <div className="stat-item">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number"></span>
                    <span className="stat-label">Fresher</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">100%</span>
                    {/* <span className="stat-label">Client Satisfaction</span> */}
                  </div>
                </div>

                <div className="about-highlights">
                  <h3>What I Do</h3>
                  <ul className="highlights-list">
                    <li>🚀 Full-Stack Web Development</li>
                    <li>📱 Responsive Design & Mobile Apps</li>
                    <li>🔧 API Development & Integration</li>
                  </ul>
                </div>
              </div>

              <div className="about-image">
                <div className="image-container">
                  <div className="image-overlay">
                    <h2>Coding with passion</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <section className="projects" id="projects">
          <div className="container">
            <h2>My Projects</h2>

            <div className="projects-grid">
              {/* Project 1 */}
              <div className="project-card">
                <h3>🌦️ Weather App</h3>
                <p>A simple React app that fetches live weather using the OpenWeatherMap API. It allows users to search and view weather conditions in any city.</p>
                <a href="https://github.com/abhayprdp1" target="_blank" rel="noopener noreferrer">GitHub</a> |
                <a href="https://github.com/abhayprdp1" target="_blank" rel="noopener noreferrer"> Live Demo</a>
              </div>

              {/* Project 2 */}
              <div className="project-card">
                <h3>📝 To-Do List</h3>
                <p>This app helps users manage tasks with add, delete, and mark-as-complete features. Built with React and local storage.</p>
                <a href="https://github.com/abhayprdp1" target="_blank" rel="noopener noreferrer">GitHub</a> |
                <a href="https://github.com/abhayprdp1" target="_blank" rel="noopener noreferrer"> Live Demo</a>
              </div>

              {/* Project 3 */}
              <div className="project-card">
                <h3>🛒 E-Commerce UI</h3>
                <p>A responsive front-end clone of a shopping website. Features include product listing and a cart interface built using React and Tailwind CSS.</p>
                <a href="https://github.com/abhayprdp1" target="_blank" rel="noopener noreferrer">GitHub</a> |
                <a href="https://github.com/abhayprdp1" target="_blank" rel="noopener noreferrer"> Live Demo</a>
              </div>
            </div>
          </div>
        </section>

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