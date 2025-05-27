import React from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaHistory, FaCalendarAlt, FaUserMd, FaChartBar, FaCog, FaComments , FaLifeRing} from 'react-icons/fa';


const Sidebar = () => {
  return (
    <div className='Sidebar'>
     <div className='logo-name'><span>Health</span>care.</div>
     <nav className='side-nav'>
      <h4 className='ul-heading'>General</h4>
     <ul className='nav-links'>
  
    <li id="dashboard"><FaTachometerAlt className='icon'/>Dashboard</li>    
    <li><FaHistory className='icon'/>History</li>    
    <li><FaCalendarAlt className='icon'/>Calendar</li>    
    <li><FaUserMd className='icon'/>Appointments</li>    
    <li><FaChartBar className='icon'/>Statistics</li>    
    <li id="tools">Tools</li>    
    <li><FaComments className='icon'/>Chat</li>
    <li><FaLifeRing className='icon'/>Support</li>
    <li><FaCog className='icon'/>Setting</li>          
    </ul>     
    
     </nav>
   
    </div>
  )
}

export default Sidebar;

