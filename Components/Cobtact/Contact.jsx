import React from "react";
import './contact.css'

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3c569081-fd1c-4e29-83f2-73c9acc4a449");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <React.Fragment>
      <div className="container container-contact py-3" id="contact">
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
          <form onSubmit={onSubmit} className="right-contact" action="submit">
          
          <div class="mb-3">
          <label htmlFor="" class="form-label text-light">Your Name</label>
          <input type="text" class="form-control py-2" name="name" id="exampleFormControlInput1" placeholder="Enter Your name"/>
  <label htmlFor="" class="form-label text-light">Email address</label>
  <input type="email" class="form-control py-2" name="email" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label htmlFor="" class="form-label text-light">Write Message here</label>
  <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="submit">Submit</button>
</div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
