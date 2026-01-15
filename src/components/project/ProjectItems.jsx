import React from 'react'

const ProjectItems = ({ item }) => {
  return (
    <div className="bg-[#f8f8f8] border border-[rgba(0,0,0,0.1)] p-5 rounded-2xl lg:p-4 md:mb-2 sm:p-4 xs:p-3" key={item.id}>
      <img src={item.image} alt="" className='w-full h-[200px] rounded-2xl mb-4 lg:mb-3 sm:h-[200px] xs:h-[140px] object-cover' />
      <h3 className="text-normal font-medium mb-2 lg:mb-1">{item.title}</h3>
      <a href={item.link} className="text-text text-small flex items-center gap-x-1 hover:gap-x-2 group transition-all duration-400" target="_blank" rel="noopener noreferrer">
        Demo <i className="bx bx-right-arrow-alt text-[1rem] transition-transform duration-400 group-hover:translate-x-1"></i>
      </a>
    </div>
  )
}

export default ProjectItems
