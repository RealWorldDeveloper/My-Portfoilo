import React from "react";
import './contact.css'

function Contact() {
  return (
    <React.Fragment>
      <div className="container container-contact py-3">
        <h1 className="py-3" id="contact-text">Get in Touch</h1>
        <div className="row-contact">
          <div className="left-contact">
          <div class="card" style= {{width: '23rem'}} id="card-contact">

            <div class="card-body">
            <h2 className="contact-title">Lets talk</h2>
            <p class="card-text text-light">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <h5 class="card-title fs-6 py-2 text-light"><i class="fa-solid fa-envelope px-2"></i>real.world.developer@gmail.com</h5>
              <h5 class="card-title fs-6 py-2 text-light"><i class="fa-solid fa-phone px-2"></i>+4407428172421</h5>
              <h5 class="card-title fs-6 py-2 text-light"><i class="fa-solid fa-location-dot px-2"></i>London, United Kingdom</h5>
            </div>
          </div>

          </div>
          <form action="" className="right-contact" >
          
          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-light">Your Name</label>
          <input type="email" class="form-control py-2" id="exampleFormControlInput1" placeholder="Enter Your name"/>
  <label for="exampleFormControlInput1" class="form-label text-light">Email address</label>
  <input type="email" class="form-control py-2" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label text-light">Write Message here</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Submit</button>
</div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
