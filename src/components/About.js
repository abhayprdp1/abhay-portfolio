import React from 'react';
import '../About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p className="about-description">
            I'm a passionate full-stack developer with a strong foundation in modern web technologies. 
            I love creating intuitive, user-friendly applications and solving complex problems with 
            clean, efficient code. My journey in web development started with curiosity and has evolved 
            into a deep passion for crafting digital experiences that make a difference.
          </p>
          
          <p className="about-description">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
            projects, or sharing my knowledge with the developer community. I believe in continuous 
            learning and staying up-to-date with the latest trends in web development.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies Mastered</span>
            </div>
          </div>

          <div className="about-highlights">
            <h3>What I Bring to the Table</h3>
            <ul className="highlights-list">
              <li>🚀 Modern React Development with Hooks & Context API</li>
              <li>⚡ Fast & Scalable Node.js Backend Solutions</li>
              <li>📱 Responsive Design that works on all devices</li>
              <li>🗄️ Database Design & Management (MongoDB, PostgreSQL)</li>
              <li>🔧 RESTful API Development & Integration</li>
              <li>🎨 UI/UX Implementation with attention to detail</li>
              <li>📊 Performance Optimization & Best Practices</li>
              <li>🔒 Security Implementation & Authentication</li>
            </ul>
          </div>
        </div>

        <div className="about-image">
          <div className="image-container">
            <img 
              src="https://via.placeholder.com/350x450/667eea/ffffff?text=Professional+Photo" 
              alt="Abhay - Full Stack Developer" 
              className="about-photo"
            />
            <div className="image-overlay">
              <p>"Passionate about creating digital solutions that matter"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
