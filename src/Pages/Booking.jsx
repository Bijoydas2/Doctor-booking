import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { getAppoinment } from '../Utils/Utils';
import DoctorCard from '../components/DoctorCard';
import Appoinment from '../components/Appoinment';

const Booking = () => {
   const [displayDoctors, setDisplayDoctors]=useState([]);
  useEffect(()=>{
   const savedDoctor= getAppoinment();
   setDisplayDoctors(savedDoctor)
   
  },[])
    return (
      <div className='py-20 mx-auto w-11/12'>
      <div className='text-center my-4'>
          <h1 className='text-5xl font-bold mb-2 '>Our Best Doctors</h1>
          <p className='text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's <br /> a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

      </div>
    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 '>
    {
      displayDoctors.map(doctor=> 
          <Appoinment key={doctor.id} doctor={doctor}></Appoinment>)
    }
     
    </div>


  </div>
    );
};

export default Booking;