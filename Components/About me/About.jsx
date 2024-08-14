import React from 'react'
import './About.css'

function About() {
  return (
    <React.Fragment>
      <div className="container about-container py-5">
      <div className="left">
        <h5 className='text-light'>Welcome to my Coding World</h5>
        <h1 className='text-light'>Hi I am <strong>Md Ain Uddin Ahmmad</strong></h1>
        <h3 className='text-light'>Full Stack Developer</h3>
      <a href="" className='btn btn-outline-warning'>Download</a>
      </div>
      <div className="right">
        <div className="image">
          <img src="images/profile.png" alt="" />
        </div>
      </div>
      </div>

    </React.Fragment>
  )
}

export default About
