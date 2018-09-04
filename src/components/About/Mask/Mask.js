import React from 'react';
import './Mask.css';


const mask = (props) => {

  return (
    <div className={'Mask'} style={{backgroundColor: props.color}}/>
  )
};


export default mask;