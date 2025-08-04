import React from 'react';
import blogImg1 from '../assets/blog1.jpg';
import blogImg2 from '../assets/blog2.jpg';
import blogImg3 from '../assets/blog3.jpg';
import './Primary.css';
import { FaRegCommentDots } from 'react-icons/fa';
import arrow from '../assets/Group 48.png';
import rectangle from '../assets/Group 46.png';
import rectangleDown from '../assets/Group 47.png';

const Blog = () => {
    return (
        <div className='relative'>
            {/* Blog Section */}
            <div className='bg-[#F8FAFC] mt-20 pb-42'>
                <div className='max-w-7xl mx-auto space-y-6 p-4'>
                    <div className='text-center space-y-3 pt-8 md:pt-12'>
                        <p className='text-[#8D448B] font-semibold'>Quality features</p>
                        <h2 className='font-semibold text-[#0F2137] text-2xl md:text-3xl'>
                            Tutorials that people love most
                        </h2>
                    </div>

                    {/* Blog Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                        {[{ img: blogImg1, comments: 22, title: 'How to work with prototype design with adobe xd featuring tools' },
                        { img: blogImg2, comments: 15, title: 'Create multiple artboard by using figma prototyping development' },
                        { img: blogImg3, comments: 18, title: 'Convert your web layout theming easily with sketch zeplin extension' }].map((item, idx) => (
                            <div key={idx} className='shadow-xl rounded-xl overflow-hidden bg-white'>
                                <img src={item.img} className='w-full h-48 object-cover' alt="work img" />
                                <div className='space-y-3 p-3'>
                                    <h3 className='font-semibold mt-3'>{item.title}</h3>
                                    <p className="flex items-center gap-2 text-gray-600 text-sm">
                                        <FaRegCommentDots /> {item.comments} Comments
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className='absolute left-1/2 -translate-x-1/2 -bottom-50 md:-bottom-30 lg:-bottom-20 w-[95%] md:w-[85%]'>
                <div className='bg-[#8D448B] rounded-xl flex flex-col md:flex-row items-center justify-around px-6 py-8 gap-6 shadow-lg'>

                    {/* Left: Text + Arrow */}
                    <div className='flex flex-col md:flex-row items-center gap-4 text-center md:text-left'>
                        <div className='text-white text-2xl md:text-3xl font-semibold leading-snug'>
                            Hire the world’s best developers <br /> and designers around!
                        </div>
                        
                    </div>
                        <div>
                            <img src={arrow} alt="arrow" className='w-32 md:w-44' />
                        </div>
                    {/* Right: Button with rectangles */}
                    <div className='flex flex-col items-center gap-2'>
                        <img src={rectangle} alt="top-decor" className='w-10' />
                        <button className='bg-white text-[#8D448B] px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition'>
                            Hire Developers
                        </button>
                        <img src={rectangleDown} alt="bottom-decor" className='w-10' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
