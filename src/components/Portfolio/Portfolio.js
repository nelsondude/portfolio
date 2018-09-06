import React from 'react';
import './Portfolio.css';
import Header from "../Header/Header";
import Projects from "./Projects/Projects";




const portfolio = () => {
  const projects = [
    {
      header: 'SayNPlay',
      link: 'chess.alexnelson.me',
      description: `As a personal project, I created SayNPlay to play real-time
                    3D chess with other players. There is a chess AI you can play as well`,
      images: ['chess1.png']
    },
    {
      header: 'TipsyApp',
      link: 'www.tipsyapp.co',
      description: 'Here is a description',
      images: ['tipsy1.png', 'tipsy2.png']
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