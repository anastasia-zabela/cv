import React, { useState } from 'react';

import { Link } from "react-scroll";

const Menu = () => {
  const [addClass, setAddClass] = useState(false);
  const hamClasses = ['menu__ham'];
  const itemsClasses = ['menu__items'];
  const bgClasses = ['menu__bg'];
  const animationScroll = {smooth: true, duration: 500};

  if (addClass) {
    hamClasses.push('active');
    itemsClasses.push('show-items');
    bgClasses.push('active');
  }

  function handleClickMenu() {
    setAddClass(!addClass);
  }

  function handleFollowingLink() {
    setAddClass(!addClass);
  }

  return (
    <div className="menu">
      <div className="menu-contain">
        <svg className={hamClasses.join(' ')} onClick={handleClickMenu} viewBox="0 0 100 100" width="80">
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
          <path
            className="line middle"
            d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
        </svg>
        <ul className={itemsClasses.join(' ')}>
          <li><Link 
            to="home" 
            smooth={animationScroll.smooth} 
            duration={animationScroll.duration}
            onClick={handleFollowingLink}>
              Home
            </Link></li>
          <li><Link 
            to="about-me" 
            smooth={animationScroll.smooth} 
            duration={animationScroll.duration}
            onClick={handleFollowingLink}>
              About me
            </Link></li>
          <li><Link 
            to="projects" 
            smooth={animationScroll.smooth} 
            duration={animationScroll.duration}
            onClick={handleFollowingLink}>
              Projects
            </Link></li>
          <li><Link 
            to="skills" 
            smooth={animationScroll.smooth} 
            duration={animationScroll.duration}
            onClick={handleFollowingLink}>
              Skills
            </Link></li>
          <li><Link 
            to="contacts" 
            smooth={animationScroll.smooth} 
            duration={animationScroll.duration}
            onClick={handleFollowingLink}>
              Contacts
            </Link></li>
        </ul>
        <div className={bgClasses.join(' ')}></div>
      </div>
    </div>
  )
}

export default Menu;