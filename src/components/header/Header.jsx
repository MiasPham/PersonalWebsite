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
          <h2>FrontEnd Developer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere
            lacinia magna, eget egestas lorem placerat nec. Nam accumsan commodo posuere. Curabitur ut mauris risus.</p>
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