import React from 'react';
import './Portfolio.css';
import Header from "../Header/Header";
import Projects from "../Projects/Projects";


const portfolio = () => {

  return (
    <div className={'Portfolio'}>
      <Header fontSize={'50px'} msg={'PORTFOLIO'}/>
      <p>Below, you can see some of the projects I've been working on lately</p>
      <Projects />
    </div>
  )
};

export default portfolio;