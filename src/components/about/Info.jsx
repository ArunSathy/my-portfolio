import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">

        <div className="about__box">
            <i class="uil uil-briefcase-alt"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">2+ years</span>
        </div>

        <div className="about__box">
            <i class="uil uil-award-alt"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">2 Projects</span>
        </div>

        <div className="about__box">
            <i class="uil uil-brackets-curly"></i>
            <h3 className="about__title">Domain</h3>
            <span className="about__subtitle">MERN Stack</span>
        </div>

    </div>
  )
}

export default Info
