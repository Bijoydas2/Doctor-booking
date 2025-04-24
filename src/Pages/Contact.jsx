import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router';
import Button from '../components/Ui/Button';

const Contact = () => {
    return (
        <div className='py-24 text-center'>
        <h1 className='mb-3 text-3xl lg:text-6xl font-bold'>404 - Page Not Found</h1>
        <p className='mb-8 text-xl  text-gray-900 md:text-2xl'>
          Oops! The pahe you're looking for doesn't exist
        </p>
        <Link to='/'>
          <Button label='Go Back Home' />
        </Link>
      </div>
    );
};

export default Contact;