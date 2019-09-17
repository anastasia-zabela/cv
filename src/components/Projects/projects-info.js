import chatIcon from '../../assets/icons/chat-icon.png';
import piskelIcon from '../../assets/icons/piskel-icon-2.png';
import culturePortalIcon from '../../assets/icons/culture-portal-icon.png';
import youtubeIcon from '../../assets/icons/youtube-icon.png';

const projectsText = {
  project1: {
    icon: piskelIcon,
    title: '#1 Piskel clone',
    description: `Simplified clone of the piskelapp.com, the web-app for spriting and pixel art`,
    environment: 'core JS, sass, canvas API, fullscreen API, jest, gif.js, jest, webpack, eslint',
    linkToApp: 'https://piskel-clone.netlify.com/',
    linkToGithub: 'https://github.com/anastasia-zabela/piskel-clone'
  },
  project2: {
    icon: youtubeIcon,
    title: '#2 Youtube client',
    description: 'Web app to view the information about youtube clips on user request',
    environment: 'jQuery, youtube API requests, jest, css animation, responsive design',
    linkToApp: 'https://rss-youtube-client.netlify.com/',
    linkToGithub: 'https://github.com/anastasia-zabela/youtube-client'
  },

  project3: {
    icon: culturePortalIcon,
    title: '#3 Culture portal',
    description: 'Web portal about Belarusian theater directors, developed in the team',
    environment: 'react, gatsby, graphQL, sass, contentful CMS, gatsby-plugin-intl (translation into three language)',
    linkToApp: 'https://culture-portal-codejam.firebaseapp.com',
    linkToGithub: 'https://github.com/anastasia-zabela/culture-portal-codejam'
  },

 
  project4: {
    icon: chatIcon,
    title: '#4 Group chat',
    description: 'UI for chat, based on websocket connection',
    environment: 'react, websocket server, notification API',
    linkToApp: 'https://rss-chat-socket.firebaseapp.com/',
    linkToGithub: 'https://github.com/anastasia-zabela/group-chat.git'
  }
}

export default projectsText;