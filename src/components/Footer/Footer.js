import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <p>Handcrafted by me &nbsp;
        <FontAwesomeIcon icon={faCopyright} />&nbsp;
        twentynineteen
      </p>
      <p>Anastasia Zabela</p>
    </footer>
  )
}

export default Footer;