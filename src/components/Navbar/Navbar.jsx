import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/car.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [menu,setMenu] = useState("space_booking");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" height="30px" />
            <p>Park'kar</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("space_booking")}}><Link style={{textDecoration: 'none'}} to="/" >Find Parking</Link>{menu==="space_booking"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("space_listing")}}><Link style={{textDecoration: 'none'}} to="/creating">List Your Space</Link>{menu==="space_listing"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login">
            <Link to="/login"><button>Login</button></Link>
        </div>
    </div>
  )
}

export default Navbar