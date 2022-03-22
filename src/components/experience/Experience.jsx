import React from 'react';
import "./experience.css";
import ExperienceArticle from './ExperienceArticle';

function Experience() {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <ExperienceArticle 
              lang="HTML"
              level="Intermediate"
            />
            <ExperienceArticle 
              lang="CSS"
              level="Intermediate"
            />
            <ExperienceArticle 
              lang="Native JS"
              level="Intermediate"
            />
            <ExperienceArticle 
              lang="React"
              level="Intermediate"
            />
            <ExperienceArticle 
              lang="Bootstrap"
              level="Basic"
            />
          </div>
        </div>
        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
          <ExperienceArticle 
              lang="Node.js"
              level="Intermediate"
            />
            <ExperienceArticle 
              lang="Express.js"
              level="Intermediate"
            />
            <ExperienceArticle 
              lang="MongoDB"
              level="Intermediate"
            />
            <ExperienceArticle 
              lang="SQLite"
              level="Basic"
            />
            <ExperienceArticle 
              lang="Python"
              level="Basic"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience