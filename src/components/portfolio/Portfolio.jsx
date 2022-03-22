import React from 'react';
import "./portfolio.css";
import PortfolioItem from './PortfolioItem';
import portfolioData from "./portfolioData";

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {portfolioData.map((data, id) => {
          return (
            <PortfolioItem
              key={id}
              imgSrc={data.imageURL}
              imgAlt={data.title}
              title={data.title}
              githubHref={data.github}
              liveHref={data.demo}
            />
          )
        })}
        
      </div>
    </section>
  )
}

export default Portfolio