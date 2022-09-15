import React from 'react'
import './header.css'
import Resume from '../../assets/Resume.pdf'
import profile from '../../assets/profile.jpeg'

const Header = () => {
  return (
    <header id='home'>
      <div className="main__container">
        <div className="container header__container">
          <h3>—Hello </h3>
          <h1>I'm <span>Mia Pham</span></h1>
          <h2>Front-End Developer</h2>
          <h3>What is <span>CODING?</span> </h3>
          <p>
            Coding is more than sitting in the dark, staring at endless line of codes or
            fixing bugs on a computer screen. It is a place where people can display their
            <b> creative minds</b>.
          </p>
        <div className="cta">
          <a href={Resume} download className='btn'>Resume</a>
          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>


        <div className="profile">
          <img src={profile} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header