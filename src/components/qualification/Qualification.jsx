import React, { useState } from 'react'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className="py-24 pb-8 md:py-8 md:pb-16" id='qualification'>
            <h2 className="text-h1 text-title text-center font-bold mb-3">Qualification</h2>
            <span className="block text-small mb-16 text-center md:mb-12">My Personal Journey</span>

            <div className="max-w-[768px] mx-auto px-6 md:px-4 xs:px-2">

                <div className="flex justify-center mb-8">

                    <div className={toggleState === 1 ? "text-h3 font-medium text-container mx-4 cursor-pointer bg-title rounded-xl text-center p-[0.35rem_1rem] inline-flex items-center sm:mx-3 transition-all duration-300" : "text-h3 font-medium text-title mx-4 cursor-pointer hover:text-title-dark transition-all duration-300 inline-flex items-center sm:mx-3"} onClick={() => toggleTab(1)} >

                        <i className="uil uil-graduation-cap text-[1.8rem] mr-1"></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? "text-h3 font-medium text-container mx-4 cursor-pointer bg-title rounded-xl text-center p-[0.35rem_1rem] inline-flex items-center sm:mx-3 transition-all duration-300" : "text-h3 font-medium text-title mx-4 cursor-pointer hover:text-title-dark transition-all duration-300 inline-flex items-center sm:mx-3"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt text-[1.8rem] mr-1"></i>
                        Experience
                    </div>
                </div>

                <div className="grid grid-cols-[0.5fr] justify-center sm:grid-cols-1">

                    <div className={toggleState === 1 ? "block" : "hidden"}>

                        <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6 xs:gap-x-2">
                            <div>
                                <h3 className="text-normal font-medium">BE Computer Science & Engineering</h3>
                                <span className="inline-block text-small mb-4">Anna University</span>
                                <div className="text-small">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="inline-block w-[13px] h-[13px] bg-text rounded-full"></span>
                                <span className="block w-[1px] h-full bg-text translate-x-[6px] -translate-y-[7px]"></span>
                            </div>

                        </div>

                        <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6 xs:gap-x-2">
                            <div></div>
                            <div>
                                <span className="inline-block w-[13px] h-[13px] bg-text rounded-full"></span>
                                <span className="block w-[1px] h-full bg-text translate-x-[6px] -translate-y-[7px]"></span>
                            </div>
                            <div>
                                <h3 className="text-normal font-medium">Higher Secondary</h3>
                                <span className="inline-block text-small mb-4">Kerala State Board</span>
                                <div className="text-small">
                                    <i className="uil uil-calendar-alt"></i> 2014 - 2016
                                </div>
                            </div>

                        </div>

                        <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6 xs:gap-x-2">
                            <div>
                                <h3 className="text-normal font-medium">SSLC</h3>
                                <span className="inline-block text-small mb-4">Kerala State Board</span>
                                <div className="text-small">
                                    <i className="uil uil-calendar-alt"></i> 2013 - 2014
                                </div>
                            </div>

                            <div>
                                <span className="inline-block w-[13px] h-[13px] bg-text rounded-full"></span>
                                <span className="block w-[1px] h-full bg-text translate-x-[6px] -translate-y-[7px]"></span>
                            </div>

                        </div>


                    </div>

                    <div className={toggleState === 2 ? "block" : "hidden"}>

                        <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6 xs:gap-x-2">
                            <div></div>
                            <div>
                                <span className="inline-block w-[13px] h-[13px] bg-text rounded-full"></span>
                                <span className="block w-[1px] h-full bg-text translate-x-[6px] -translate-y-[7px]"></span>
                            </div>
                            <div>
                                <h3 className="text-normal font-medium">Digital Marketing Associate</h3>
                                <span className="inline-block text-small mb-4">Amazon</span>
                                <div className="text-small">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Qualification
