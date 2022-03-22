import React from 'react';
import "./about.css";
import ME from "../../assets/me2.jpg";
import {BiBookReader} from "react-icons/bi"
import {IoSchoolOutline} from "react-icons/io5"
import {AiOutlineSmile} from "react-icons/ai"
import AboutCard from './AboutCard';

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <AboutCard 
              reactIcon={<BiBookReader className='about-icon'/>}
              cardTitle="Experience"
              cardText="1 year coding"
            />
            <AboutCard 
              reactIcon={<IoSchoolOutline className='about-icon'/>}
              cardTitle="Studies"
              cardText="NUS Information Systems Undergraduate"
            />
            <AboutCard 
              reactIcon={<AiOutlineSmile className='about-icon'/>}
              cardTitle="Enjoy"
              cardText="Eating and talking about anything under the sun"
            />
          </div>

          <p>I am currently pursuing the intricacies of Web Development and Blockchain Technology, exploring the possibilities of its IT solutions and the imperative business need of it. I love the idea of decentralisation and I am a proponent of Web 3.0 myself.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About