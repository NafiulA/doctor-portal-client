import React from 'react';

const InfoCard = ({ img, cardTitle, cardInfo, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-accent shadow-xl ${bgClass}`}>
            <figure><img className='pl-5' src={img} alt="Info" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardInfo}</p>
            </div>
        </div>
    );
};

export default InfoCard;