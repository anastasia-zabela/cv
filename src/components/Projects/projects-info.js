import chatIcon from '../../assets/icons/chat-icon.jpg'

const projectsText = {
  project1: {
    icon: chatIcon,
    title: '#1 Group chat',
    description: 'UI for chat, based on websocket connection',
    environment: 'react, websocket server, notification API',
    linkToApp: 'https://rss-chat-socket.firebaseapp.com/',
    linkToGithub: 'https://github.com/anastasia-zabela/culture-portal-codejam'
  },

  project2: {
    icon: chatIcon,
    title: '#2 Piskel clone',
    description: `Simplified clone of the piskelapp.com, the web-app for spriting and pixel art`,
    environment: 'core JS, sass, canvas API, fullscreen API, jest, gif.js, jest, webpack, eslint',
    linkToApp: 'https://anastasia-zabela.github.io/piskel-clone/',
    linkToGithub: 'https://github.com/anastasia-zabela/culture-portal-codejam'
  },

  project3: {
    icon: chatIcon,
    title: '#3 Youtube client',
    description: 'Web app to view the information about youtube clips on user request',
    environment: 'core JS, youtube API requests, jest, css animation, responsive design',
    linkToApp: 'https://anastasia-zabela.github.io/youtube-client/',
    linkToGithub: 'https://github.com/anastasia-zabela/culture-portal-codejam'
  },

  project4: {
    icon: chatIcon,
    title: '#4 Culture portal',
    description: 'Web portal about Belarusian theater directors, developed in the team',
    environment: 'react, gatsby, graphQL, contentful CMS, gatsby-plugin-intl (translation into three language)',
    linkToApp: 'https://culture-portal-codejam.firebaseapp.com',
    linkToGithub: 'https://github.com/anastasia-zabela/culture-portal-codejam'
  }
}

export default projectsText;