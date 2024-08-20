import React, { useEffect, useRef } from 'react'
import './About.css'
import Typed from 'typed.js'
import resume from '../../src/files/resume.pdf'


function About() {
const typedRef = useRef(null)
useEffect(()=>{
  const options ={
    strings: ['Md Ain Uddin Ahmmad' , 'From London, UK'],
    typeSpeed:50,
    backSpeed:50,
    loop: true
  }
  const typed = new Typed(typedRef.current, options)
  return ()=>{
    typed.destroy()
  }
},[])

  return (
    <React.Fragment>
      <div className="container about-container py-5">
      <div className="left" >
        <h5 className='text-light'>Welcome to my Coding World</h5>
        <h1 className='text-light fs-3' >Hi I am <strong ref={typedRef}></strong></h1>
        <h3 className='text-light'>Full Stack Developer</h3>
      <a href={resume} download= 'Resume' className='btn btn-outline-warning'>Download CV</a>
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
