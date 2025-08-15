import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", percentage: 90 },
        { name: "JavaScript", percentage: 85 },
        { name: "HTML/CSS", percentage: 95 },
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", percentage: 88 },
        { name: "Python", percentage: 75 },
        { name: "MongoDB", percentage: 80 },
        { name: "Express.js", percentage: 85 },
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", percentage: 90 },
        { name: "VS Code", percentage: 95 },
        { name: "Figma", percentage: 70 },
        { name: "AWS", percentage: 60 }
      ]
    }
  ];

  const technologies = [
    "React", "Node.js", "JavaScript", "Python", "MongoDB",
    "Express.js", "Git", "HTML/CSS", "AWS", "REST APIs"
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2>My Skills</h2>
          <p>Technologies I work with to build amazing projects</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.percentage}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="technologies-section">
          <h3>Technologies I Use</h3>
          <div className="tech-badges">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
