import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";

const Arrow = ({ linkTo }) => {
  return (
    <div className="arrow">
      <Link className="arrow-svg" 
        to={linkTo}
        smooth={true}
        duration={500}>
        <FontAwesomeIcon icon={faChevronDown} size="3x" />
      </Link>
    </div>
  )
}

export default Arrow;