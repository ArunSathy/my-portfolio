import React from 'react'

const Info = () => {
  return (
    <div className="grid grid-cols-[repeat(3,140px)] gap-2 mb-8 lg:justify-center sm:grid-cols-3 xs:grid-cols-2">

      <div className="bg-container border border-[rgba(0,0,0,0.1)] rounded-xl text-center p-[1rem_1.25rem] lg:p-[0.75rem_0.5rem]">
        <i class="uil uil-briefcase-alt text-[1.5rem] text-title mb-2 block"></i>
        <h3 className="text-small font-medium text-title">Experience</h3>
        <span className="text-tiny text-text">3+ years</span>
      </div>

      <div className="bg-container border border-[rgba(0,0,0,0.1)] rounded-xl text-center p-[1rem_1.25rem] lg:p-[0.75rem_0.5rem]">
        <i class="uil uil-award-alt text-[1.5rem] text-title mb-2 block"></i>
        <h3 className="text-small font-medium text-title">Completed</h3>
        <span className="text-tiny text-text">4 Projects</span>
      </div>

      <div className="bg-container border border-[rgba(0,0,0,0.1)] rounded-xl text-center p-[1rem_1.25rem] lg:p-[0.75rem_0.5rem]">
        <i class="uil uil-brackets-curly text-[1.5rem] text-title mb-2 block"></i>
        <h3 className="text-small font-medium text-title">Domain</h3>
        <span className="text-tiny text-text">MERN Stack</span>
      </div>

    </div>
  )
}

export default Info
