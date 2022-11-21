import React from 'react';
import "./Topbar.css"
import icon1 from "./icon.jpg"

import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className='top'>
        <div className='topleft'>
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
        </div>
        <div className='topcentre'>
        <ul className='topList'>
            <li className='topListItems'>
              <Link className='link' to="/">HOME</Link>
            </li>

            <li className='topListItems'>
              <Link className='link' to="/write">WRITE</Link>
            </li>
  
        </ul>
        </div>
        <div className='topright'>
        <img className ="topImg" src={icon1} alt=""/>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      
    </div>
  );
}
