import React from 'react'
import { assets } from '../../assets/assets'

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex wheel">
            <img src={assets.scrollicon} alt="" />
            <span className="home__scroll-name">Scroll Down</span>
            <i class='uil uil-arrow-down home__scroll-arrow'></i>
        </a>
    </div>
  )
}

export default ScrollDown
