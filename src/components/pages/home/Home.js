import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Buttons2 from './header/Buttons2';
import Header from './header/Header'; 
import Achievments from './achievements/Achievments'; 
import AboutUs from './abousUs/AboutUs'; 
import Projects from './prjects/Projects'; 
import WhyUs from './whyUs/WhyUs'; 
import CallUs from './callUs/CallUs';
import Footer from './footer/Footer'; 
const Home = () => {
  return (
    <div>
         <Buttons2 />
      <Header />
      <Achievments />
      <AboutUs />
      <Projects />
      <WhyUs />
      <CallUs />
      <Footer />
    </div>
  )
}

export default Home