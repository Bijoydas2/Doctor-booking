import React from 'react';
import { Link } from 'react-router';
import Button from '../components/Ui/Button';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
    return (
        <div >
        <Navbar/>

<div className='py-24 text-center'>
        <h1 className='mb-3 text-3xl lg:text-6xl font-bold'>No Doctor Found</h1>
        <p className='mb-8 text-xl  text-gray-500 md:text-2xl'>
          No Doctor Found with this registration No-
        </p>
        
        <Link to='/'>
          <Button label='View All Doctor' />
        </Link>
      </div>
      </div>
    );
};

export default ErrorPage;