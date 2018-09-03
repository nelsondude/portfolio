import React from 'react';
import profile from 'assets/profile.png';
import './Home.css';


const home = () => (
  <div className={'Home'}>
    <h3>Hello, my name is <span className="highlight">Alexander Nelson</span></h3>
    <br/>
    <h3>I'm a full stack web developer.</h3>
    <img src={profile} className={'img-fluid profile'} alt=""/>
  </div>
);

export default home;