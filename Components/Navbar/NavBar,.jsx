import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'


function HeaderNav() {
  return (
 <nav class="navbar navbar-expand-lg" data-aos = 'fade-down' data-aos-duration ='1000' >
  <div class="container nav-container py-3">
    <span class="navbar-brand fs-2" href="#">MD.A</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-info rounded p-3"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li class="nav-item">
          <a class="nav-link active text-light fs-6" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light fs-6" href="#">About Me</a>
        </li>
        <li class="nav-item">
          <AnchorLink className = 'anchor-link' offset = {50} href='#qualification'><a class="nav-link text-light fs-6">Qualifications</a></AnchorLink>
        </li>
        <li class="nav-item">
        <AnchorLink className = 'anchor-link' offset = {50} href='#skill'><a class="nav-link text-light fs-6">Skill</a></AnchorLink>
        </li>
        <li class="nav-item">
        <AnchorLink className = 'anchor-link' offset = {50} href='#project'><a class="nav-link text-light fs-6">Project</a></AnchorLink>
         </li>
        <li class="nav-item">
        <AnchorLink className = 'anchor-link' offset = {50} href='#contact'><a class="nav-link text-light fs-6">Contact Me</a></AnchorLink>
         </li>
      </ul>
      <button type="button" class="btn btn-primary mb-3">Connect Me</button>
     
    </div>
  </div>
</nav>
  )
}

export default HeaderNav
