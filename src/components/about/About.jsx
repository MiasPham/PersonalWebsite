import React from 'react';
import './about.css';
import about from '../../assets/about.jpeg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-img">
          <img src={about} alt="me" />
        </div>
      </div>

      <div className="about__content">
      <p>
        I'm Mia Pham, a Junior pursuing Informatics at the University of Washington. My passion lies
        in coding and design. Front-end engineering is where the two meet.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit nisi quis metus
        euismod euismod. Donec sagittis leo nec sapien feugiat sollicitudin. Nunc condimentum
        dignissim leo, sed maximus sem ullamcorper non. Maecenas eu ullamcorper ipsum.
      </p>

    <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
    </div>

    </section>
  )
}

export default About