import React from 'react'
import './footer.css'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <h1>Mia Pham</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mia-pham-2520"><SiLinkedin/></a>
        <a href="https://github.com/MiasPham"><SiGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>Portion of this page is ©Mia Pham. Other attributions cited in
      document or source page.</small>
      </div>
    </footer>
  )
}

export default Footer