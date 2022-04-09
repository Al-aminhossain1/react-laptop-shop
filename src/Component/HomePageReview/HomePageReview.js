import React from 'react';

const HomePageReview = (props) => {
    const { name, review, rimeng } = props.review;
    return (
        <div className=' border-4 bg-teal-100 p-5 rounded'>
            <h1 className='text-2xl'>Name:{name}</h1>
            <p> <span className='text-xl font-semibold'>Review:</span>{review}</p>
            <h3> <span className='font-bold'>Riming:</span> <span className=' text-red-300'>{rimeng}</span></h3>
        </div>
    );
};

export default HomePageReview;