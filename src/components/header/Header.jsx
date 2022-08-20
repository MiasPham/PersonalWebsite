import React from 'react'
import './header.css'
import CTA from './CTA'
import profile from '../../assets/profile.jpeg'
import Social from './Social'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mia Pham</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA />
        <Social / >

        <div className="profile">
          <img src={profile} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header