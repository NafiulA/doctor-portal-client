import React from 'react';
import footer from "../../../assets/images/footer.png";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="pt-10 bg-cover bg-center" style={{ backgroundImage: `url(${footer})` }}>
            <div className='footer justify-items-center'>
                <div>
                    <span className="footer-title">Services</span>
                    <p className="link link-hover">Emergency Checkup</p>
                    <p className="link link-hover">Monthly Checkup</p>
                    <p className="link link-hover">Weekly Checkup</p>
                    <p className="link link-hover">Deep Checkup</p>
                </div>
                <div>
                    <span className="footer-title">Oral Health</span>
                    <p className="link link-hover">Fluoride Treatment</p>
                    <p className="link link-hover">Cavity Filling</p>
                    <p className="link link-hover">Teeth Whitening</p>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <p className="link link-hover">New York - 101010 Hudson</p>
                </div>
            </div>
            <div className='text-center pt-8 pb-6'>
                <p>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;