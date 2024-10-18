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
                  <h5 style={{color:'#FF004F'}}>Title: {items.Title}</h5>
                  <h4>Level: {items.Level}</h4>
                  <h5 >Year: {items.Year}</h5>
                  <h6>Institution: {items.Institution}</h6>
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
