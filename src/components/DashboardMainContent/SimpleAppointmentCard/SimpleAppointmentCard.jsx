import React from 'react';
import './SimpleAppointmenCard.css';
import { FaTooth, FaWalking } from 'react-icons/fa';



const SimpleAppointmentCard = () => {
  return (
    <div className='appointments'>
      <div className='dentist'>
        <h4>Dentist <FaTooth className='icons'/></h4>
        <p>09:00 - 11:00</p>
        <p>Dr. Cameron  Williamson</p>
      </div>
      <div className='physio'>
        <h4>Physiotherapy Appointment<FaWalking className='icons'/></h4>
        <p>11:00 - 12:00</p>
        <p>Dr. Kevin Djones</p>
      </div>
    </div>
  )
}

export default SimpleAppointmentCard
