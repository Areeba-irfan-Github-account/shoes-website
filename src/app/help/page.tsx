import React from 'react'
import Starter from '../components/Starter'
import Navbar from '../components/Navbar'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'
import { IoThumbsUpSharp } from "react-icons/io5";
import { IoIosThumbsDown } from "react-icons/io";
import { ImMobile } from "react-icons/im";
import { RiMessage2Fill } from "react-icons/ri";
import { AiTwotoneMail } from "react-icons/ai";
import Image from 'next/image'
import Footer from '../components/Footer'

const page = () => {
    return (
        <div>
            <Starter />
            <Navbar />
            <div className='flex flex-col justify-center items-center mt-7'>
                <h1 className='text-2xl font-semibold mt-6 mb-3 '>GET HELP</h1>

                <div className='border-2 morder-gray-400 px-8 py-1 rounded'>
                    <div className="flex items-center  rounded-md px-1 py-1 w-40  md:w-60 focus-within:ring-2 focus-within:ring-blue-400">

                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 focus:outline-none "
                        />
                        <CiSearch className=" mr-2" />
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-12 gap-6 ml-3'>
                <div className='col-span-9'>
                    <div className='flex flex-col mt-7 '>
                        <h1 className='text-2xl font-bold mb-3'>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
                        <p className='ml-3 mb-2'>Visa , Mastercard , Diner Club , Discover , American Express, Visa Electron Masestro</p>
                        <p className='ml-3 mb-2'>If you enter your PAN information at checkout , you will bw able to pay your order with PayTM or local credit or debit card. </p>
                        <button className='flex items-start mt-2 ml-3 mb-2'>Apple Pay</button>
                        <div className='mt-2 mb-2'><span className='underline font-bold'>Nike Member</span> can store multiple debit or credit cards in their profilefor fster  checkout . If you are not a already a Member , <span className='underline font-bold'>join us </span>today</div>
                        <div className='flex flex-row mt-4 mb-5 items-start space-x-6'>
                            <Link href='/joinus' className='bg-black text-white rounded-r-full rounded-l-full px-5 py-3 '>JOIN US</Link>
                            <Link href='/' className='bg-black text-white rounded-r-full rounded-l-full px-5 py-3'>SHOPE NIKE</Link>
                        </div>
                        <div className='flex flex-col mt-3 mb-3'>
                            <h1 className='text-2xl mb-4'>FAQS</h1>
                            <p className='font-bold mt-3'>Does my card need international purchases enabled?</p>
                            <p className='mt-2 mb-2'>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                            <p>Please note, some banks may charge a small transaction fee for international orders.</p>
                            <p className='font-bold mt-3'>Can I pay for my order with multiple methods?</p>
                            <p>No, payment for Nike orders cant be split between multiple payment methods.</p>
                            <p className='font-bold mt-3'>What payment method is accepted for SNKRS orders?</p>
                            <p>You can use any accepted credit card to pay for your SNKRS order.</p>
                            <p className='font-bold mt-3'>Why dont I see Apple Pay as an option?</p>
                            <p>To see Apple Pay as an option in the Nike App or on Nike.com, youll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, youll need to use Safari to use Apple Pay on Nike.com.</p>

                        </div>
                        <div className='mt-3 mb-4 text-black'>
                            <p className='text-bold mt-4 mb-2'>Was this answer is helpfull</p>
                            <div className='flex flex-row'>
                                <IoThumbsUpSharp size={24} />
                                <IoIosThumbsDown size={24} />
                            </div>
                            <p>RELATED</p>
                        </div>
                        <div className='mt-2 mr-11 mb-32'>
                            <p className='font-bold underline'> WHAT ARE NIKES DELIVERY OPTIONS?</p>
                            <p className='font-bold underline'> HOW DO I GET FREE DELIVERY ON NIKE ORDERS? </p>

                        </div>
                    </div>
                </div>
                <div className='sm:col-span-3 text-black hidden lg:block'>

                    <h1 className='flex justify-center items-center text-3xl font-semibold mb-6'>CONTACT US</h1>

                    <div className='grid grid-rows-4'>
                        <div className='mb-6 mt-3 flex flex-col justify-center items-center'>
                            <ImMobile size={24} />
                            <h1 className='text-bold'>000 800 919 0566</h1>
                            <h1>Products & Orders : 24 hours a day.</h1>
                            <h1>7 days a week</h1>
                            <h1>Comapny Info & Enquiries : 07:30-</h1>
                            <h1>16:30 , Monday - Friday</h1>
                        </div>
                        <div className='mb-6 mt-3 flex flex-col justify-center items-center'>
                            <RiMessage2Fill size={24} />
                            <h1 className='text-bold'>24 hourse a day</h1>

                            <h1>7 days a week</h1>
                        </div>
                        <div className='mb-6 mt-3 flex flex-col justify-center items-center'>
                            <AiTwotoneMail size={24} />
                            <h1 className='text-bold'>We will replay within</h1>
                            <h1>five bussiness days</h1>
                        </div>
                        <div className='mb-6 mt-3 flex flex-col justify-center items-center'>
                            <Image
                                src='/locat.png'
                                alt='location'
                                width={90}
                                height={40} />
                            <h1 className='text-bold'>STORE LOCATOR</h1>
                            <h1>Find Nike retail stores near you</h1>
                        </div>


                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default page