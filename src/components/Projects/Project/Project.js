import React from 'react';
import Slider from "react-slick";
import './Project.css';
import Header from "../../Header/Header";


const project = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={'Project'}>
      <Header fontSize={'40px'} msg={props.header}/>
      <p><a href={props.link}>{props.link}</a></p>
      <hr/>
      <p>{props.description}</p>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
};

export default project;