import React from 'react';
import Hero from '../components/Hero';
import DoctorsContainer from '../components/DoctorsContainer';
import { useLoaderData } from 'react-router';
import Service from '../components/Service';

const Home = () => {
    const data =useLoaderData();
    console.log(data)
    return (
        <div>
            <Hero></Hero>
            <DoctorsContainer doctors={data}></DoctorsContainer>
            <Service></Service>
        </div>
    );
};

export default Home;