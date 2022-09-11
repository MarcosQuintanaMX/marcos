import React from 'react'
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
} from 'react-icons/fa'

const data = [
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: 'https://github.com/marcosquintana',
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: 'https://www.linkedin.com/in/marcosquintana/',
  },
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: 'https://www.facebook.com/marcosiq',
  },

  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: 'https://twitter.com/MarcosIQuintana',
  },
]

export default data
