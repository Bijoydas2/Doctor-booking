import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className=''>
        <Navbar></Navbar>
        <div className='  min-h-[calc(100vh-345px)]'>
      <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:16 xl:px-24'>
      <Outlet></Outlet>
      </div>
      </div>
        <Footer></Footer>
        </div>
    );
};

export default MainLayout;