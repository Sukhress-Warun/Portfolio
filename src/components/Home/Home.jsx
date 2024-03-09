import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    <div id={"home"} className='container-fluid d-flex align-items-center'>
      <div className='row jumbotron justify-content-center'>

        <div className='col-10 col-lg-4'>
          <img src="/images/home-dev.png" width={"100%"} alt="" />
        </div>

        <div className='col-10 col-lg-4 align-self-center mt-3 mt-lg-0'>
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
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Home
