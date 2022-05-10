import React from 'react';

const ReviewCard = ({ review }) => {

    return (
        <div className="card w-4/5 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.review}</p>
                <div className="flex items-center">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl'>{review.name}</h3>
                        <p className='text-lg'>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;