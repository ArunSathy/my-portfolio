import React from 'react'

const Data = () => {
    return (
        <div className="md:col-span-2">
            <h1 className='text-big mb-1 lg:text-h1 font-bold text-title text-[clamp(2.5rem,8vw,3.25rem)] leading-tight whitespace-nowrap'>Arun Sathyan</h1>

            <div className="mt-1">
                <h3 className="relative text-h3 pl-[5.5rem] font-normal mb-8 lg:pl-[3.5rem] lg:text-h3 lg:mb-4 md:pl-[3.5rem] xs:pl-0 before:content-[''] before:absolute before:w-[70px] before:h-[1px] before:bg-text before:left-0 before:top-1/2 before:-translate-y-1/2 lg:before:w-[42px] xs:before:hidden text-title">MERN Stack Developer</h3>
                <p className="max-w-[400px] mb-10 text-normal font-normal text-text lg:max-w-none lg:mb-10">Passionate about building scalable web applications and bringing ideas to life using the MERN stack</p>

                <a href="#contact" className="inline-block bg-title text-container py-5 px-8 rounded-2xl font-medium hover:bg-title-dark transition-colors lg:py-4 lg:px-7 inline-flex items-center" style={{ fontSize: '18px' }}>Say Hello
                    <i class="uil uil-message ml-2 lg:w-[22px] lg:h-[22px]"></i>
                </a>
            </div>
        </div>
    )
}

export default Data
