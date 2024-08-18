import React from "react";
import { mySkill } from "../../src/Assets/skill";
import "./skill.css";

function MySkill() {
  return (
 <React.Fragment>
  <div className="container container-skill py-5" id="skill">
    <h1 className="py-3">My Skills</h1>
<div class="row row-cols-1 row-cols-md-4 g-4">
{mySkill.map(items => {
return (

  <div class="col">
    <div class="card h-100" id="card-skill" >
      <div className="img"><img src={items.Image} class="card-img-top" alt="..."/></div>
      <div class="card-body">
        <h5 class="card-title">{items.Title}</h5>
        <p class="card-text">{items.Description}</p>
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

export default MySkill;
