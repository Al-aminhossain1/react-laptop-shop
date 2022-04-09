import React from 'react';
import Hokes from '../Hokes/Hokes';
import HomePageReview from '../HomePageReview/HomePageReview';
const Home = () => {
    const [reviews, setReviews] = Hokes();
    const review = reviews.slice(0, 3);
    return (
        <div>
            <div className='md:flex mt-10'>
                <div className='mx-20'>
                    <h1 className='text-6xl font-bold'>Your Next Laptop<br /> <span className=' text-blue-500'>Your Best Laptop </span></h1>
                    <p className='text-xl mt-5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum adipisci recusandae animi fugiat, debitis dolore, ab quas hic ducimus distinctio dolores sunt inventore nemo beatae labore aperiam rerum vel quos.dolores sunt inventore nemo beatae labore aperiam rerum vel quos.</p>
                    <button className='my-10 bg-indigo-300 px-4 py-2 rounded font-semibold text-orange-800'>Live Demo</button>
                </div>
                <div className='mx-20'>
                    <img src="https://icdn.digitaltrends.com/image/digitaltrends/macbook-pro-2021-16.jpg" alt="" />
                </div>
            </div>
            <div className=' md:grid grid-cols-3 gap-5 mt-10'>
                {
                    review.slice(0, 3).map(review => <HomePageReview
                        review={review}
                        key={review.id}>
                    </HomePageReview>)
                }
            </div>
        </div>
    );
};

export default Home;