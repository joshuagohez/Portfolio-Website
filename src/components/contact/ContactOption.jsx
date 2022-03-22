import React from 'react'

function ContactOption(props) {
  return (
    <article className='contact-option'>
        {props.reactIcon}
        <h4>{props.option}</h4>
        <h5>{props.optionDetail}</h5>
        <a href={props.optionLink} target="_blank" rel='noreferrer'>Send a message</a>
    </article>
  )
}

export default ContactOption;