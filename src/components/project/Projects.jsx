import React from 'react'
import { projectsData } from './Data'
import ProjectItems from './ProjectItems'

const Projects = () => {
    return (
        <div>
            <div className="max-w-[1200px] mx-auto px-6 md:px-4 xs:px-2 grid grid-cols-3 gap-12 justify-center lg:grid-cols-2 lg:gap-10 md:grid-cols-1 md:gap-5 md:max-w-[350px] md:mx-auto">
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
