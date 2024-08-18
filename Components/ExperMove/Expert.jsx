import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./expert.css";
import { icons } from "../../src/Assets/expert";

function Expert() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear",
  };

  return (
    <React.Fragment>
      <div className="container-expert py-4" id="expert">
        <h1 text-light className="py-4">Expert On</h1>
        <Slider {...settings}>
{icons.map(items => {
return(
  
  <div className=" expert-image p-3" >
    <div className="icons-div">
    <img src={items.Image} alt="" />
    </div>
    
  </div>
  

)
})}
</Slider>
      </div>
    </React.Fragment>
  );
}

export default Expert;
