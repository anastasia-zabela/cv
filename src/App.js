import React from 'react';

import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
