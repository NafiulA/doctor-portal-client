import React from 'react';
import appointment from "../../../assets/images/appointment.png";

const ContactSec = () => {
    return (
        <div style={{ backgroundImage: `url(${appointment})` }} className='text-center py-16'>
            <h3 className='text-xl text-primary font-bold'>Contact Us</h3>
            <h2 className='text-3xl text-white'>Stay Connected With Us</h2>
            <form className='flex flex-col'>
                <input type="text" placeholder="Email Address" className="inline-block input mx-auto my-5 w-full max-w-xs" />
                <input type="text" placeholder="Subject" className="inline-block input mb-5 w-full mx-auto max-w-xs" />
                <textarea className="inline-block textarea  mb-8 w-full mx-auto max-w-xs" placeholder="Your Message..."></textarea>
                <input type="submit" className="bg-primary text-white w-24 py-2 mx-auto rounded-lg bg-gradient-to-r from-secondary to-primary" value="Submit" />
            </form>
        </div>
    );
};

export default ContactSec;