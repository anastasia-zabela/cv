import React from 'react';

import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
