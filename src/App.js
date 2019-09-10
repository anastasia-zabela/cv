import React from 'react';

import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import ArrowUp from './components/ArrowUp/ArrowUp';

function App() {
  return (
    <div className="App">
      <Menu />
      <ArrowUp />
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
