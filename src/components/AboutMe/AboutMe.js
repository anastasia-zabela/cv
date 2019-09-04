import React from 'react';

import photoImg from '../../assets/photo.JPG';
import bgAboutMe from '../../assets/bg-about-me.jpg';
import bgLine from '../../assets/line.png';
import Arrow from '../ArrowDown/Arrow';

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <div className="about-me__bg" style={{ backgroundImage: `url(${bgAboutMe})`}}></div>
      <article className="about-me__content container">
        <div className="about-me__text">
          <h3>About me</h3>
          <div className="about-me__text--paragr">
            <p>I was born in siberian russian city Omsk and I moved in Minsk about one year ago.</p>
            <p>I very like to read programming and coding topics, and I very enjoy 
            to be involved in the learning process. I don't have a lot of experience in coding of serious projects, but I have a 
            big passion to learn and ready to work hard to get the best coding skills.</p>
            <p>Currently, I finished Rolling Scopes School courses lasting half a year. I have a few projects which I have been made 
            during my learning process.</p>
            <p>Drawing and photography is my hobby. Also, I know how to work with Adobe tools and have been working with it for about 
            six years. I'm sure design and programming together can do cool things.</p>
          </div>
        </div>
        <div className="about-me__photo-field">
          <img src={photoImg} alt="about-me" />
          <div className="name">
            <div className="name__line"></div>
            <h4>Anastasia Zabela</h4>
            <div className="name__line"></div>
          </div>
          <div className="line-rect" style={{ background: `url(${bgLine})` }}></div>
        </div>
      </article>
      <Arrow linkTo={'projects'} />
    </section>
  )
}

export default AboutMe;
