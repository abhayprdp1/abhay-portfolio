
import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PPE Detection System",
      description: "A computer vision project using YOLOv8 to automatically detect Personal Protective Equipment (PPE) compliance in real-time video feeds.",
      technologies: ["Python", "YOLOv8", "Computer Vision", "Deep Learning"],
      liveLink: "#",
      githubLink: "https://github.com/abhayprdp1/PPE-DETECTION-USING-YOLO-V8"
    },
    {
      id: 2,
      title: "Clinic Management System",
      description: "A comprehensive management system for clinics to handle patient records, appointments, and inventory efficiently.",
      technologies: ["Web Development", "Database Management"],
      liveLink: "#",
      githubLink: "https://github.com/abhayprdp1/Clinic-Management"
    },
    {
      id: 3,
      title: "URL Shortener",
      description: "A web application that takes long URLs and converts them into shorter, manageable links for easier sharing.",
      technologies: ["React", "Node.js", "API"],
      liveLink: "#",
      githubLink: "https://github.com/abhayprdp1/url-shortner"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <p>Here are some of my recent projects that showcase my skills and creativity.</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} className="btn btn-secondary">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
