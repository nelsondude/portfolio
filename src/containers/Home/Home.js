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
    <Portfolio/>
    <About/>
    <Footer />
  </div>
);

export default home;