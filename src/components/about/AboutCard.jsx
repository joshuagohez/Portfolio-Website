import React from 'react'

function AboutCard(props) {
  return (
    <article className='about-card'>
              {props.reactIcon}
              <h5>{props.cardTitle}</h5>
              <small>{props.cardText}</small>
    </article>
  )
}

export default AboutCard