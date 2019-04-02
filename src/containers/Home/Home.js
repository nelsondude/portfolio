import React, {Component} from 'react';
import './Home.css';
import Banner from "components/Banner/Banner";
import Portfolio from "components/Portfolio/Portfolio";
import About from "components/About/About";
import Footer from "components/Footer/Footer";
import Contact from "components/Contact/Contact";
import {isMobile} from "react-device-detect";

import {Element} from 'react-scroll'

class Home extends Component {

  render() {
    return (
      <div className={'Home'}>
        <div className={'background'} style={{position: isMobile ? 'absolute' : 'fixed'}}/>
        <Element name="home">
          <Banner/>
        </Element>
        {/*content class necessary so that Navbar can add padding when it changes position*/}
        <div className={'content'}>
          <Element name="portfolio">
            <Portfolio/>
          </Element>
          <Element name="about">
            <About/>
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
          <Element name="footer">
            <Footer/>
          </Element>
        </div>
      </div>
    )
  }
}


export default Home;