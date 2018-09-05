import React from 'react';
import {Buffer} from "../index";
import './Banner.css';
import Navbar from "../Navbar/Navbar";


const banner = () => (
  <div className={'Banner'}>
    <h1 className="text-center" style={{fontSize: '100px'}}>Alex Nelson</h1>
    <Buffer/>
    <h3>I’m a Software Engineer and Full-Stack web developer focused on <br/>
      creating brilliant user-experiences and robust code.</h3>
    <Navbar />
  </div>
);

export default banner;