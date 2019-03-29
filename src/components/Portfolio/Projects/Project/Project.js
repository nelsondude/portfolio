import React from 'react';
import './Project.css';
import Header from "components/Header/Header";
import {Buffer} from "components";


const project = (props) => {

  return (
    <div className={'Project'}>
      <Header fontSize={'40px'} msg={props.header}/>
      <p><a href={`http://${props.link}`} target="_blank" rel="noopener noreferrer">{props.link}</a></p>
      <hr className={'sub-hr'}/>
      <p className={'text-muted project-description'}>{props.description}</p>
      <img src={`/images/${props.image}`} alt=""/>
      <Buffer height={'50px'}/>
      <hr/>
    </div>
  )
};

export default project;