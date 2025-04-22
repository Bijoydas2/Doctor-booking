import React from 'react';
import Button from './Ui/Button';
import BannerImg from '../assets/banner-img-1.png'

const Hero = () => {
    return (
        <div className='lg:mt-14 mt-8 w-11/12 mx-auto md:p-10 lg:px-10 border-2 border-[#FFFFFF] bg-gray-100 rounded-2xl shadow'>
            
             <div className='text-center space-y-4'>
            <h1 className='font-bold lg:text-5xl text-3xl  text-gray-900 '>Dependable Care, Backed by Trusted <br />Professionals.</h1>
            <p className='text-gray-500'>
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
            <form  className='flex flex-col md:flex-row  justify-center items-center mb-4 md:px-24'>
                <input 
             
              
                type="text" 
                placeholder='Search Phone by Name' 
                className='bg-white border-gray-300 rounded-xl shadow-md w-2/3 h-12 px-4 mb-3 focus:outline-none focus:shadow-outline mr-2 md:mb-0'/>
                
           <Button  label='Search Now'/>
            </form>
         
        </div>
        <div className='grid grid-cols-2 gap-4 '>
          <img 
            className='w-full '
             src={BannerImg} 
             alt="banner Image" />
            <img 
            className='w-full '
             src={BannerImg} 
             alt="banner Image" />

          </div>
        </div>
    );
};

export default Hero;