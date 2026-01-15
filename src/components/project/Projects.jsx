import React from 'react'
import { projectsData } from './Data'
import ProjectItems from './ProjectItems'

const Projects = () => {
    return (
        <div>
            <div className="container grid grid-cols-[repeat(3,max-content)] gap-12 justify-center lg:grid-cols-[repeat(2,max-content)] lg:gap-10 md:gap-5 md:grid-cols-1 sm:grid-cols-1">
                {
                    projectsData.map((item) => {
                        return <ProjectItems item={item} key={item.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Projects
