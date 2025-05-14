import React from 'react'
import { projectsData } from './Data'
import ProjectItems from './ProjectItems'

const Projects = () => {
    return (
        <div>
            <div className="work__container container grid">
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
