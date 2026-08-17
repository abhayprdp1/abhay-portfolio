import React from 'react';
import {
  FaJsSquare,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaDatabase
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiPostman,
  SiOpencv
} from 'react-icons/si';
import SpinningFanIcon from './SpinningFanIcon';
import './Skills.css';

const Skills = () => {
  return (
    <section id="my-stack" className="taj-stack-section reveal">
      <div className="section-badge-header">
        <SpinningFanIcon size={20} />
        <span>MY STACK</span>
      </div>

      <div className="stack-rows-container">
        {/* Row 1: FRONTEND */}
        <div className="stack-category-row reveal">
          <div className="stack-cat-label">FRONTEND</div>
          <div className="stack-items-wrap">
            <span className="stack-badge-pill">
              <FaJsSquare className="stack-icon icon-js" /> JavaScript
            </span>
            <span className="stack-badge-pill">
              <FaReact className="stack-icon icon-react" /> React
            </span>
            <span className="stack-badge-pill">
              <SiNextdotjs className="stack-icon icon-next" /> Next.js
            </span>
            <span className="stack-badge-pill">
              <SiTailwindcss className="stack-icon icon-tailwind" /> Tailwind CSS
            </span>
          </div>
        </div>

        {/* Row 2: BACKEND */}
        <div className="stack-category-row reveal">
          <div className="stack-cat-label">BACKEND</div>
          <div className="stack-items-wrap">
            <span className="stack-badge-pill">
              <FaPython className="stack-icon icon-python" /> Python
            </span>
            <span className="stack-badge-pill">
              <FaNodeJs className="stack-icon icon-node" /> Node.js
            </span>
            <span className="stack-badge-pill">
              <SiExpress className="stack-icon icon-express" /> Express.js
            </span>
            <span className="stack-badge-pill">
              <FaDatabase className="stack-icon icon-db" /> REST APIs
            </span>
          </div>
        </div>

        {/* Row 3: DATABASE */}
        <div className="stack-category-row reveal">
          <div className="stack-cat-label">DATABASE</div>
          <div className="stack-items-wrap">
            <span className="stack-badge-pill">
              <SiMongodb className="stack-icon icon-mongo" /> MongoDB
            </span>
            <span className="stack-badge-pill">
              <SiMysql className="stack-icon icon-mysql" /> MySQL
            </span>
            <span className="stack-badge-pill">
              <SiPostgresql className="stack-icon icon-postgres" /> PostgreSQL
            </span>
          </div>
        </div>

        {/* Row 4: TOOLS */}
        <div className="stack-category-row reveal">
          <div className="stack-cat-label">TOOLS</div>
          <div className="stack-items-wrap">
            <span className="stack-badge-pill">
              <FaGitAlt className="stack-icon icon-git" /> Git
            </span>
            <span className="stack-badge-pill">
              <SiDocker className="stack-icon icon-docker" /> Docker
            </span>
            <span className="stack-badge-pill">
              <SiPostman className="stack-icon icon-postman" /> Postman
            </span>
            <span className="stack-badge-pill">
              <SiOpencv className="stack-icon icon-vision" /> YOLOv8 & OpenCV
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
