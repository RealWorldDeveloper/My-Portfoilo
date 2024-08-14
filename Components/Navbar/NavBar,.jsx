import React from 'react'
import './Navbar.css'


function HeaderNav() {
  return (
 <nav class="navbar navbar-expand-lg">
  <div class="container nav-container py-3">
    <div class="navbar-brand text-light" href="#">My Logo</div>
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
          <a class="nav-link text-light fs-6" href="#">Qualifications</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light fs-6" href="#">Skill</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light fs-6" href="#">Project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light fs-6" href="#">Contact Me</a>
        </li>
      </ul>
      <button type="button" class="btn btn-info mb-3">Connect Me</button>
    </div>
  </div>
</nav>
  )
}

export default HeaderNav
