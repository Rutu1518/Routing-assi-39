import React from 'react'
import "./navbar.css";

import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='Navbar-Container'>
      <Link to ='/' className='nav-menu'>Home</Link>
      <Link to ='/about' className='nav-menu'>About</Link>
      <Link to ='/contact' className='nav-menu'>Contact</Link>
    </div>
  )
}

export default Navbar
