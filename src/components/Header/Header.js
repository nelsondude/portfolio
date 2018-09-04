import React from 'react';
import './Header.css';


const header = (props) => {
  return (
    <div className={'Header'}>
      <div className={'purple_bar'}/>
      <span className="text-center" style={{fontSize: props.fontSize}}>{props.msg}</span>
      <div className={'purple_bar'}/>
    </div>
  )
};


export default header;
