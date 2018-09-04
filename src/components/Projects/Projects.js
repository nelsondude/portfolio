import React from 'react';
import Project from './Project/Project';
import './Projects.css';


const projects = (props) => {

  return (
    <div className={'Projects'}>
      <Project/>
      <Project/>
      <Project/>
      <Project/>
    </div>
  )
};

export default projects;
