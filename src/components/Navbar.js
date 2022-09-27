import React, { useEffect } from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder'
import {useState } from 'react';
import '../App.css';

function Navbar(props) {
  const [expandNavbar, setExpandNavbar]=useState(false);
  const location =useLocation();

  useEffect(() => {
    setExpandNavbar(false);

  }, [location]);
   
  return (
    <div className='navbar' id={expandNavbar ? "open": "close"} >
      
       <div className='toggleButton'>
        <button onClick={()=>{setExpandNavbar((prev)=>!prev)}}><ReorderIcon /> </button>
       </div>
        
       <div className='logo'>
         <p>Portofolio</p>
       </div>

       <div className='links'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/contact">Contact</NavLink>
       </div>
       </div>
        
    
  )
}

export default Navbar