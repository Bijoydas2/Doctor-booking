import React from 'react';

const Appoinment = ({doctor}) => {
    const {name,education,consultationFee}=doctor
    return (
        <div>
          
            <div className='bg-white  shadow-sm p-10  rounded-xl my-8'>
                        <div className='flex items-center justify-between'>
                        <div>
                          <h1 className='text-2xl font-bold'>{name}</h1>
                          <p className='text-gray-500'>{education}</p>
                          </div>
                          <div className='flex justify-between'>
                         
                          <p>Appoinment Fee: {consultationFee}</p>
            
                          </div>
                        </div>
                          <div className='border-t-1 border-dashed text-stone-300 my-2 '></div>
                         
                         
            
                          <button   className='btn text-red-600 border-red-400 rounded-4xl w-full my-4 font-bold'>Cancel Appointment </button>
                        </div>
        </div>
    );
}; 

export default Appoinment;