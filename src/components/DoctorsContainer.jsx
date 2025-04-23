import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';
import Button from './Ui/Button';

const DoctorsContainer = ({doctors}) => {
    const [displayDoctors, setDisplayDoctors]=useState([]);
    const [showAll,setShowAll]=useState(false)

   useEffect(()=>{
   if (showAll){
    setDisplayDoctors(doctors)
   }
   else{
    setDisplayDoctors(doctors.slice(0,6))
   }
   },[doctors,showAll])
    return (
        <div className='py-20 mx-auto w-11/12'>
            <div className='text-center my-4'>
                <h1 className='text-5xl font-bold mb-2 '>Our Best Doctors</h1>
                <p className='text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's <br /> a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

            </div>
          <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 '>
          {
            displayDoctors.map(doctor=> 
                <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>)
          }
           
          </div>

  
          <div className='text-center'>
         <Button onClick={()=>{ setShowAll(p=> !p)
            if (showAll) window.scroll(0,1000)
         }} label={showAll? 'View Less': 'View All Doctors'}></Button>
          </div>
        </div>
    );
};

export default DoctorsContainer;