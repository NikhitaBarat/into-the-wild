import React from 'react';
import { MOUNTAIN } from '../../assets';
import './home.styles.css';

const Home = () => {
  return (
    <div className='home-page'>
        <div className="home-sky"></div>
        <div className="hero-container">
          <h1>INTO THE WILD</h1>
          <img className='mountain' src={MOUNTAIN} alt="" />
        </div>

    </div>
  )
}

export default Home;