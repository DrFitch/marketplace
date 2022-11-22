import React from 'react';
import Style from '../styles/index.module.scss';
import { HeroSection, NFTSlider, Service } from '../components';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <NFTSlider />
    </div>
  )
}

export default Home