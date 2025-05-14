import React from 'react'
import './about.css'
import AboutImg from '../../assets/about_me.jpeg';
import CV from '../../assets/Arun_Sathyan_Resume.pdf';
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">

        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
           <img src={AboutImg} alt="" className='about__img' />

           <div className='about__data'>
            <Info/>

            <p className="about__description">I come from a background in digital operations and marketing, where I led initiatives that boosted engagement, optimized campaigns, and improved efficiency through automation. Now, I apply the same problem-solving approach to full-stack development, building scalable and user-focused applications with the MERN stack</p>

            <a download="" href={CV} className="button button--flex">Download Resume  
                <i class="uil uil-file-download-alt"></i>
            </a>

           </div>
        </div>
    </section>
  )
}

export default About
