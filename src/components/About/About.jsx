import React, { useEffect } from 'react'
import './About.css'
import data from '../../utils/data.json'

const About = () => {

  let skills = data.skills

  return (
    <div id={"about"} className='container'>

      <div className='row justify-content-center'>

        <div className='col-10 col-lg-8'>
          <p className='fw-bold fs-3 theme-color-1-text'>
            About Me
          </p>
          <hr />
          <p style={{ textAlign: "" }} className='fs-5'>
            I'm Sukhresswarun, a software developer passionate about crafting elegant solutions. With a solid coding background, I thrive on challenges and constantly seek to expand my expertise. Eager to collaborate in dynamic environments, I bring a collaborative mindset and a thirst for knowledge. I enjoy working with others to create innovative solutions that make a difference. Whether it's optimizing existing systems, developing new software solutions, or tackling challenges head-on, I'm committed to delivering results that exceed expectations while consistently prioritizing clean code. Let's connect and explore how I can contribute to your team's success.
          </p>
        </div>

        <div className='col-10 col-lg-8 mt-1'>
          <p className='fw-bold fs-3 theme-color-1-text'>
            Skills
          </p>
          <hr />
          <div className='container'>
            <div className='row '>
              {skills.map((skill, i) => {
                return (
                  <div key={i} className='col-lg-3 col-sm-4 col-6 my-1'>
                    <div className='d-flex justify-content-center mb-1'>
                      <img src={"/" + skill.img} alt={skill.name} height={"40px"} width={"40px"} />
                    </div>
                    <p className='fs-6 text-center'>{skill.name}</p>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
