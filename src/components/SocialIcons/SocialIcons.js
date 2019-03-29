import React from 'react';
import {social_links} from "globals/constants";
import './SocialIcons.css';


const socialIcons = () => (
  <div className="social">
    {social_links.map((social, i) => (
      <a href={social.href} key={i} target="_blank" rel="noopener noreferrer">
        <i className={`${social.icon} fa-3x`}/>
      </a>
    ))}
  </div>
);

export default socialIcons;