import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__content">
          <h3>Title</h3>
          <h4 className='text-light'>Position:</h4>
            <article className='experience__details'>
              <ul>
                <li>Description 1</li>
                <li>Description 2</li>
                <li>Description 3</li>
              </ul>
              <p><b>Languages:</b> HTML, CSS, Javascript, React</p>
            </article>
        </div>

        <div className="experience__content">
          <h3>Title</h3>
          <h4 className='text-light'>Position:</h4>
          <article className='experience__details'>
            <ul>
              <li>Description 1</li>
              <li>Description 2</li>
              <li>Description 3</li>
            </ul>
            <p><b>Languages:</b> HTML, CSS, Javascript, React</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
