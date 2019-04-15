import React from 'react';
import './About.css';
import {isMobile} from "react-device-detect";


class About extends React.Component {

  render() {
    return (
      <div className={['About', isMobile ? null : 'mask'].join(' ')}>
        <div className={'about-content'} id={'aboutcontent'}>
          <h1>About Me</h1>
          <br/>
          <p>
            My name is Alex Nelson and I'm currently a Senior in Information Systems at Carnegie Mellon University with
            an
            expected graduation of May 2019. I love to code and have 2+ years of Software Engineering
            experience specializing in Full-Stack web development. <br/><br/>

            I’ve held Software Engineering internships with BamSEC, The Walt Disney Company,
            and EVVEMI Inc doing Software Engineering in a variety of fields. I
            plan on working at Compass Real Estate as a Software Engineer
            following my graduation in May 2019. <br/><br/>

            I love using new technologies like React, Gulp.js, Django and more! These are just a few of my favorites
            for getting a project up and running. I've recently started deploying sites on Firebase for static content
            and Heroku when I need a more robust backend. <br/><br/>

            In my free time, I love to travel, play chess, exercise, and hangout with
            friends and family.
          </p>
        </div>
      </div>
    )
  }
}


export default About;