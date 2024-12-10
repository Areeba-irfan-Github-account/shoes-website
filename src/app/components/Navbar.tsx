'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiShoppingBag } from "react-icons/bi";
import { CiSearch, } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";



const Navbar = () => {
    const [isHamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => setHamburgerOpen(!isHamburgerOpen);

    return (
        <div className="bg-main max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 py-0 shadow-lg">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link href='/'>
                    <Image
                        src="/nike.png"
                        alt="Logo"
                        width={80}
                        height={40}
                    />
                </Link>
            </div>
            <div className='block lg:hidden'>

                <div className="absolute top-12 right-2">
                    <button onClick={toggleHamburger} className="text-2xl">
                        {isHamburgerOpen ? "X" : "☰"}
                    </button>
                </div>
                {/* Mobile Menu */}
                {isHamburgerOpen && (
                    <div className="absolute  right-0 mt-11 w-48 text-white bg-black/60 backdrop-blur-md rounded-md shadow-lg m-3 p-4">
                        <div className="flex flex-col space-y-2">
                            <Link href="/" className="hover:text-gray-900 hidden lg:block">
                                News & Featured
                            </Link>
                            <Link href="/men" className="hover:text-gray-900">
                                Men
                            </Link>
                            <Link href="/products" className="hover:text-gray-900">
                                Women
                            </Link>
                            <Link href="/products" className="hover:text-gray-900">
                                Kids
                            </Link>
                            <Link href="/products" className="hover:text-gray-900">
                                Sale
                            </Link>
                            <Link href="/" className="hover:text-gray-900">
                                SNKRS
                            </Link>
                            <Link href="/products" className=" hover:text-gray-600 text-white text-sm md:text-base">
                                Find a Store 
                            </Link>
                            <Link href="/help" className="hover:text-gray-600 text-sm md:text-base">
                                Help 
                            </Link>
                            <Link href="/joinus" className="hover:text-gray-600 text-sm md:text-base">
                                Join Us 
                            </Link>
                            <Link href="/signin" className="hover:text-gray-600 text-sm md:text-base">
                                Sign In
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            {/* Navigation Links */}
            <div className='lg:block hidden'>
                <div className='flex flex-row justify-between space-x-32 items-center'>

                    <div className="flex-1 flex justify-center md:ml-20 space-x-6 text-sm md:text-base font-medium text-black">
                        <Link href="/" className="hover:text-gray-900 hidden lg:block">
                            News & Featured
                        </Link>
                        <Link href="/men" className="hover:text-gray-900">
                            Men
                        </Link>
                        <Link href="/products" className="hover:text-gray-900">
                            Women
                        </Link>
                        <Link href="/products" className="hover:text-gray-900">
                            Kids
                        </Link>
                        <Link href="/products" className="hover:text-gray-900">
                            Sale
                        </Link>
                        <Link href="/" className="hover:text-gray-900">
                            SNKRS
                        </Link>
                    </div>

                    {/* Search, Heart Icon, and Cart Icon */}
                    <div className="flex items-center space-x-4">
                        {/* Search Input */}
                        <div className="flex items-center bg-secondary rounded-full pl-4 py-3 focus-within:ring-2 focus-within:ring-blue-400">
                            {/* Search Icon */}
                            <CiSearch className="mr-2 text-black text-xl" /> {/* Ensure the icon is visible with text-xl */}
                            <input
                                type="text"
                                placeholder="Search"
                                className="flex-1 text-sm focus:outline-none bg-transparent rounded-full placeholder-gray-500"
                            />
                        </div>

                        {/* Heart Icon */}
                        <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                            <FaRegHeart size={20} />
                        </button>

                        {/* Cart Icon */}
                        <Link href='/checkout' className="text-gray-700 hover:text-gray-900 focus:outline-none" >
                            <BiShoppingBag size={20} />
                        </Link>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Navbar;
