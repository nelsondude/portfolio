import React, {Fragment} from 'react';
import Navbar from 'components/Navbar/Navbar';
import {Buffer} from "../../components";


const layout = (props) => {
  return (
    <Fragment>
      <Buffer/>
      <Navbar/>
      <div className={'container'}>
        {props.children}
      </div>
    </Fragment>
  )
};

export default layout;