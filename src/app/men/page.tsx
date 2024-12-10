import React from 'react';
import Starter from '../components/Starter';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Link from 'next/link';
import Footer from '../components/Footer';

const Page = () => {
    return (
        <div>
            <Starter />
            <Navbar />
            <div className='grid sm:grid-cols-12 gap-3 sm:px-8 p-3 sm:p-2'>
                {/* Main Content Column */}
                <div className='sm:col-span-8 col-span-12'>
                    <div className='sm:ml-20 mt-9'>
                        <div className='bg-secondary p-2 w-full flex flex-col'>
                            <h1 className='text-xl font-semibold'>Free Delivery</h1>
                            <h1>Applies to orders of 14 000.00 or more
                                <span className='mr-8 underline font-bold'>
                                    View details
                                </span>
                            </h1>
                        </div>
                        <h1 className='text-2xl font-semibold mt-5 mb-5'>Bag</h1>
                        {/* Product 1 */}
                        <div className='flex flex-row border-b-2 border-gray-300 mb-7'>
                            <Image
                                src='/shirt.png'
                                alt='shirt'
                                width={150}
                                height={150}
                                className='mb-9' />
                            <div className='flex flex-col justify-start ml-11'>
                                <div className='flex flex-row space-x-5 justify-between'>
                                    <h1 className='mb-2 font-semibold'>Nike Dri-FIT ADV TeachKnit Ultra</h1>
                                    <h1>MRP: 3895.00</h1>
                                </div>
                                <p className='mb-2'>Mens Short-Sleeve Running Top</p>
                                <p className='mb-2'>Ashen Slate / Cobalt Bliss</p>
                                <div className='flex flex-row justify-between mt-2'>
                                    <p>Size: L</p>
                                    <p>Quantity 1</p>
                                </div>
                                <div className='flex flex-row mt-4 font-bold mb-9'>
                                    <CiHeart size={24} className='font-bold text-black' />
                                    <RiDeleteBin6Line size={24} />
                                </div>
                            </div>
                        </div>
                        {/* Product 2 */}
                        <div className='flex flex-row border-b-2 border-gray-300 mt-7'>
                            <Image
                                src='/sh.png'
                                alt='shirt'
                                width={150}
                                height={150}
                                className='mb-9' />
                            <div className='flex flex-col justify-start ml-11'>
                                <div className='flex flex-row space-x-5 justify-between'>
                                    <h1 className='mb-2 font-semibold'>Nike Dri-FIT ADV TeachKnit Ultra</h1>
                                    <h1>MRP: 3895.00</h1>
                                </div>
                                <p className='mb-2'>Mens Short-Sleeve Running Top</p>
                                <p className='mb-2'>Ashen Slate / Cobalt Bliss</p>
                                <div className='flex flex-row justify-between mt-2'>
                                    <p>Size: L</p>
                                    <p>Quantity 1</p>
                                </div>
                                <div className='flex flex-row mt-4 font-bold mb-9'>
                                    <CiHeart size={24} className='font-bold text-black' />
                                    <RiDeleteBin6Line size={24} />
                                </div>
                            </div>
                        </div>
                        <div className='mt-9 mb-9'>
                            <h1 className='text-3xl font-semibold'> Favourites</h1>
                            <p>There are no items saved to your favourites</p>
                        </div>
                    </div>
                </div>

                {/* Summary Column */}
                <div className='sm:col-span-4 sm:mr-4 col-span-12 sm:mt-0 mt-9 p-8 sm:p-2'>
                    <h1 className='text-2xl mt-9 font-semibold mb-5'>Summary</h1>
                    <div className='border-b-2 border-gray-300 mb-5'>
                        <div className='flex flex-row justify-between'>
                            <h1>Subtotal</h1>
                            <h1>20 890.00</h1>
                        </div>
                        <div className='flex flex-row justify-between mt-3 mb-6'>
                            <h1>Estimated Delivery & Handling</h1>
                            <h1>Free</h1>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between border-b-2 border-gray-300 mb-7'>
                        <h1>Total</h1>
                        <h1 className='font-bold mb-4'>20 890.00</h1>
                    </div>
                    <div className='flex justify-center items-center w-full mb-11'>
                        <Link href="/checkout" className='bg-black px-24 py-3 rounded-l-full rounded-r-full text-white'>Member Checkout</Link>
                    </div>
                </div>
            </div>

            {/* Recommended Products Section */}
            <div className='hidden lg:block '>

                <h1 className='md:font-semibold mb-6 text-2xl mt-8'>You Might Also Like</h1>
                <div className='mb-11 flex flex-col justify-start'>
                    <Image
                        src='/shoes.png'
                        alt='shoes'
                        width={431}
                        height={431} />
                    <h1 className='text-xl font-bold '>Air Jordan 1 Mid SE Craft</h1>
                    <p className='text-gray-400'>Mens Shoes</p>
                    <p className='text-bold'>MRP : 12 295.00</p>
                </div>

            </div>
            <Footer />
        </div>

    );
};

export default Page;
