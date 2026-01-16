import React from 'react'
import Projects from './Projects'

const Project = () => {
  return (
    <section className="py-24 pb-8 md:py-8 md:pb-16" id='project'>
      <h2 className="text-h1 text-title text-center font-bold mb-3">Projects</h2>
      <span className="block text-small mb-16 text-center md:mb-12">Most recent works</span>
      <Projects />
    </section>
  )
}

export default Project
