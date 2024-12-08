import Image from 'next/image';
import React from 'react';
import Category from './Category';
import Link from 'next/link';
import Footer from './Footer';

const Hero = () => {
    return (
        <div className="">
            {/* Top Section */}
            <div className="flex flex-col justify-center items-center py-4 px-4 text-center bg-secondary">
                <h1 className="text-xl md:text-2xl font-semibold mb-3">Hello Nike App</h1>
                <div className='flex flex-row space-x-2'>
                <p className="text-sm md:text-base mb-1">Download the app to access everything Nike.</p>
                <Link href='/product' className="underline text-sm md:text-base">Get Your Great</Link>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center mb-9 mx-auto w-full max-w-screen-lg bg-main">
                <Image
                    src="/main.png"
                    alt="shoes image"
                    width={1344}
                    height={700}
                    className="rounded-md object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center items-center mt-9 px-4 text-center">
                <h2 className="text-lg font-bold">First Look</h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-6">NIKE AIR MAX PULSE</h1>
                <p className="text-sm md:text-base">
                    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                </p>
                <p className="text-sm md:text-base mb-6">
                    - designed to push you past your limits and help you go to the max.
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row justify-center mb-11 items-center space-y-4 md:space-y-0 md:space-x-4">
                    <button className="rounded-full bg-black text-white px-6 py-2 w-full md:w-auto">
                        Notify Me
                    </button>
                    <button className="rounded-full bg-black text-white px-6 py-2 w-full md:w-auto">
                        Shop Air Max
                    </button>
                </div>
            </div>
            <Category/>
            <Footer/>
        </div>
    );
};

export default Hero;
