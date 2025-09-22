import React, { useEffect } from 'react'
import { SectionWrapper, Title } from '../CommonComponents/CommonComponents'
import data from '../../utils/data.json'
import {ProjectRow} from './ProjectRow'

const Projects = () => {
  let projects = data.projects

  return (

    <SectionWrapper id={"projects"}>

      <div className='row justify-content-center align-items-center w-100'>
        <div className='col-10 col-lg-8'>
          <Title text={"Projects"} />
          <hr className='w-100'/>  
        </div>
      </div>

      {projects.map((project, i) => (
        <>
        <ProjectRow key={i} project={project} />
        </>
        
      ))}
    </SectionWrapper>
  )
}

export default Projects
