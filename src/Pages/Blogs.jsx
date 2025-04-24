import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../components/Blog';

const Blogs = () => {
    const blogs =useLoaderData();
    return (
        <div className='w-11/12 mx-auto'>
        <div className='space-y-4 p-10  rounded-xl my-8'>
         <h1 className='text-3xl font-bold text-center'>Blogs</h1>
         <p cl className='text-gray-500 mb-4 text-center'>Let's explore some basic concept that will make you a good developer</p>
        
        </div >
         <div className='w-11/12 mx-auto'>
         {
           blogs.map(blog=> <Blog blog={blog}></Blog> )
          }
         </div>
        </div>
    );
};

export default Blogs;



