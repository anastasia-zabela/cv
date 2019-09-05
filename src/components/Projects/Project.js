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
        <button>Link to app</button>
        <button>Link to github</button>
      </div>
    </div>
  )
}

export default Project;