import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaRegRegistered } from "react-icons/fa";
import { PiWarningCircleDuotone } from "react-icons/pi";
import { addAppoinment } from '../Utils/Utils';

const DoctorDetails = () => {
    const  data = useLoaderData();
    const {id} = useParams();
    const singleDoctor = data.find(doctor=> doctor.id === parseInt(id))
    const {
        name,
        education,
        workingAt,
        registrationNumber,
        consultationFee,
        description,
        image,
        availability

    } =singleDoctor;

    const handleAppoinment = ()=>{
       addAppoinment(singleDoctor)
    }
    return (
        <div className=' bg-gray-100'>
           <div className='w-11/12 mx-auto py-10 '>

           <div className='bg-white  shadow-sm p-10  rounded-xl my-8'>
            <h1 className='text-3xl font-bold text-center'>Doctor’s Profile Details</h1>
            <p className='text-gray-500 mb-4 text-center'>{description}</p>
            </div>

           <div className='bg-white  shadow-sm lg:p-20 p-4 lg:flex  gap-4 rounded-xl my-8'>
            <div>
              <img src={image} className='rounded-xl w-[250px] h-[300px] ' alt="" />
            </div>
            <div>
                <h1 className='text-3xl font-bold mt-2 lg:mt-0'>{name}</h1>
                <p className='text-gray-500'>{education}</p>
                <p className='text-gray-500 mt-2'>Working At</p>
                <h2 className='text-xl font-bold'>{workingAt}</h2>
                 <div className='border-t-1 border-dashed text-stone-300 my-4'></div>
                    <div className='flex  gap-2  items-center'>
                    <FaRegRegistered size={18}/>
                    <p> Reg No:{registrationNumber}</p>
                    </div>
                    <div className='border-t-1 border-dashed text-stone-300 my-4 '></div>
                    <div className='flex gap-1 lg:gap-4 items-center'>
                        <h2 className='font-bold'>Availability</h2>
                        <button className="btn btn-outline btn-warning rounded-4xl">{availability}</button>
                        
                        
                    </div>
                    <h2 className='font-bold mt-2'>Consultation Fee: <span className='text-[#176AE5]'>Taka {consultationFee}</span></h2>
                    
            </div>
            <div>

            </div>
            </div>

           <div className='bg-white  shadow-sm p-10  rounded-xl my-8'>
              <h1 className='text-2xl font-bold'>Book an Appointment</h1>
              <div className='border-t-1 border-dashed text-stone-300 my-2 '></div>
              <div className='flex justify-between'>
              <p className='font-bold'>Availability</p>
              <button className="btn   rounded-4xl bg-green-200 font-bold text-[#09982F]">Doctor Available Today</button>

              </div>
              <div className='border-t-1 border-dashed text-stone-300  my-2'></div>
              <p className='text-[#FFA000] bg-amber-100 px-2 rounded-xl text-sm flex items-center gap-2'><PiWarningCircleDuotone /> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>

              <button  onClick={handleAppoinment} className='btn btn-primary rounded-4xl w-full my-4'>Book Appointment Now</button>
            </div>
           


           </div>
            
        </div>
    );
};

export default DoctorDetails;