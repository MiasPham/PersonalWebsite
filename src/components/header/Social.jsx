import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'


const Social = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/"><SiLinkedin/></a>
      <a href="https://www.github.com/"><SiGithub/></a>
    </div>
  )
}

export default Social