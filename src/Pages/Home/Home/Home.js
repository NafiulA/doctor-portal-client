import React from 'react';
import ServiceBanner from '../ServiceBanner/ServiceBanner';
import Hero from '../Hero/Hero';
import Info from '../Info/Info';
import Services from '../Services/Services';
import HomeAppointment from '../HomeAppointment/HomeAppointment';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Info></Info>
            <Services></Services>
            <ServiceBanner></ServiceBanner>
            <HomeAppointment></HomeAppointment>
        </div>
    );
};

export default Home;