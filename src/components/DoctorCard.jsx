import React from 'react';
import { FaRegRegistered } from "react-icons/fa";
import { Link } from 'react-router';

const DoctorCard = ({doctor}) => {
    const {name,image,education,registrationNumber} =doctor;
    return (
        <div className="card bg-base-100  shadow-sm p-6">
  <figure>
    <img
      className='w-[250px] h-[250px] rounded-4xl'
      
      src={image}
      alt="Dr Image" />
  </figure>
  <div className="card-body">
    <div className='flex gap-2 '>
    <button className="btn btn-outline btn-accent rounded-4xl bg-green-200 text-[#09982F]">Available</button>
    <button className="btn btn-outline btn-info rounded-4xl text-[#176AE5] bg-blue-200">5+ Years Experience</button>
    </div>
    <h2 className="card-title">{name}</h2>
    <p>{education}</p>
    <div className='border-t-1 border-dashed text-stone-300'></div>
    <div className='flex gap-2  items-center'>
    <FaRegRegistered size={18}/>
    <p> Reg No:{registrationNumber}</p>
    </div>
    <div className="card-actions ">
   <Link> <button className="btn btn-outline btn-info w-full rounded-4xl">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default DoctorCard;