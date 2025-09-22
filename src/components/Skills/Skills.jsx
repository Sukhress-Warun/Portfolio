import React, { useEffect } from 'react'
import data from '../../utils/data.json'
import { SectionWrapper, Title } from '../CommonComponents/CommonComponents'

const Skills = () => {

  let skills = data.skills

  return (
    <SectionWrapper id={"skills"}>

      <div className='row justify-content-center align-items-center'>

        <div className='col-10 col-lg-8'>

          <Title text={"Skills"} />

          <hr />
          
          <div className='container-fluid'>
            
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

    </SectionWrapper>
  )
}

export default Skills
