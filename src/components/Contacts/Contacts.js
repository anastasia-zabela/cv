import React from 'react';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faTelegramPlane} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faFileAlt} from '@fortawesome/free-regular-svg-icons';

import bgContacts from '../../assets/bg-contacts.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contacts = () => {
  const contacts = {
    eMail: 'zabela113@mail.ru',
    telegram: 'https://t.me/anastasiazabela',
    instagram: 'https://www.instagram.com/anastasia.lion/',
    github: 'https://github.com/anastasia-zabela',
    linkedIn: 'https://www.linkedin.com/in/anastasia-zabela-168715192/',
    resume: 'https://docs.google.com/document/d/1UhRjzni5qCAYrreoUmp0qnkurs3g8laCJb5ifwC-DQY/'
  }

  return (
    <section className="contacts">
      <div className="contacts__bg" style={{ backgroundImage: `url(${bgContacts})`}}></div>
      <div className="contacts__bg-2"></div>
      <div className="contacts__content container">
        <h3>Contacts</h3>
        <div className="contacts-block contacts-block-primary">
          <p className="description">
            I’ll thanksful if you contact me by follow contacts
          </p>
          <div className="contacts-icons">
            <a href={`mailto:${contacts.eMail}`}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href={contacts.telegram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegramPlane} />
            </a>
          </div>
        </div>
        <div className="contacts-block contacts-block-secondary">
          <p className="description">
            Also you can to stay connected
          </p>
          <div className="contacts-icons">
            <a className="icon" href={contacts.instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
              <h5>Instagram</h5>
            </a>
            <a className="icon" href={contacts.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} />
              <h5>Github</h5>
            </a>
            <a className="icon" href={contacts.linkedIn} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
              <h5>LinkedIn</h5>
            </a>
            <a className="icon" href={contacts.resume} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFileAlt} />
              <h5>View resume</h5>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts;