import React from 'react'
import { projectsData } from './Data'
import ProjectItems from './ProjectItems'

const Projects = () => {
    return (
        <div>
            <div className="container grid grid-cols-3 gap-12 justify-center lg:grid-cols-2 lg:gap-10 md:grid-cols-1 md:gap-5">
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
