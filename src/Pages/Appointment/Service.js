import React from 'react';

const Service = ({ service, setTreatment }) => {
    return (
        <div className="card w-4/5 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary justify-center">{service.name}</h2>
                <p>{
                    service.slots.length ?
                        <span>{service.available[0]}</span>
                        : <span className='text-red-500'>Sorry! Try another date!</span>
                }</p>
                <p>{service.available.length} {service.available.length > 1 ? "spaces" : "space"} available.</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        onClick={() => { setTreatment(service) }} disabled={service.available.length === 0} className="btn modal-button btn-secondary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;