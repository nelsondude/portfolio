import React from 'react';
import {Buffer} from "../index";
import './Banner.css';
import Navbar from "../Navbar/Navbar";
import SocialIcons from "../SocialIcons/SocialIcons";
import {ReactComponent as Signature} from './signature.svg';
import Particles from "react-particles-js";


const banner = () => (
  <div className={'Banner'}>
    <div className="banner-content">
      <Signature style={{padding: "5px"}}/>
      <Buffer height={'40px'}/>
      <SocialIcons />
      <Buffer height={'80px'}/>
      <h3>I’m a Software Engineer and Full-Stack web developer focused on
        creating brilliant user-experiences and robust code.</h3>
    </div>

    <Navbar />
  </div>
);

export default banner;