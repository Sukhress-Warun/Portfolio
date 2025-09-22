import React, { useEffect } from 'react'
import { SectionWrapper, Title } from '../CommonComponents/CommonComponents'

const About = () => {
  return (
    <SectionWrapper id={"about"}>

      <div className='row justify-content-center align-items-center'>

        <div className='col-10 col-lg-8'>

          <Title text={"About Me"} />

          <hr />

          <p style={{ textAlign: "" }} className='fs-5'>
            I'm Sukhresswarun, a software developer passionate about crafting elegant solutions. With a solid coding background, I thrive on challenges and constantly seek to expand my expertise. Eager to collaborate in dynamic environments, I bring a collaborative mindset and a thirst for knowledge. I enjoy working with others to create innovative solutions that make a difference. Whether it's optimizing existing systems, developing new software solutions, or tackling challenges head-on, I'm committed to delivering results that exceed expectations while consistently prioritizing clean code. Let's connect and explore how I can contribute to your team's success.
          </p>

        </div>

      </div>

    </SectionWrapper>
  )
}

export default About
