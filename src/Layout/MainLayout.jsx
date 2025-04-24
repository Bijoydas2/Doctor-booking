import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner'; 
import { Outlet, useNavigation} from 'react-router';

const MainLayout = () => {
    const navigation = useNavigation();  

    return (
        <div className=''>
            <Navbar />
            {navigation.state === 'loading' && <Spinner />}
            <div className='min-h-[calc(100vh-345px)]'>
                <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:16 xl:px-24'>
                   <Outlet/>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
