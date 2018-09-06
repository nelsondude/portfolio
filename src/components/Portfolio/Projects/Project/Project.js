import React from 'react';
import './Project.css';
import Header from "components/Header/Header";
import Carousel from 'nuka-carousel';


const project = (props) => {

  return (
    <div className={'Project'}>
      <Header fontSize={'40px'} msg={props.header}/>
      <p><a href={`http://${props.link}`} target="_blank">{props.link}</a></p>
      <hr/>
      <p>{props.description}</p>
      <div className={'carousel-container'}>
        <Carousel width={'50%'}>
          {props.images.map((image, i) => (
            <img src={`/images/${image}`} alt=""/>
          ))}
        </Carousel>
      </div>

    </div>
  )
};

export default project;