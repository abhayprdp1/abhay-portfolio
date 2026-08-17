import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import SpinningFanIcon from './SpinningFanIcon';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      num: "_01.",
      title: "PPE Detection System",
      tech: "Python • YOLOv8 • OpenCV • Deep Learning",
      description: "Real-time Personal Protective Equipment compliance monitoring leveraging YOLOv8 deep learning computer vision model.",
      githubLink: "https://github.com/abhayprdp1/PPE-DETECTION-USING-YOLO-V8"
    },
    {
      id: 2,
      num: "_02.",
      title: "Clinic Management System",
      tech: "Python • REST API • Database • Web Dev",
      description: "A comprehensive management system for healthcare clinics to streamline patient records, appointment scheduling, and inventory.",
      githubLink: "https://github.com/abhayprdp1/Clinic-Management"
    },
    {
      id: 3,
      num: "_03.",
      title: "URL Shortener System",
      tech: "React • Node.js • Express • MongoDB",
      description: "Scalable URL shortening web service featuring real-time click tracking, custom aliases, and fast redirection routing.",
      githubLink: "https://github.com/abhayprdp1/url-shortner"
    }
  ];

  return (
    <section id="projects" className="taj-projects-section reveal">
      <div className="section-badge-header">
        <SpinningFanIcon size={20} />
        <span>SELECTED PROJECTS</span>
      </div>

      <div className="projects-list-rows">
        {projects.map((project) => (
          <div key={project.id} className="project-list-row reveal">
            <div className="proj-left">
              <span className="proj-num">{project.num}</span>
              <div className="proj-info">
                <h3 className="proj-title">{project.title}</h3>
                <p className="proj-tech-line">{project.tech}</p>
                <p className="proj-desc-text">{project.description}</p>
              </div>
            </div>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-github-link"
              aria-label={`View ${project.title} on GitHub`}
            >
              <span>View GitHub</span>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
