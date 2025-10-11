import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Chatbot />
    </div>
  );
}

export default App;