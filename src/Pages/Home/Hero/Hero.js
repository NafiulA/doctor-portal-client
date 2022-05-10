import React from 'react';
import chair from "../../../assets/images/chair.png";

const Hero = () => {
    return (
        <div>
            <div className='bg-cover bg-no-repeat bg-left' style={{ backgroundImage: `url(${chair})` }} >
                <div className="hero min-h-screen bg-gradient-to-t md:bg-gradient-to-l from-white to-[#ffffffa9]">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={chair} className="w-full max-w-md rounded-lg shadow-2xl lg:ml-5" alt='' />
                        <div>
                            <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
                            <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;