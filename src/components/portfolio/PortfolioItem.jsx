import React from 'react'

function PortfolioItem(props) {
  return (
    <article className='portfolio-item'>
        <div className="portfolio-image">
            <img src={props.imgSrc} alt={props.imgAlt} width="480px" height="320px"/>
        </div>
         <h3>{props.title}</h3>
         <div className="portfolio-cta">
          <a href={props.githubHref} target="_blank" rel="noreferrer" className='btn'>Github</a>
          <a href={props.liveHref} target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a>
         </div>
    </article>
  )
}

export default PortfolioItem;