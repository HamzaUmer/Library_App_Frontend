import React from 'react'
import "../components/css/navbar.css"
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
        <Link to='/' className='h'><h1 className='title' >Library Application</h1> </Link>
    </nav>
    </>
  )
}

export default Navbar