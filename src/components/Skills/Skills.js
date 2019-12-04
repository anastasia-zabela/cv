import React from 'react';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import {faJsSquare} from '@fortawesome/free-brands-svg-icons';
import {faSass} from '@fortawesome/free-brands-svg-icons';
import {faLess} from '@fortawesome/free-brands-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faVuejs} from '@fortawesome/free-brands-svg-icons';
import {faBootstrap} from '@fortawesome/free-brands-svg-icons';

import IconSkill from './SkillsIcon';
import Arrow from '../ArrowDown/Arrow';
import jqueryIcon from '@iconify/icons-raphael/jquery';
import gatsbyIcon from '@iconify/icons-simple-icons/gatsby';
import materialUi from '@iconify/icons-mdi/material-ui';

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__bg" ></div>
      <div className="skills__bg-2"></div>
      <div className="skills__content container">
        <h3>Skills</h3>
        <p className="description">
          This is programming languages, technologies, frameworks, libraries and tools which I used in my practice
        </p>
        <div className="skills-block">
          <div className="skills-block__primary">
            <div className="skills-block__primary-1">
              <h4>Programming language and technologies</h4>
              <div className="skill-icons">
                <IconSkill icon={faHtml5} title={'HTML'} />
                <IconSkill icon={faCss3Alt} title={'CSS'} />
                <IconSkill icon={faJsSquare} title={'JavaScript'} />
                <IconSkill icon={faSass} title={'SASS'} />
                <IconSkill icon={faLess} title={'LESS'} />
              </div>
            </div>
            <div className="skills-block__primary-2">
            <h4>Frameworks and libraries</h4>
              <div className="skill-icons">
                <IconSkill icon={faVuejs} title={'Vue'} />
                <IconSkill icon={faReact} title={'React'} />
                <IconSkill src={jqueryIcon} title={'jQuery'} />
                <IconSkill src={gatsbyIcon} title={'Gatsby'} />
                <IconSkill icon={faBootstrap} title={'Bootstrap'} />
                <IconSkill src={materialUi} title={'Material UI'} />
              </div>
            </div>
          </div>
          <div className="skills-block__secondary">
            <p><span>And other tools:</span> Git, Webpack, Babel, Web-socket, Vuex, Vue Router, SVG, Slick, Gif.js, Canvas API, Youtube API, Contentful CMS, 
            GraphQL, Netlify, Google Firebase, Eslint, Pixel perfect, Photoshop</p>
          </div>
        </div>
      </div>
      <Arrow linkTo={'contacts'} />
    </section>
  )
}

export default Skills;
