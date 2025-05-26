import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
  return (
    <div className="activity-container">
      <div className='activitytext'>
        <h3 className="activity-title">Activity</h3>
      <p className="activity-subtext">3 appointments this week</p>
      </div>
      
      <div className="activity-graph">
        <div className='days'>
        <div className="day">
          <div className="bar" style={{ height: '80px', backgroundColor:"lightgrey"} }></div>
          <div className="bar" style={{ height: '30px', backgroundColor:" #26c6da" }}></div>
          <div className="bar" style={{ height: '50px', backgroundColor:"#233073" }}></div>
          <div className="bar" style={{ height: '60px', backgroundColor:" lightgrey" }}></div>
        </div>
         <div className='dayname'><p>Mon</p></div>
        </div>
        
         <div className='days'>
        <div className="day">
          <div className="bar" style={{ height: '80px',backgroundColor:"#233073" }}></div>
          <div className="bar" style={{ height: '50px',backgroundColor:"#233073" }}></div>
          <div className="bar" style={{ height: '30px',backgroundColor:"lightgrey" }}></div>
          <div className="bar" style={{ height: '60px',backgroundColor:"#26c6da" }}></div>
        </div>
         <div className='dayname'><p>Tue</p></div>
        </div>
        
         <div className='days'>
        <div className="day">
          <div className="bar" style={{ height: '80px',backgroundColor:"lightgrey" }}></div>
          <div className="bar" style={{ height: '50px',backgroundColor:"lightgrey" }}></div>
          <div className="bar" style={{ height: '60px',backgroundColor:" #26c6da" }}></div>
          <div className="bar" style={{ height: '30px',backgroundColor:"#233073" }}></div>
        </div>
         <div className='dayname'><p>Wed</p></div>
        </div>
        
         <div className='days'>
        <div className="day">
          <div className="bar" style={{ height: '80px',backgroundColor:"lightgrey" }}></div>
          <div className="bar" style={{ height: '60px',backgroundColor:"#26c6da" }}></div>
          <div className="bar" style={{ height: '50px',backgroundColor:"#233073" }}></div>
          <div className="bar" style={{ height: '30px',backgroundColor:"lightgrey" }}></div>
        </div>
         <div className='dayname'><p>Thurs</p></div>
        </div>
        
         <div className='days'>
        <div className="day">
          <div className="bar" style={{ height: '80px',backgroundColor:"#26c6da" }}></div>
          <div className="bar" style={{ height: '30px',backgroundColor:"#233073" }}></div>
          <div className="bar" style={{ height: '60px',backgroundColor:"lightgrey" }}></div>
          <div className="bar" style={{ height: '50px',backgroundColor:"lightgrey" }}></div>
        </div>
         <div className='dayname'><p>Fri</p></div>
        </div>
        
         <div className='days'>
        <div className="day">
        <div className="bar" style={{ height: '80px',backgroundColor:"lightgrey" }}></div>
          <div className="bar" style={{ height: '30px',backgroundColor:"lightgrey" }}></div>
          <div className="bar" style={{ height: '50px',backgroundColor:"#233073" }}></div>
          <div className="bar" style={{ height: '60px',backgroundColor:"#26c6da" }}></div>
        </div>
         <div className='dayname'><p>Sat</p></div>
        </div>
        
         <div className='days'>
        <div className="day">
         <div className="bar" style={{ height: '80px',backgroundColor:"lightgrey" }}></div>
          <div className="bar" style={{ height: '60px',backgroundColor:"#26c6da" }}></div>
          <div className="bar" style={{ height: '50px',backgroundColor:"lightgrey" }}></div>
          <div className="bar" style={{ height: '30px',backgroundColor:"lightgrey" }}></div>
        </div>
         <div className='dayname'><p>Sun</p></div>
        </div>
        
    </div>
    </div>
  );
};

export default ActivityFeed;
