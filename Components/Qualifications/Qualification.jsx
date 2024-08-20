import React from "react";
import './qualification.css'
import {Myqualification} from '../../src/Assets/myQua';

function Qualification() {
  return (
    <React.Fragment>
      <div className="container container-qualification py-3" id="qualification">
        <h1 className="py-1">Qualifications And Achivements</h1>
        <div class="row row-cols-1 row-cols-sm-3 g-4">
         

            {Myqualification.map(items => {
              return(
                 <div class="col">
                <div class="card h-100 py-2" id="card-qualification">
                <img src={items.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card 
                  </p>
                </div>
                <div className="caption"></div>
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
