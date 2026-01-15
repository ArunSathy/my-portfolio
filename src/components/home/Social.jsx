import React from 'react'

const Social = () => {
  return (
    <div className="grid gap-y-4 grid-cols-1">
      <a href="https://www.instagram.com/iam_arun__s?igsh=bDBtMWJxd3BkYXo5" className="text-title text-[1.25rem] w-10 h-10 inline-flex justify-center items-center rounded-full hover:bg-title hover:text-white transition-all duration-300 lg:text-[1rem]" target="_blank" rel="noopener noreferrer">
        <i class="uil uil-instagram"></i>
      </a>

      <a href="https://www.linkedin.com/in/arun-sathyan-a65504173/" className="text-title text-[1.25rem] w-10 h-10 inline-flex justify-center items-center rounded-full hover:bg-title hover:text-white transition-all duration-300 lg:text-[1rem]" target="_blank" rel="noopener noreferrer">
        <i class="uil uil-linkedin"></i>
      </a>

      <a href="https://github.com/ArunSathy" className="text-title text-[1.25rem] w-10 h-10 inline-flex justify-center items-center rounded-full hover:bg-title hover:text-white transition-all duration-300 lg:text-[1rem]" target="_blank" rel="noopener noreferrer">
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  )
}

export default Social
