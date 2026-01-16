import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  return (
    <section className="py-24 pb-8 md:py-8 md:pb-16 mb-24 md:mb-12" id="skills">
      <h2 className="text-h1 text-title text-center font-bold mb-3">Skills</h2>
      <span className="block text-small mb-16 text-center md:mb-12">My Technical Skills</span>

      <div className="max-w-[968px] mx-auto px-6 md:px-4 xs:px-2 grid grid-cols-2 gap-x-12 justify-center lg:grid-cols-1 lg:gap-y-8">
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}

export default Skills
