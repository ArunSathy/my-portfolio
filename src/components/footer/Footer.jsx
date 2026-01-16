import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-container border-t border-[rgba(0,0,0,0.1)]">
            <div className="max-w-[968px] mx-auto px-6 md:px-4 xs:px-2 py-8">
                <h1 className="text-title text-center mb-8 font-bold">Arun Sathyan</h1>

                {/* <ul className="footer__list">
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href="#project" className='footer__link'>Projects</a>
                    </li>
                    <li>
                        <a href="#skills" className='footer__link'>Skills</a>
                    </li>
                </ul> */}

                <div className="flex justify-center gap-x-[1.125rem]">
                    <a href="https://www.linkedin.com/in/arun-sathyan-a65504173/" className="bg-title text-container p-[0.4rem] rounded-lg inline-flex text-[1.125rem] hover:bg-title-dark transition-colors lg:p-1 lg:rounded lg:text-[1rem]" target='_blank' rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>

                    <a href="https://www.instagram.com/iam_arun__s?igsh=bDBtMWJxd3BkYXo5" className="bg-title text-container p-[0.4rem] rounded-lg inline-flex text-[1.125rem] hover:bg-title-dark transition-colors lg:p-1 lg:rounded lg:text-[1rem]" target='_blank' rel="noopener noreferrer"><i class="bx bxl-instagram"></i></a>

                    <a href="https://github.com/ArunSathy" className="bg-title text-container p-[0.4rem] rounded-lg inline-flex text-[1.125rem] hover:bg-title-dark transition-colors lg:p-1 lg:rounded lg:text-[1rem]" target='_blank' rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
                </div>
                <span className='block mt-[4.5rem] text-title text-center text-smaller'>
                    &#169; Arun Sathyan. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer
