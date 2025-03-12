import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className=' flex logo justify-between items-center'>
       <div className='m-4'>
        <img src={logo} alt="" />
       </div>

       <div className='flex gap-3'>
            <Link className='w-28 block text-center' to="/Home" >Home</Link>
            <Link className='w-28 block text-center' to="/About">About</Link>
            <Link className='w-28 block text-center' to="/Orders">Orders</Link>
            <Link className='w-28 block text-center' to="/Contact">Contact Us</Link>
       </div>
       
       <div className='header-left'>
            {/* <div className='cart'>
                    <FaShoppingCart />
            </div> */}
            <div className='login flex'>
                <a href="/Register" className='w-16 block text-center'>Register</a>
                <a href="/Login" className='w-20 block text-center'>Login</a>
            </div>
       </div>
    </div>
  )
}

export default Header
