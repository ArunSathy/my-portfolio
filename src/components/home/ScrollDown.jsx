import React from 'react'
import { assets } from '../../assets/assets'

const ScrollDown = () => {
  return (
    <div className="ml-[9.25rem] lg:ml-[7.5rem] md:hidden">
      <a href="#about" className="inline-flex items-center animate-scroll transition-colors">
        <img src={assets.scrollicon} alt="" />
        <span className="text-title font-medium mr-1 ml-[2px]">Scroll Down</span>
        <i class='uil uil-arrow-down text-[1.25rem] text-title'></i>
      </a>
    </div>
  )
}

export default ScrollDown
