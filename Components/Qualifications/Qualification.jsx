import React from "react";
import './qualification.css'
import { Myqualification } from "../../Assets/myQua";

function Qualification() {
  return (
    <React.Fragment>
      <div className="container container-qualification py-4">
        <h1 className="py-4">Qualifications And Achivements</h1>
        <div class="row row-cols-1 row-cols-sm-3 g-4">
         

            {Myqualification.map(items => {
              return(
                 <div class="col">
                <div class="card h-100" id="card-qualification">
                <img src={items.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card 
                  </p>
                </div>
              </div>
              </div>
              )


            })}


          
         </div>
      </div>
    </React.Fragment>
  );
}

export default Qualification;
