import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconSkill = ({ icon, title }) => {
  return (
    <div className="skill-icon">
      <FontAwesomeIcon icon={icon} size='4x' />
      <p>{title}</p>
    </div>
  )
}

export default IconSkill;