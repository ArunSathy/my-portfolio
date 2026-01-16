import React from 'react';

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Project from './components/project/Project';
import ParticlesBackground from './components/background/ParticlesBackground';
import CustomCursor from './components/cursor/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      <ParticlesBackground />
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Project />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
