import React from 'react';
import {Button} from "components";
import './Contact.css';


const contact = () => (
  <div className={'Contact'}>
    <h1>ok, let's create <br/>something great together</h1>
    <p>If you like my work, and are recruiting or want to collaborate, <br/>
      just email me below.</p>
    <Button clicked={() => document.location.href = "mailto:alexn1336@gmail.com"}>get in touch</Button>
  </div>
);

export default contact;