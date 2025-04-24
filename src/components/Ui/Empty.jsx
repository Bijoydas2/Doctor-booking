import React from 'react';
import { Link } from 'react-router';
import Button from './Button';

const Empty = () => {
    return (
        <div className='py-24 text-center'>
      <h1 className='mb-3 text-3xl lg:text-6xl font-bold'>You Have not Booked any Appoinment yet</h1>
      <p className='mb-8 text-xl  text-gray-900 md:text-2xl'>
        Out platform connects you with veified,experienced doctors across various specialties- all at your convenience
      </p>
      <Link to='/'>
        <Button label='Book an Appoinment' />
      </Link>
    </div>
    );
};

export default Empty;