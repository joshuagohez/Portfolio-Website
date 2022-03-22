import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"

function HeaderSocials() {
  return (
    <div className='header-socials'>
        <a href="https://www.linkedin.com/in/joshua-goh-776704227/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/joshuagohez" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials