import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import bgHeader from '../../assets/bg-header.jpg';

const Header = () => {
  return (
    <header className='header' style={{ backgroundImage: `url(${bgHeader})` }}>
      <h1>Anastasia Zabela</h1>
      <div className="bg-rect"></div>
      <div className="primary-text container">
        <h2>Hi</h2>
        <h2>I'm <span className="color-one">Anastasia</span></h2>
        <h2>Frontend web developer</h2>
        <h3>scroll down or just <span className="color-two"><a>view my resume</a></span></h3>
      </div>
      <div className="arrow">
        <div className="arrow-svg">
          <FontAwesomeIcon icon={faChevronDown} size="3x" />
        </div>
      </div>
    </header>
  )
}

export default Header;