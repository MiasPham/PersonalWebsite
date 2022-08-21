import React from 'react'
import { useState } from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home"
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#' ? 'active' : ''}>
        <FaHome />
      </a>
      <a href="#experience"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <MdWork />
      </a>
      <a href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
        <AiFillMessage />
      </a>
    </nav>
  )
}

export default Nav