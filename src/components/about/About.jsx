import React from 'react'
import AboutImg from '../../assets/about_me.jpeg';
import CV from '../../assets/Arun_Sathyan_Resume.pdf';
import Info from './Info';

const About = () => {
  return (
    <section className="section mb-[140px]" id="about">

      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="container grid grid-cols-2 items-center gap-x-16 lg:grid-cols-1 lg:gap-y-10">
        <img src={AboutImg} alt="" className='w-[350px] h-[450px] rounded-[1.5rem] justify-self-center lg:w-[220px] lg:h-[280px]' />

        <div className='lg:text-center'>
          <Info />

          <p className="pr-4 mb-10 lg:px-20 lg:mb-8 md:px-0">I come from a background in digital operations and marketing, where I led initiatives that boosted engagement, optimized campaigns, and improved efficiency through automation. Now, I apply the same problem-solving approach to full-stack development, building scalable and user-focused applications with the MERN stack</p>

          <a download="" href={CV} className="button button--flex">Download Resume
            <i class="uil uil-file-download-alt"></i>
          </a>

        </div>
      </div>
    </section>
  )
}

export default About
