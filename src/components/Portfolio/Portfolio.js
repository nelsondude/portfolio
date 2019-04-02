import React from 'react';
import './Portfolio.css';
import Projects from "./Projects/Projects";


const portfolio = () => {
  const projects = [
    {
      header: '3CHESS',
      link: 'chess.alexnelson.me',
      description: `As a personal project, I created 3CHESS to play real-time
                    3D chess with other players. It includes a chess AI developed with 
                    the Minimax algorithm in Python.`,
      image: 'chess1.png'
    },
    {
      header: 'Tipsyapp',
      link: 'tipsy.alexnelson.me',
      description: `Tipsyapp parses and stores all of the “Tipsy Bartender” cocktail
                    recipes to make it easier to navigate his 1000+ recipes. Input the 
                    bar ingredients you have at home to see what drinks you can make of his.`,
      image: 'tipsy1.png'
    },
    {
      header: 'BamSEC',
      link: 'www.bamsec.com',
      description: `In the summer of 2018, I interned at BamSEC, which is a 
                    financial research tool for SEC filings posted on SEC.gov. I worked on
                    a user interaction monitoring system and I optimized our elastic search
                    indexing with AWS.`,
      image: 'bamsec1.png'
    }
  ];

  return (
    <div className={'Portfolio'}>
      <Projects projects={projects}/>
    </div>
  )
};

export default portfolio;