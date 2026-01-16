import React from 'react'
import AboutImg from '../../assets/about_me.jpeg';
import CV from '../../assets/Arun_Sathyan_Resume.pdf';
import Info from './Info';

const About = () => {
  return (
    <section className="py-24 pb-8 md:py-8 md:pb-16 mb-24 md:mb-12" id="about">

      <h2 className="text-h1 text-title text-center font-bold mb-3">About Me</h2>
      <span className="block text-small mb-16 text-center md:mb-12">My Introduction</span>

      <div className="max-w-[968px] mx-auto px-6 md:px-4 xs:px-2 grid grid-cols-2 items-center gap-x-16 lg:grid-cols-1 lg:gap-y-10">
        <img src={AboutImg} alt="" className='w-[350px] h-[450px] rounded-[1.5rem] justify-self-center lg:w-[220px] lg:h-[280px] xs:w-[280px] xs:h-[350px]' />

        <div className='lg:text-center'>
          <Info />

          <p className="pr-4 mb-10 lg:px-20 lg:mb-8 md:px-0">I come from a background in digital operations and marketing, where I led initiatives that boosted engagement, optimized campaigns, and improved efficiency through automation. Now, I apply the same problem-solving approach to full-stack development, building scalable and user-focused applications with the MERN stack</p>

          <a download="" href={CV} className="inline-block bg-title text-container py-5 px-8 rounded-2xl font-medium hover:bg-title-dark transition-colors lg:py-4 lg:px-7 inline-flex items-center text-container">Download Resume
            <i class="uil uil-file-download-alt ml-2 lg:w-[22px] lg:h-[22px]"></i>
          </a>

        </div>
      </div>
    </section>
  )
}

export default About
