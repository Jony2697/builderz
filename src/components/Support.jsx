import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import supportImg from '../assets/support.png';

const Support = () => {
    return (
        <div className='max-w-[1200px] mx-auto px-4 py-12 mt-14'>
            <div className='flex flex-col md:flex-row items-center gap-10 justify-around'>
                {/* Text Section */}
                <div className='flex-1 space-y-5'>
                    <h1 className='text-2xl md:text-3xl font-semibold text-[#0F2137]'>
                        Free Customer Support to ensure what you like to expect
                    </h1>
                    <p className='text-[#343D48]'>
                        We offer a risk-free trial period of up to two weeks. You will only have to pay if you are happy with the developer and wish to continue. If you are unsatisfied, we’ll refund payment or fix issues on our dime period customers.
                    </p>
                    <p className='text-[#02073E60]'>
                        If you are happy with the developer and wish to continue. If you are unsatisfied, we’ll refund payment or fix issues.
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center text-[#8D448B] font-semibold hover:underline"
                    >
                        Learn more
                        <MdKeyboardArrowRight className="text-xl " />
                    </a>
                </div>

                {/* Image Section */}
                <div className='flex-1'>
                    <img
                        src={supportImg}
                        alt="Customer Support"
                        className="w-full max-w-md mx-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Support;
