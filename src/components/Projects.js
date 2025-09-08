
import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform built with React and Node.js featuring user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app that helps teams organize tasks, set deadlines, and track progress with real-time collaboration features.",
      technologies: ["React", "Firebase", "Material-UI"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that provides current conditions, forecasts, and interactive maps using multiple weather APIs.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      liveLink: "#",
      githubLink: "#"
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
                <a href={project.liveLink} className="btn btn-primary">Live Demo</a>
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
