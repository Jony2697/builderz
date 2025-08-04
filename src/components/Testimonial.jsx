import React from 'react';
import firstPerson from '../assets/person1.png';
import secondPerson from '../assets/person2.png';
import thirdPerson from '../assets/person3.png';

const Testimonial = () => {
    return (
        <div className='max-w-4xl mx-auto mt-20 px-4'>
            {/* Header Text */}
            <div className='space-y-4 text-center'>
                <h4 className='text-[#8D448B] font-semibold text-sm md:text-base'>Customer Comments</h4>
                <h2 className='text-[#0F2137] font-semibold text-xl md:text-2xl'>Why customers love us</h2>
                <h1 className='text-2xl md:text-3xl mt-6 leading-relaxed text-gray-700'>
                    They are doing amazing job with hundred percent <br className="hidden md:block" />
                    customer satisfaction, Love their work and would like to work with them again.
                </h1>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-18'>
                {/* Person 1 */}
                <div className='flex flex-col items-center w-full md:w-auto'>
                    <div className="w-fit">
                        <div className="border-t-4 border-[#8D448B] w-full mb-4" />
                        <div className="flex items-center gap-4">
                            <img
                                src={firstPerson}
                                alt="Pierre Hackett"
                                className="w-16 h-16 object-cover rounded-full"
                            />
                            <div className="text-left">
                                <p className="font-semibold text-base">Pierre Hackett</p>
                                <p className="text-sm text-gray-500">VP of Engineering</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Person 2 */}
                <div className='flex flex-col items-center w-full md:w-auto'>
                    <div className="w-fit">
                        <div className="flex items-center gap-4">
                            <img
                                src={secondPerson}
                                alt="Natalia Sanz"
                                className="w-16 h-16 object-cover rounded-full"
                            />
                            <div className="text-left">
                                <p className="font-semibold text-base">Natalia Sanz</p>
                                <p className="text-sm text-gray-500">Head of Technology</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Person 3 */}
                <div className='flex flex-col items-center w-full md:w-auto'>
                    <div className="w-fit">
                        <div className="flex items-center gap-4">
                            <img
                                src={thirdPerson}
                                alt="Ece Akman"
                                className="w-16 h-16 object-cover rounded-full"
                            />
                            <div className="text-left">
                                <p className="font-semibold text-base">Ece Akman</p>
                                <p className="text-sm text-gray-500">Senior Marketer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
