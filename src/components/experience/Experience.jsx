import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__content">
          <h3>Scandanavian Software Park</h3>
          <h4 className='text-light'>Position: Intership</h4>
            <article className='experience__details'>
              <ul>
              <li>Developed bookings and time schedule for different universities</li>
              <li>Update websites based on client requirements</li>
              <li>Optimized websites by testing out codes</li>
              </ul>
              <p><b>Languages:</b> HTML, CSS, Javascript, React</p>
            </article>
        </div>

        <div className="experience__content">
          <h3>Rainy Dawg Daze Radio</h3>
          <h4 className='text-light'>Position: Technology Manager</h4>
          <article className='experience__details'>
            <ul>
              <li>Maintain and develop ideas to update the station’s website</li>
              <li>Upkeep the Rainy Dawg server</li>
              <li>Run and coordinate sound for live, in studio, and campus events</li>
            </ul>
            <p><b>Languages:</b> HTML, CSS, Javascript</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
