import React from 'react'
import './AnatomySection.css';
import humanIcon from './/..//..//../assets/image.png';
import { FaHeart, FaSearchPlus, FaWalking } from 'react-icons/fa';

const AnatomySection = () => {
  return (
    <div className='human-anatomy'>
      <img src={humanIcon} className='human-img'/>
      <FaSearchPlus className='zoom'/>
      <div className="label-heart"> <FaHeart/>Healthy Heart</div>
      <div className="label-leg"><FaWalking /> Healthy Leg</div>
      
    </div>
  )
}

export default AnatomySection;
