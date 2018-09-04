import React from 'react';
import './Home.css';
import Banner from "components/Banner/Banner";
import Navbar from "components/Navbar/Navbar";
import Portfolio from "components/Portfolio/Portfolio";
import About from "components/About/About";
import Footer from "components/Footer/Footer";


const home = () => (
  <div className={'Home'}>
    <Banner/>
    <Navbar/>
    {/*content class necessary so that Navbar can add padding when it changes position*/}
    <div className={'content'}>
      <Portfolio/>
      <About/>
      <Footer/>
    </div>
  </div>
);

export default home;