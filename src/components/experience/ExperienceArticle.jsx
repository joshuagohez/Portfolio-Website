import React from 'react'
import {MdVerified} from "react-icons/md"

function ExperienceArticle(props) {
  return (
    <article className='experience-details'>
        <MdVerified className='experience-icons'/>
        <div>
          <h4>{props.lang}</h4>
          <small className='text-light'>{props.level}</small>
        </div>
    </article>
  )
}

export default ExperienceArticle