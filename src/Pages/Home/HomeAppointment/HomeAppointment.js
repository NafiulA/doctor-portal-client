import React from 'react';
import doctor from "../../../assets/images/doctor-small.png";
import appointment from "../../../assets/images/appointment.png";

const HomeAppointment = () => {
    return (
        <section style={{ backgroundImage: `url(${appointment})` }} className='mt-12'>
            <div className='w-11/12 md:w-4/5 mx-auto flex justify-center items-center'>
                <div className='w-1/2 mx-auto mt-[-150px] flex-1'>
                    <img src={doctor} alt="" />
                </div>
                <div className='flex-1'>
                    <h3 className='text-xl text-primary font-bold'>Apointment</h3>
                    <h2 className='text-white text-3xl py-3'>Make an appointment Today</h2>
                    <p className='text-white pb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default HomeAppointment;