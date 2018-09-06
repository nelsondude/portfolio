import React from 'react';
import Project from './Project/Project';
import './Projects.css';


const projects = (props) => {
  return (
    <div className={'Projects'}>
      {props.projects.map((project, i) => {
        return <Project key={i} {...project}/>
      })}
    </div>
  )
};

export default projects;
