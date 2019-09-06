import React from 'react'
import Slider from "react-slick";

import bgProjects from '../../assets/bg-project2.jpg';
import Project from './Project';
import projectText from './projects-info';
import Arrow from '../ArrowDown/Arrow';

const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
  }

  return (
    <section id="projects" className="projects">
      <div className="projects__bg"></div>
      <div className="projects__bg-2">
        <div style={{ backgroundImage: `url(${bgProjects})` }}></div>
      </div>
      <div className="projects__content container">
        <h3>Projects</h3>
        <div className="projects__slider">
          <Slider {...sliderSettings}>
            <Project {...projectText.project1}/>
            <Project {...projectText.project2}/>
            <Project {...projectText.project3}/>
            <Project {...projectText.project4}/>
          </Slider>
        </div>
      </div>
      <Arrow linkTo={'skills'} />
    </section>
  )
}

export default Projects;