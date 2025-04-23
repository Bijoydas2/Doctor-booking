import React from 'react';
import DoctorCard from './DoctorCard';
import Button from './Ui/Button';

const DoctorsContainer = ({doctors}) => {
    return (
        <div className='py-20 mx-auto w-11/12'>
            <div className='text-center my-4'>
                <h1 className='text-5xl font-bold mb-2 '>Our Best Doctors</h1>
                <p className='text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's <br /> a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

            </div>
          <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 '>
          {
            doctors.map(doctor=> 
                <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>)
          }
           
          </div>

  
          <div className='text-center'>
         <Button label='View All Doctor'></Button>
          </div>
        </div>
    );
};

export default DoctorsContainer;