import React from 'react'
import './project.css'
import Projects from './Projects'

const Project = () => {
  return (
    <section className="work section" id='project'>
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Most recent works</span>
        <Projects/>
    </section>
  )
}

export default Project
