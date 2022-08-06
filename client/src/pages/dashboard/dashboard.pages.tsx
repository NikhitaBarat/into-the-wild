import React from 'react'
import { VOLCA } from '../../assets';
import './dashboard.styles.css';

const Dashboard = () => {
  return (
    <div className='discover-dash'>
      <img className='disc-bg' src={VOLCA} alt="" />
      <div className="grad-bg"></div>
      <div className="search-container">
        <input type="text" placeholder='Search for Places, Plants, Animals....' className="search-field" />
      </div>
    </div>
  )
}

export default Dashboard;