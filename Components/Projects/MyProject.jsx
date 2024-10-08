import React from "react";
import {project} from '../../src/Assets/project' ;
import "./project.css";

function MyProject() {
  return (
    <React.Fragment>
      <div className="container container-project p-4" id="project">
        <h1 className="py-4">Projects</h1>
        <div class="row row-cols-1 row-cols-sm-4 g-4">
          {project.map((items) => {
            return (
              <div class="col" >
                <div class="card h-100 p-3" id="card-project">
                  <div className="project-image"><img src={items.image} class="card-img-top" alt="..." /></div>
                  <div class="card-body">
                    <h5 class="card-title">{items.Title}</h5>
                    <p class="card-text ">{items.Description}</p>
                    <div className="card-text-container">
                      <div className="card-text-container-image"><a href={items.url}><img src="images/projects/code.png" alt="" /></a></div>
                      <div className="card-text-container-image"><a href={items.github}><img src="images/projects/github.png" alt="" /></a></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default MyProject;
