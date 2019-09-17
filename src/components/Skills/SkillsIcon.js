import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';

const IconSkill = ({ icon, title, src }) => {
  const iconSkill = icon ? <FontAwesomeIcon icon={icon} size='4x' /> : <Icon icon={src} />
  return (
    <div className="skill-icon">
      {iconSkill}
      <p>{title}</p>
    </div>
  )
}

export default IconSkill;