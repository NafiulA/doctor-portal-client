import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero min-h-[700px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="w-full max-w-md rounded-lg shadow-2xl lg:ml-16" alt='Patient chair' />
                <div className='lg:mr-16'>
                    <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;