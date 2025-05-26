import React from 'react';
import './HealthStatusCards.css';


const HealthstatusCards = ({ icon, title, date, statusColor, progress }) => {
  return (
    <div className='card-section'>
    <div className="health-card">
      <div className="health-icon">{icon}</div>
      <div className="health-info">
        <h4>{title}</h4>
        <p>Date: {date}</p>
        <div className="health-bar">
          <div
            className="health-progress"
            style={{ width: `${progress}%`, backgroundColor: statusColor }}
          ></div>
        </div>
      </div>
     </div>

   </div>
  );
};

export default HealthstatusCards;
