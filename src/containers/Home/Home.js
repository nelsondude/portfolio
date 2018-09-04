import React from 'react';
import './Home.css';
import Banner from "components/Banner/Banner";
import Navbar from "components/Navbar/Navbar";
import Header from "components/Header/Header";
import Projects from "components/Projects/Projects";
import About from "components/About/About";
import Footer from "components/Footer/Footer";


const home = () => (
  <div className={'Home'}>
    <Banner/>
    <Navbar/>
    <Header fontSize={'50px'} msg={'My portfolio'}/>
    <p>Below, you can see some of the projects I've been working on lately</p>
    <Projects />
    <About/>
    <Footer />

  </div>
);

export default home;