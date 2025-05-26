import React from 'react';
import { FaBell, FaSearch} from 'react-icons/fa';
import "./Header.css";


const Header = () => {
  return (
    
    <div className='search-bar'>
      <FaSearch className='search-icon'/>
    <input type="text" placeholder='Search' disabled></input>
     <FaBell className='bell-icon'/>
    </div>
   
  )
}

export default Header;
