import React from 'react'
import Slider from "react-slick";

import Project from './Project';
import projectText from './projects-info';
import Arrow from '../ArrowDown/Arrow';

const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: false,
        }
      },
    ]
  }

  return (
    <section id="projects" className="projects">
      <div className="projects__bg"></div>
      <div className="projects__bg-2">
        <div ></div>
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