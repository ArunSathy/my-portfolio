import React from 'react'

const Data = () => {
    return (
        <div className="md:col-span-2">
            <h1 className='text-big mb-1 lg:text-h1 font-semibold text-title'>Arun Sathyan
                {/* <img className='home__hand' src={assets.handicon} alt="hand icon" /> */}
            </h1>


            <h1>
                <h3 className="relative text-h3 pl-[5.4rem] font-normal mb-4 lg:pl-[3.75rem] lg:text-h3 lg:mb-4 md:pl-[2rem] xs:pl-0 before:content-[''] before:absolute before:w-[70px] before:h-[1px] before:bg-text before:left-0 before:top-[1rem] lg:before:w-[42px] lg:before:top-[0.8rem] xs:before:hidden text-title">MERN Stack Developer</h3>
                <p className="max-w-[400px] mb-12 text-normal font-normal text-text lg:max-w-none lg:mb-10">Passionate about building scalable web applications and bringing ideas to life using the MERN stack</p>

                <a href="#contact" className="button button--flex" style={{ fontSize: '18px' }}>Say Hello
                    <i class="uil uil-message button__icon"></i>
                </a>
            </h1>
        </div>
    )
}

export default Data
