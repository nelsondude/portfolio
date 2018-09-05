import React, {Component} from 'react';
import './Home.css';
import Banner from "components/Banner/Banner";
import Navbar from "components/Navbar/Navbar";
import Portfolio from "components/Portfolio/Portfolio";
import About from "components/About/About";
import Footer from "components/Footer/Footer";
import Contact from "components/Contact/Contact";

import {Element, scroller} from 'react-scroll'

class Home extends Component {
  state = {
    links: ['home', 'portfolio', 'about', 'contact']
  };

  handleGoToSection = (section_name) => {
    scroller.scrollTo(section_name, {
      duration: () => {return 500;},
      delay: 100,
      smooth: true,
      offset: -100
    })
  };

  render() {
    return (
      <div className={'Home'}>
        <Element name="home">
          <Banner/>
        </Element>
        <Navbar goToSection={this.handleGoToSection.bind(this)} links={this.state.links}/>
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