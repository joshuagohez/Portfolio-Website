import React, { useRef } from 'react';
import "./contact.css";
import ContactOption from './ContactOption';
import {HiOutlineMail} from "react-icons/hi"
import {FaTelegramPlane, FaLinkedin} from "react-icons/fa"
import emailjs from 'emailjs-com';

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID;

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <ContactOption 
            reactIcon={<HiOutlineMail className='contact-icon'/>}
            option="Email"
            optionDetail="jgohezhong@gmail.com"
            optionLink="mailto:jgohezhong@gmail.com"
          />
          <ContactOption 
            reactIcon={<FaTelegramPlane className='contact-icon'/>}
            option="Telegram"
            optionDetail="@joshwhaah"
            optionLink="https://telegram.me/joshwhaah"
          />
          <ContactOption 
            reactIcon={<FaLinkedin className='contact-icon'/>}
            option="LinkedIn"
            optionDetail="Joshua Goh"
            optionLink="https://www.linkedin.com/in/joshua-goh-776704227/"
          />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="text" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="10" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact