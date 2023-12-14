import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'

const Navbar = () => {
  const{b}= useParams()
  console.log(b)
  return (
    <nav className='navbar'> 
      <Link to="/">
        <img id="home-icon"src='https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg'/>
      </Link>
    </nav>
  )
}

export default Navbar