import React from 'react';
import { MOUNTAIN, TRAVELLER } from '../../assets';
import { FeatureCard } from '../../components';
import './home.styles.css';

const Home = () => {
  return (
    <div className='home-page'>
        <div className="home-sky"></div>
        <div className="hero-container">
          <h1>INTO THE WILD</h1>
          <img className='mountain' src={MOUNTAIN} alt="" />
        </div>

        <div className="feature-section">
          <FeatureCard/>
          <FeatureCard/>
          <div className="learn-more-ft-sec">
            <h1>H</h1>
          </div>
        </div>
        <div className="linear-bg"></div>
        <img className='traveller-img' src={TRAVELLER} alt="" />

        <div className="feature-section">
          <div className="learn-more-ft-sec">
            <h1>H</h1>
          </div>
          <FeatureCard/>
          <FeatureCard/>
        </div>
        
    </div>
  )
}

export default Home;