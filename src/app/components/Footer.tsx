import React from 'react'
import { AiFillCopyrightCircle, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='bg-black px-8'>
            <div className='flex flex-row justify-between'>

                <div className='grid sm:grid-cols-3 pt-6'>
                    <div className='mt-4 mb-4 mr-4 ml-4 text-white'>
                        <h1 className='mb-3 text-bold'>FIND A STORE </h1>
                        <p className='mb-2 text-bold'>BECOME A MEMBER</p>
                        <p className='mb-2 text-bold'>SIGN UP FOR EMAIL</p>
                        <p className='mb-2 text-bold'>SEND US FEEDBACK</p>
                        <p className='mb-2 text-bold'>STUDENT DISCOUNT</p>
                    </div>
                    <div className='mt-4 mb-4 mr-4 ml-4 '>
                        <h1 className='mb-3 text-bold text-white'>GET HELP </h1>
                        <p className='mb-2 text-gray-400'>Order Status</p>
                        <p className='mb-2 text-gray-400'>Delivery</p>
                        <p className='mb-2 text-gray-400'>Returns</p>
                        <p className='mb-2 text-gray-400'>Payment Options</p>
                        <p className='mb-2 text-gray-400'>Contact Us On Nike.com Inquiries</p>
                        <p className='mb-2 text-gray-400'>Contact Us On All Other Inquiries</p>
                    </div>
                    <div className='mt-4 mb-4 mr-4 ml-4 '>
                        <h1 className='mb-3 text-bold text-white'>About Nike</h1>
                        <p className='mb-2 text-gray-400'>News</p>
                        <p className='mb-2 text-gray-400'>Careers</p>
                        <p className='mb-2 text-gray-400'>Investors</p>
                        <p className='mb-2 text-gray-400'>Sustaniability</p>
                    </div>
                </div>
                <div className='flex flex-row  pt-11 space-x-4 text-gray-600'>
                    <AiFillTwitterCircle size={34} />
                    <FaFacebook size={34} />
                    <TiSocialYoutubeCircular size={34} />
                    <TiSocialInstagram size={34} />
                </div>
            </div>
            <div className='hidden lg:block'>

                <div className='flex md:flex-row lg:flex-row flex-col  justify-between  pb-2'>
                    <div className='flex flex-row  space-x-3 ml-2'>
                        <div className='flex flex-row space-x-2 text-white'>
                            <FaLocationDot size={24} />
                            <h1>India</h1>
                        </div>
                        <div className='flex flex-row text-gray-600 space-x-1'>
                            <AiFillCopyrightCircle size={20} />
                            <p>2023 Nike , Inc . All Rights Reserved</p>
                        </div>
                    </div>
                    <div className='flex md:flex-row lg:flex-row flex-col justify-between text-gray-600 space-x-4 pr-3'>
                        <p>Guides</p>
                        <p>Terms of Sale</p>
                        <p>Terms of Use</p>
                        <p>Nike Privacy Policy</p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer