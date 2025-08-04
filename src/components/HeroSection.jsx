import React from 'react';
import heroPic from '../assets/hero.png';
import paypalImg from '../assets/paypal.png';
import googleImg from '../assets/google.png';
import dropboxImg from '../assets/dropbox.png';
import './Primary.css';

const HeroSection = () => {
    return (
        <div className='bg-[#F6F8FB]'>
            <div className="min-h-screen flex flex-col lg:flex-row-reverse items-center px-4 lg:px-20">

                {/* Image Section */}
                <div className="w-full lg:w-3/5 flex justify-center mb-10 lg:mb-0">
                    <img
                        src={heroPic}
                        alt="Hero"
                        className="w-full max-w-md lg:max-w-full rounded-lg object-contain"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-2/5">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Great software is built with amazing developers
                    </h1>
                    <p className="py-6 text-[#02073E]">
                        We help build and manage a team of world-class developers to bring your vision to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Subscribe newsletter"
                            className="bg-white px-4 py-2 border border-gray-300 rounded-md flex-1"
                        />
                        <button className="btn px-6 py-2 rounded-md text-white bg-[#8D448B]">
                            Subscribe
                        </button>
                    </div>

                    {/* Sponsors */}
                    <div className="mt-6 flex gap-2 items-center">
                        <p className="text-sm text-gray-500 mb-2">Sponsored by:</p>
                        <div className="flex items-center gap-6 flex-wrap">
                            <img src={paypalImg} alt="PayPal" className="h-6" />
                            <img src={googleImg} alt="Google" className="h-6" />
                            <img src={dropboxImg} alt="Dropbox" className="h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
