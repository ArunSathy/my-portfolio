import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Skills</span>

      <div className="container grid grid-cols-[repeat(2,350px)] gap-x-12 justify-center lg:grid-cols-max lg:gap-y-8 md:grid-cols-1 sm:grid-cols-1">
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}

export default Skills
