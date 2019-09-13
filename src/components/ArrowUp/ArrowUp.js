import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";

const ArrowUp = () => {
  const [scrollDown, setScrollDown] = useState(false);
  const [bottomPage, setBottomPage] = useState(false);
  
  window.onscroll = () => {
    if (window.pageYOffset >= document.documentElement.clientHeight) {
      setScrollDown(true);
    } else {
      setScrollDown(false);
    }

    if (window.pageYOffset >= document.documentElement.scrollHeight - document.documentElement.clientHeight - 100) {
      setBottomPage(true);
    } else {
      setBottomPage(false);
    }
  }

  const style = {
    visibility: scrollDown ? 'visible' : 'hidden',
    opacity: scrollDown ? 1 : 0,
    color: bottomPage ? '#f7f7f7' : 'inherit',
  }

  return (
    <div className="arrow-up" style={style}>
      <Link className="arrow-up-svg" 
        to='home'
        smooth={true}
        duration={500}>
        <FontAwesomeIcon icon={faChevronUp} size="3x" />
      </Link>
    </div>
  )
}

export default ArrowUp;