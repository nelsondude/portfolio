import React from 'react';
import Mask from "./Mask/Mask";

const about = () => {

  return (
    <div className={'About'}>
      <Mask color={'purple'}/>
      <h1>About Me</h1>
      <br/>
      <p>
        Currently a Senior in Information Systems at Carnegie Mellon University with an
        expected graduation of June 2019, I’m also aSoftware Engineer with 2+ years of
        experience specializing in Full-Stack web development. <br/><br/>

        I’ve held Software Engineering internships with BamSEC, The Walt Disney Company,
        and EVVEMI Inc. doing mostly Full-Stack web development. I’m currently looking
        for a full-time position following my graduation next summer. <br/><br/>

        In my free time, I love to travel, play chess, exercise, and hangout with
        friends and family.
      </p>
    </div>
  )
};


export default about;