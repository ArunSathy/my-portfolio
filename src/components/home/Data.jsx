import React from 'react'

const Data = () => {
    return (
        <div className="home__data">
            <h1 className='home__title'>Arun Sathyan
                {/* <img className='home__hand' src={assets.handicon} alt="hand icon" /> */}
            </h1>


            <h1>
                <h3 className="home__subtitle">MERN Stack Developer</h3>
                <p className="home__description">Passionate about building scalable web applications and bringing ideas to life using the MERN stack</p>

                <a href="#contact" className="button button--flex" style={{fontSize:'18px'}}>Say Hello
                    <i class="uil uil-message button__icon"></i>
                </a>
            </h1>
        </div>
    )
}

export default Data
