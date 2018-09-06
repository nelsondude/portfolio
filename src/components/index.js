import React from 'react';
import './index.css';

export const Buffer = (props) => (
  <div style={{height: props.height || '100px', width: '100%'}}/>
);

export const Button = (props) => (
  <button className={'Button'} onClick={props.clicked}>
    {props.children}
  </button>
);