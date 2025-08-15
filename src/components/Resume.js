// src/components/Resume.js
import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section className="resume-section" id="resume">
      <h2>Resume</h2>
      <p>You can view or download my resume below:</p>

      <a 
        href="/resume.pdf" 
        download="Abhay_P_Resume.pdf" 
        className="resume-button"
      >
        📄 Download Resume
      </a>

      {/* Optional: View Online Button */}
      <br />
      <a 
        href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="resume-button outline"
      >
        👁️ View Resume Online
      </a>
    </section>
  );
}

export default Resume;
