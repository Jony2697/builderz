import React from 'react';
import boostImg from '../assets/boost.png';
import tickIcon from '../assets/tickIcon.png';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Boost = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
           
            <div className="flex flex-col lg:flex-row items-center gap-20 justify-around">

                {/* Image Section */}
                <div className="w-full lg:w-[620px]">
                    <img src={boostImg} alt="Boost" className="w-full h-auto" />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-[490px] space-y-6">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
                            Boost your agencies by choosing Ninja <br /> Developers
                        </h1>
                        <p className="text-[#02073E60] mt-4">
                            Create custom landing pages with Shades that convert more visitors than any website, no coding required.
                        </p>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <img src={tickIcon} alt="Tick" className="w-5 h-5 mt-1" />
                            <span className='text-[#02073E]'>Unlimited design possibility</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <img src={tickIcon} alt="Tick" className="w-5 h-5 mt-1" />
                            <span className='text-[#02073E]'>Completely responsive features</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <img src={tickIcon} alt="Tick" className="w-5 h-5 mt-1" />
                            <span className='text-[#02073E]'>Easy to customize plugins</span>
                        </li>
                    </ul>

                    <p className="text-[#8D448B] font-semibold cursor-pointer hover:underline inline-flex items-center">
                        Learn more
                        <MdKeyboardArrowRight className="text-xl " />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Boost;
