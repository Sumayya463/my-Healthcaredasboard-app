import React from 'react'
import "./DashboardOverview.css";
import { FaArrowRight } from 'react-icons/fa';

const DashboardOverview = () => {
  return (
    <div className='dashboard-overview'>
      <h2>Dashboard</h2>
      <div className='week-option'>
        <p>This Week</p>
        <div className='details'><h4>Details <FaArrowRight/></h4></div>
      </div>
      
    </div>
  )
}

export default DashboardOverview;
