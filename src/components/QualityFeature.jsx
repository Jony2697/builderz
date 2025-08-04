import React from 'react';
import frame from '../assets/Frame.png';
import frame1 from '../assets/Frame (1).png';
import frame2 from '../assets/Frame (2).png';
import frame3 from '../assets/Frame (3).png';
import './Primary.css';

const QualityFeature = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-2">
                <h4 className="text-[#8D448B] font-semibold text-sm md:text-base">Quality Features</h4>
                <h1 className="text-2xl md:text-3xl font-semibold">Meet exciting feature of app</h1>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                {/* Feature Item 1 */}
                <div className="space-y-4 px-4">
                    <img src={frame} alt="Unlimited Customization" className="mx-auto h-20 w-20" />
                    <h4 className="font-semibold text-lg">Unlimited Customization</h4>
                    <p className="text-gray-600 text-sm">
                        Get your blood tests delivered at home collect a sample from the your blood tests.
                    </p>
                </div>

                {/* Feature Item 2 */}
                <div className="space-y-4 px-4">
                    <img src={frame1} alt="Vector shape & resizable" className="mx-auto h-20 w-20" />
                    <h4 className="font-semibold text-lg">Vector shape & resizable</h4>
                    <p className="text-gray-600 text-sm">
                        Get your blood tests delivered at home collect a sample from the your blood tests.
                    </p>
                </div>

                {/* Feature Item 3 */}
                <div className="space-y-4 px-4">
                    <img src={frame2} alt="Editing freedom" className="mx-auto h-20 w-20" />
                    <h4 className="font-semibold text-lg">Editing freedom</h4>
                    <p className="text-gray-600 text-sm">
                        Get your blood tests delivered at home collect a sample from the your blood tests.
                    </p>
                </div>

                {/* Feature item 4 */}
                <div className="space-y-4 px-4">
                    <img src={frame3} alt="Best Award history" className="mx-auto h-20 w-20" />
                    <h4 className="font-semibold text-lg">Best Award history</h4>
                    <p className="text-gray-600 text-sm">
                        Get your blood tests delivered at home collect a sample from the your blood tests.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QualityFeature;
