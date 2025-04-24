import React from 'react';

const Blog = ({blog}) => {
    return (
        <div className='bg-white  shadow-sm p-10 space-y-4 rounded-xl my-8 '>
        <h1 className='text-3xl font-bold '>{blog.id}.{blog.question}</h1>
        <p className='text-gray-500 mb-4 '>Ans: {blog.answer}</p>
        <p>Date: {blog.date}</p>
        </div>
    );
};

export default Blog;