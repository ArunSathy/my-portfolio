import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Arun Sathyan</h1>

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

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/arun-sathyan-a65504173/" className="footer__social-link" target='_blank'><i class="bx bxl-linkedin"></i></a>

                    <a href="https://www.instagram.com/iam_arun__s?igsh=bDBtMWJxd3BkYXo5" className="footer__social-link" target='_blank'><i class="bx bxl-instagram"></i></a>

                    <a href="https://github.com/ArunSathy" className="footer__social-link" target='_blank'><i class="bx bxl-github"></i></a>
                </div>
                <span className='footer__copy'>
                &#169; Arun Sathyan. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer
