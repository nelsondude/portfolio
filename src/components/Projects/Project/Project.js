import React from 'react';
import './Project.css';
import Header from "../../Header/Header";


const project = () => {

  return (
    <div className={'Project'}>
      <Header fontSize={'40px'} msg={'SayNPlay'}/>
      <p><a href="http://chess.alexnelson.me">chess.alexnelson.me</a></p>
      <hr/>
      <p>As a personal project, I created SayNPlay to play real-time
        3D chess with other players. There is a chess AI you can
        play as well</p>
      <img className={'img-fluid'} src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/>

    </div>
  )
};

export default project;