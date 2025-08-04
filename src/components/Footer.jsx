import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className="mt-50 md:mt-30 lg:mt-25">
            <footer className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Logo and Text */}
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Dev Logo" className="w-8 h-8" />
                    <p className="text-sm text-gray-500">Copyright by 2019 Dev, Inc</p>
                </div>

                {/* Footer Links */}
                <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-700">
                    <a href="#" className="hover:text-[#8D448B] transition">Home</a>
                    <a href="#" className="hover:text-[#8D448B] transition">Adversite</a>
                    <a href="#" className="hover:text-[#8D448B] transition">Support</a>
                    <a href="#" className="hover:text-[#8D448B] transition">Marketing</a>
                    <a href="#" className="hover:text-[#8D448B] transition">FAQ</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
