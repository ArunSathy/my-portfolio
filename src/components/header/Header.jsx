import React, { useState } from 'react'

const Header = () => {

    // change background Header
    // change background Header
    window.addEventListener('scroll', function () {
        const header = document.querySelector(".header");
        // when the scroll is higher than 80 viewport height, add the shadow class
        if (this.scrollY >= 80) header.classList.add('shadow-[0_-1px_4px_rgba(0,0,0,0.15)]');
        else header.classList.remove('shadow-[0_-1px_4px_rgba(0,0,0,0.15)]')
    })

    // Toggle Menu
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home')

    return (
        <header className="header w-full fixed top-0 left-0 z-fixed bg-body md:bottom-0 md:top-auto transition-shadow duration-300">
            <nav className="nav max-w-[968px] mx-auto px-6 md:px-4 xs:px-2 h-[calc(3rem+1.5rem)] flex justify-between items-center gap-x-4 md:h-[3rem]">
                <a href="index.html" className='nav__logo text-title font-semibold'>Arun Sathyan</a>

                <div className={`nav__menu transition-all duration-300 md:fixed md:left-0 md:w-full md:bg-body md:pt-8 md:px-6 md:pb-16 md:shadow-[0_-1px_4px_rgba(0,0,0,0.15)] md:rounded-t-[1.5rem] md:z-fixed ${Toggle ? "md:bottom-0" : "md:bottom-[-100%]"}`}>
                    <ul className="nav__list flex gap-x-6 md:grid md:grid-cols-3 md:gap-8 xs:gap-0">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? "nav__link active-link flex flex-col items-center text-small text-title-dark font-semibold transition-colors duration-300" : "nav__link flex flex-col items-center text-small text-title font-semibold transition-colors duration-300 hover:text-title-dark"}>
                                <i className="uil uil-estate nav__icon hidden md:block md:text-[1.2rem]">
                                </i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? "nav__link active-link flex flex-col items-center text-small text-title-dark font-semibold transition-colors duration-300" : "nav__link flex flex-col items-center text-small text-title font-semibold transition-colors duration-300 hover:text-title-dark"}>
                                <i className="uil uil-user nav__icon hidden md:block md:text-[1.2rem]">
                                </i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? "nav__link active-link flex flex-col items-center text-small text-title-dark font-semibold transition-colors duration-300" : "nav__link flex flex-col items-center text-small text-title font-semibold transition-colors duration-300 hover:text-title-dark"}>
                                <i className="uil uil-file-alt nav__icon hidden md:block md:text-[1.2rem]">
                                </i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? "nav__link active-link flex flex-col items-center text-small text-title-dark font-semibold transition-colors duration-300" : "nav__link flex flex-col items-center text-small text-title font-semibold transition-colors duration-300 hover:text-title-dark"}>
                                <i class="uil uil-medal nav__icon hidden md:block md:text-[1.2rem]">
                                </i> Projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#qualification" onClick={() => setActiveNav('#qualification')} className={activeNav === '#qualification' ? "nav__link active-link flex flex-col items-center text-small text-title-dark font-semibold transition-colors duration-300" : "nav__link flex flex-col items-center text-small text-title font-semibold transition-colors duration-300 hover:text-title-dark"}>
                                <i className="uil uil-graduation-cap nav__icon hidden md:block md:text-[1.2rem]">
                                </i> Qualification
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? "nav__link active-link flex flex-col items-center text-small text-title-dark font-semibold transition-colors duration-300" : "nav__link flex flex-col items-center text-small text-title font-semibold transition-colors duration-300 hover:text-title-dark"}>
                                <i className="uil uil-message nav__icon hidden md:block md:text-[1.2rem]">
                                </i> Contact
                            </a>
                        </li>

                    </ul>

                    <i className='uil uil-times nav__close hidden md:block md:absolute md:right-[1.3rem] md:bottom-[0.5rem] md:text-[1.5rem] md:cursor-pointer md:text-title md:hover:text-title-dark' onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle hidden md:block md:text-[1.1rem] md:cursor-pointer text-title font-medium" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
