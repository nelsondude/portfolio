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
      image: 'chess1.png'
    },
    {
      header: 'Tipsyapp',
      link: 'www.tipsyapp.co',
      description: `Tipsyapp parses and stores all of the “Tipsy Bartender” cocktail
                    recipes to make it easier to navigate his 1000+ recipes.`,
      image: 'tipsy1.png'
    },
    {
      header: 'BamSEC',
      link: 'www.bamsec.com',
      description: `In the summer of 2018, I interned at BamSEC, which is a 
                    financial research tool for SEC filings posted on SEC.gov`,
      image: 'bamsec1.png'
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