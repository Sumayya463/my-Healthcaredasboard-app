import React from 'react';
import './CalendarView.css';
import AvatarIcon from './/..//..//../assets/icons8-avatar-64.png';
import {FaArrowLeft, FaArrowRight, FaPlus} from 'react-icons/fa';

const CalendarView = () => {
  return (
    <div className='right-sideContent'>
    <div className='header-right'>
        <img src={AvatarIcon}  />
        <button><FaPlus/></button>
    </div>
    <div className='calendar-heading'>
      <div className='month'><h4>October 2021</h4></div>
      <div className='arrows'><span style={{paddingRight:"20px", }}><FaArrowLeft/>  </span> <FaArrowRight/></div>
    </div>
    <div className='calendar-container'>
  {[
    { day: 'Mon', date: 25, slots: ['10:00', '11:00', '12:00'] },
    { day: 'Tue', date: 26, slots: ['08:00', '09:00', '10:00'] },
    { day: 'Wed', date: 27, slots: ['12:00', '---', '13:00'] },
    { day: 'Thu', date: 28, slots: ['10:00', '11:00', '---'] },
    { day: 'Fri', date: 29, slots: ['---', '14:00', '16:00'] },
    { day: 'Sat', date: 30, slots: ['12:00', '14:00', '15:00'] },
    { day: 'Sun', date: 31, slots: ['09:00', '10:00', '11:00'] },
  ].map((col, i) => (
    <div className='calendar-column' key={i}>
      <div className='calendar-day'>{col.day}</div>
      <div className='calendar-date'>{col.date}</div>
      {col.slots.map((slot, idx) => (
        <div className={`calendar-slot ${slot === '---' ? 'empty-slot' : ''}`} key={idx}>
          {slot}
        </div>
      ))}
    </div>
  ))}
</div>

    </div>
  )
}

export default CalendarView
