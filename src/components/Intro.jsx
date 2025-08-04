import React from 'react';
import groupTalk from '../assets/Mask Group.png';
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoPlay } from "react-icons/io5";

const Intro = () => {
    return (
        <div className='max-w-6xl mx-auto px-4 py-12'>
            {/* Top Text Section */}
            <div className='text-center space-y-4 mb-8'>
                <h1 className='text-3xl md:text-4xl font-semibold'>
                    Leading companies trust us <br /> to develop software
                </h1>
                <p className='text-gray-600'>
                    We believe it’s important for everyone to have access to software <br />
                    especially when it comes to digital learning be navigate.
                </p>
                <a
                    href="#"
                    className="inline-flex items-center text-[#8D448B] font-semibold hover:underline"
                >
                    Explore Details
                    <MdKeyboardArrowRight className="text-xl ml-1" />
                </a>
            </div>

           
            <div className="relative flex justify-center">
                <img
                    src={groupTalk}
                    alt="Group Talk"
                    className="w-full max-w-[1110px] rounded-md object-cover"
                />
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <IoPlay className="text-[#8D448B] text-3xl md:text-4xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
