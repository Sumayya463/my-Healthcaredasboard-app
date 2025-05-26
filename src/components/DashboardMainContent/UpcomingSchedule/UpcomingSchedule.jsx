import React from 'react';
import './UpcomingSchedule.css';
import { RiStethoscopeLine } from 'react-icons/ri';
import { FaEye, FaHeart } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';

const UpcomingSchedule = () => {
  return (
    <div className='schedule-heading'><h2>The Upcoming Schedule</h2>
    <div className='thurs'>
        <div className='day1'><h4>On Thursday</h4></div>
        <div className='appt-div'>
            <div className='appt1'>
                <p>Health checkup complete <RiStethoscopeLine className='sch-icon'/></p>
                <p>11:00 AM</p>
            </div>
            <div className='appt2'>
                <p>Opthalmologist <FaEye className='sch-icon'/></p>
                <p>14:00 AM</p>
            </div>
        </div>
    </div>
    <div className='sat'>
        <div className='day2'><h4>On Saturday</h4></div>
        <div className='appt-divs'>
            <div className='appt1'>
                <p>Cardiologist <FaHeart className='sch-icons'/></p>
                <p>12:00 AM</p>
            </div>
            <div className='appt2'>
                <p>Neurologist <FaUserDoctor className='sch-icons'/></p>
                <p>16:00 PM</p>
            </div>
        </div>
    </div>
    </div>
)
}

export default UpcomingSchedule

