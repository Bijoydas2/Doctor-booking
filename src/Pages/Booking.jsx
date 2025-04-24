import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { getAppoinment, removeAppoinment } from '../Utils/Utils';
import DoctorCard from '../components/DoctorCard';
import Appoinment from '../components/Appoinment';
import Appoinments from '../components/Appoinments';
import Recharts from '../components/Recharts';
import Empty from '../components/Ui/Empty';

const Booking = () => {
   const [displayDoctors, setDisplayDoctors]=useState([]);
  useEffect(()=>{
   const savedDoctor= getAppoinment();
   setDisplayDoctors(savedDoctor)
   
  },[])

  const handleRemove= (id)=>{
    removeAppoinment(id)
    setDisplayDoctors(getAppoinment())
  }
  if (displayDoctors.length<1) return <Empty></Empty> 
    return (
      <div className='py-20 mx-auto w-11/12'>
      {
      displayDoctors.length > 0 && <Recharts doctors={displayDoctors} 
      />}
     <Appoinments></Appoinments>
    <div className=' mb-8 '>
    {
      displayDoctors.map(doctor=> 
          <Appoinment key={doctor.id} doctor={doctor} handleRemove={handleRemove}></Appoinment>)
    }
     
    </div>


  </div>
    );
};

export default Booking;