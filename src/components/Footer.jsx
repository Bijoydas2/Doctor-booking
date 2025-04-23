import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../assets/logo (1).png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal bg-slate-100 shadow-2xl footer-center bg-white text-base-content rounded p-10">
        <div className='flex items-center gap-2'>
          <img src={Logo} className='w-10' alt="" />
         <Link to='/' className="font-bold text-2xl">Phudu</Link>
         </div>
      
          <ul className='grid grid-flow-col gap-4'> 
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
        
        <nav>
          <div className="grid grid-flow-col gap-4">

           <Link to='https://www.facebook.com/'><FaFacebook size={25} /></Link> 
           <Link to='https://x.com/'><FaTwitter size={25}  /></Link> 
           <Link to='https://www.instagram.com/accounts/login/?hl=en'><FaInstagram  size={25}/></Link> 
           <Link to='https://www.youtube.com/'><FaYoutube size={25}/></Link> 
           
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    );
};

export default Footer;