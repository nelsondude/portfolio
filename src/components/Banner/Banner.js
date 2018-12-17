import React from 'react';
import {Buffer} from "../index";
import './Banner.css';
import Navbar from "../Navbar/Navbar";
import SocialIcons from "../SocialIcons/SocialIcons";
import Particles from "react-particles-js";


const banner = () => (
  <div className={'Banner'}>
    <Particles className={'particles-wrapper'} params={{
      "particles": {
        "number": {
          "value": window.innerWidth < 400 ? 25 : 50
        },
        "size": {
          "value": 3
        }
      },
      "interactivity": {
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          }
        }
      }
    }}/>
    <div className="banner-content">
      <h1 className="text-center banner-title">Alexander Nelson</h1>
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