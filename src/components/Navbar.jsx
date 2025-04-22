import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../assets/logo (1).png'

const Navbar = () => {
    return (
        <div className="navbar p-0 lg:px-20 lg:p-2 bg-base-100 shadow-sm   mx-auto px-8 md:px-10 lg:px:16 xl:px-24">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="cursor-pointer mr-2 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                 <li>
                <NavLink className={({isActive})=> isActive? 'text-white bg-amber-300': ''} to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=> isActive? 'text-white bg-amber-300': ''} to='/booking'>My Booking</NavLink>
            </li>
            <li className='relative'>
              <NavLink className={({isActive})=> isActive? 'text-white bg-amber-300': ''} to='/blogs'>Blogs</NavLink>
              </li>
            <li><NavLink className={({isActive})=> isActive? 'text-white bg-amber-300': ''} to='/contact'>My Contact</NavLink></li>
            </ul>
          </div>
         <div className='flex items-center gap-2'>
          <img src={Logo} className='w-10' alt="" />
         <Link to='/' className="font-bold text-2xl">Phudu</Link>
         </div>
        </div>
        
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li>
                <NavLink className={({isActive})=> isActive? 'text-white bg-amber-300': ''} to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=> isActive? 'text-white bg-amber-300': ''} to='/booking'>My Booking</NavLink>
            </li>
            <li className='relative'>
              <NavLink className={({isActive})=> isActive? 'text-white bg-amber-300': ''} to='/blogs'>Blogs</NavLink>
              </li>
            <li><NavLink className={({isActive})=> isActive? 'text-white bg-amber-300': ''} to='/contact'>My Contact</NavLink></li>
          </ul>
         
        </div>
        <div className="navbar-end hidden lg:flex">
        <button className="btn btn-primary rounded-4xl">Emergency</button>
        </div>
      </div>
    );
};

export default Navbar;