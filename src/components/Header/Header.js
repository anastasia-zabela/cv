import React from 'react';

import bgHeader from '../../assets/bg-header.jpg';
import Arrow from '../ArrowDown/Arrow';

const Header = () => {
  return (
    <header id="home" className='header' style={{ backgroundImage: `url(${bgHeader})` }}>
      <h1>Anastasia Zabela</h1>
      <div className="bg-rect"></div>
      <div className="primary-text container">
        <h2>Hi</h2>
        <h2>I'm <span className="color-one">Anastasia</span></h2>
        <h2>Frontend web developer</h2>
        <h3>scroll down or just <span className="color-two">
            <a href="https://docs.google.com/document/d/1UhRjzni5qCAYrreoUmp0qnkurs3g8laCJb5ifwC-DQY/" target="_blank" rel="noopener noreferrer">
              view my resume
            </a>
          </span>
        </h3>
      </div>
      <Arrow linkTo={'about-me'} />
    </header>
  )
}

export default Header;