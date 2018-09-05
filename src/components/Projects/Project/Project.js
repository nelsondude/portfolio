import React from 'react';
import './Project.css';
import Header from "../../Header/Header";


const project = (props) => {
  return (
    <div className={'Project'}>
      <Header fontSize={'40px'} msg={props.header}/>
      <p><a href={props.link}>{props.link}</a></p>
      <hr/>
      <p>{props.description}</p>
    </div>
  )
};

export default project;