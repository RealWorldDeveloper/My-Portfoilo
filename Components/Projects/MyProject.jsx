import React from "react";
import { project } from "../../Assets/project";
import "./project.css";

function MyProject() {
  return (
    <React.Fragment>
      <div className="container container-project p-4">
        <h1>My Projects</h1>
        <div className="row">
{project.map(items => <div class="card-project" style={{width:'18rem'}}>
  <div className="image-project"><img src={items.image} class="card-img-top" alt="..."/></div>
  <div class="card-body p-3">
    <h5 class="card-title my-3">{items.Title}</h5>
    <p class="card-text">{items.Description}</p>
  </div>
</div>)}
</div>
</div>


</React.Fragment>
  );
}

export default MyProject;