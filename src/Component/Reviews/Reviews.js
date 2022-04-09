import React from 'react';
import Hokes from '../Hokes/Hokes';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = Hokes();
    console.log(reviews)
    return (
        <div className=' md:grid grid-cols-3 gap-5 mt-10'>
            {
                reviews.map(review => <Review
                    review={review}
                    key={review.id}>
                </Review>)
            }
            <h1>This is Reviews</h1>
        </div>
    );
};

export default Reviews;