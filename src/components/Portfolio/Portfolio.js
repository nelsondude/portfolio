import React from 'react';
import './Portfolio.css';
import Header from "../Header/Header";
import Projects from "../Projects/Projects";


const portfolio = () => {
  const projects = [
    {
      header: 'Header',
      link: 'www.google.com',
      description: 'Here is a description',
      images: ['img 1', 'img 2']
    },
    {
      header: 'Header',
      link: 'www.google.com',
      description: 'Here is a description',
      images: ['img 1', 'img 2']
    },
    {
      header: 'Header',
      link: 'www.google.com',
      description: 'Here is a description',
      images: ['img 1', 'img 2']
    }
  ];

  return (
    <div className={'Portfolio'}>
      <Header fontSize={'50px'} msg={'PORTFOLIO'}/>
      <p>Below, you can see some of the projects I've been working on lately</p>
      <Projects projects={projects}/>
    </div>
  )
};

export default portfolio;