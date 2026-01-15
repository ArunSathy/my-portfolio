import React from 'react'
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import ProfileImg from '../../assets/profile.jpg';

const Home = () => {
    return (
        <section className="section mb-[130px]" id="home">
            <div className="container grid gap-y-28">
                <div className="grid grid-cols-[116px_repeat(2,1fr)] pt-[5.5rem] gap-x-8 items-center lg:grid-cols-[100px_repeat(2,1fr)] lg:gap-x-5 lg:pt-[3.5rem] md:grid-cols-[0.5fr_3fr] md:pt-[3.5rem]">
                    <Social />
                    <div style={{ backgroundImage: `url(${ProfileImg})` }} className="bg-no-repeat bg-center bg-cover shadow-[inset_0_0_0_9px_rgb(255_255_255_/_30%)] order-1 justify-self-center w-[300px] h-[300px] animate-profile lg:w-[250px] lg:h-[250px] md:order-none md:shadow-[inset_0_0_0_6px_rgb(255_255_255_/_30%)] md:w-[200px] md:h-[200px] xs:w-[180px] xs:h-[180px]"></div>
                    <div className="md:col-span-2">
                        <Data />
                    </div>
                </div>
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home
