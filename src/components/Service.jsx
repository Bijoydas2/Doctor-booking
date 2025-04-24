import React from 'react';
import DoctorImg from '../assets/success-doctor.png'
import PatientsImg from '../assets/success-patients.png'
import ReviewImg from '../assets/success-review.png'
import StaffsImg from '../assets/success-staffs.png'
import CountUp from 'react-countup';

const Service = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <h1 className='text-3xl font-bold text-center'>We Provide Best Medical Services</h1>
            <p className='text-gray-500 mb-4 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 '>
            <div className=' bg-base-100  shadow-sm p-10 space-y-2'>
                <img src={DoctorImg} className='w-10' alt="" />
                <h1 className='text-4xl font-bold'><CountUp start={0} duration={5} end={199} />+</h1>
                <p className='text-base-500'>Total Doctors</p>
            </div>
            <div className=' bg-base-100  shadow-sm p-10 space-y-2'>
                <img src={ReviewImg} className='w-10' alt="" />
                <h1 className='text-4xl font-bold'><CountUp start={0} duration={5} end={467} />+</h1>
                <p className='text-base-500'>Total Reviews</p>
            </div>
            <div className=' bg-base-100  shadow-sm p-10 space-y-2'>
                <img src={PatientsImg} className='w-10' alt="" />
                <h1 className='text-4xl font-bold'><CountUp start={0} duration={5} end={1900} />+</h1>
                <p className='text-base-500'>Patients</p>
            </div>
            <div className=' bg-base-100  shadow-sm p-10 space-y-2'>
                <img src={StaffsImg} className='w-10' alt="" />
                <h1 className='text-4xl font-bold'><CountUp start={0} duration={5} end={300} />+</h1>
                <p className='text-base-500'>Total Stuffs</p>
            </div>
         
           
        </div>
        </div>
    );
};

export default Service;