import React from 'react'
import { SectionWrapper } from '../CommonComponents/CommonComponents'

const Home = () => {
  return (
    <>
      <SectionWrapper avoidPadding={true} reducedPadding={true} id={"home"}>
        <div className='row justify-content-center align-items-center'>

          <div className='col-10 col-lg-4'>
            <img id={"home-image"} src="/images/home.png" width={"100%"} alt="" />
          </div>

          <div className='col-10 col-lg-4 mt-3 mt-lg-0'>

            <p className='display-6'>
              I'm <span className='fw-bold theme-color-1-text'>  Sukhresswarun </span>
            </p>

            <hr />

            <p className='fs-5'>
              A software developer who can code anything, mastering every aspect of the binary world to build whatever you need.
            </p>

            <p className='lead text-muted'>
              Share just your ideas, I'll handle the rest
            </p>

            <div className='mt-4 d-flex gap-2 flex-wrap'>
              <a href="https://github.com/Sukhress-Warun" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-decoration-none px-3 py-1 rounded-pill trans-black-bg">
                <img src="/images/icons/Github.svg" alt="GitHub" width={"15rem"} />
                <span className="ms-2 light-color-text">GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/sukhress-warun/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-decoration-none px-3 py-1 rounded-pill trans-black-bg">
                <img src="/images/icons/LinkedIn.svg" alt="LinkedIn" width={"15rem"} />
                <span className="ms-2 light-color-text">LinkedIn</span>
              </a>

              <a href="https://leetcode.com/u/sukhresswarun/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-decoration-none px-3 py-1 rounded-pill trans-black-bg">
                <img src="/images/icons/Leetcode.svg" alt="LeetCode" width={"15rem"} />
                <span className="ms-2 light-color-text">LeetCode</span>
              </a>
            </div>


          </div>

        </div>


      </SectionWrapper>
    </>
  )
}

export default Home
