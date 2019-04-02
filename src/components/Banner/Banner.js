import React from 'react';
import {Buffer} from "../index";
import './Banner.css';
import Navbar from "../Navbar/Navbar";
import SocialIcons from "../SocialIcons/SocialIcons";
import {ReactComponent as Signature} from './signature.svg';


class Banner extends React.Component {
  resetAnimation = () => {
    var el = document.getElementById('animated');
    var newone = el.cloneNode(true);
    newone.onclick = this.resetAnimation;
    el.parentNode.replaceChild(newone, el);
  };

  render() {
    return (
      <div className={'Banner'}>
        <div className="banner-content">
          <Signature style={{padding: "5px"}} onClick={this.resetAnimation} id={"animated"}/>
          <Buffer height={'40px'}/>
          <SocialIcons />
          <Buffer height={'80px'}/>
          <h3>Software Engineer&nbsp;&nbsp;|&nbsp;&nbsp;Full Stack Developer</h3>
        </div>

        <Navbar />
      </div>
    )
  }
}

export default Banner;