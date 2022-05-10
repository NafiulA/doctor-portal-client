import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='w-4/5 py-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hours" cardInfo="From 10:00 AM to 8:00 PM" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Visit our Location" cardInfo="Brooklyn, NY 10036, United States" bgClass="bg-accent" img={marker}></InfoCard>
            <InfoCard cardTitle="Contacts Us" cardInfo="+000 123 456789" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;