import React from 'react';

const Project = ({ icon, title, description, environment, linkToApp, linkToGithub }) => {
  return (
    <div className="project-board">
      <img src={icon} alt={title} />
      <h4>{title}</h4>
      <div className="description">
        <p>{description}</p>
        <p><span className="color-one">Environment:</span> {environment}</p>
      </div>
      <div className="buttons">
        <button><a href={linkToApp} target="_blank" rel="noopener noreferrer">Link to app</a></button>
        <button><a href={linkToGithub} target="_blank" rel="noopener noreferrer">Link to github</a></button>
      </div>
    </div>
  )
}

export default Project;