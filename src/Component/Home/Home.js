import React from 'react';

const Home = () => {
    return (
        <div className='md:flex mt-10'>
            <div className='mx-20'>
                <h1 className='text-6xl font-bold'>Your Next Laptop<br /> <span className=' text-blue-500'>Your Best Laptop </span></h1>
                <p className='text-xl mt-5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum adipisci recusandae animi fugiat, debitis dolore, ab quas hic ducimus distinctio dolores sunt inventore nemo beatae labore aperiam rerum vel quos.dolores sunt inventore nemo beatae labore aperiam rerum vel quos.</p>
                <button className='my-20 bg-indigo-300 px-4 py-2 rounded font-semibold text-orange-800'>Live Demo</button>
            </div>
            <div className='px-20'>
                <img src="https://icdn.digitaltrends.com/image/digitaltrends/macbook-pro-2021-16.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;