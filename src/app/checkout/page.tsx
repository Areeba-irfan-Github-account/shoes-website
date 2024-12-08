import React from 'react'
import { FaBox } from "react-icons/fa";
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';
import { AiFillCopyrightCircle } from 'react-icons/ai';
import Footer from '../components/Footer';

const page = () => {
  return (
    <div >
      <Navbar />
      <div className='grid sm:grid-cols-2  gap-16 mr-11 ml-11'>
        <div className='flex flex-col'>
          <h1 className='font-bold mt-11 text-xl  mb-3'>How would you like to get your order?</h1>
          <p className='text-gray-400 mb-3 mt-2'>Customs regulation for India require a copy of the recipients KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.<span className='underline '> Learn More</span></p>
          <div className=' w-full border-2 border-black flex flex-row rounded-md mt-3 space-x-6 py-3 p-6 pl-3'> <FaBox size={17} />  <h1>Deliver it</h1></div>
          <div className='text-black mt-6 mb-6 flex flex-col'>
            <h1 className='text-3xl mb-6 font-semibold'>Enter your name and address</h1>
            <input
              type="text"
              placeholder="First Name"
              className="border-2 border-gray-300 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border-2 border-gray-300 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Address Line 1"
              className="border-2 border-gray-300 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="border-2 border-gray-300 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              placeholder="Address Line 3"
              className="border-2 border-gray-300 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className='flex flex-row space-x-4 mt-3 mb-3'>
              <input className='border-2 border-gray-400 px-4 py-3 rounded' placeholder='Postal Code' />
              <input className='border-2 border-gray-400 px-4 py-3 rounded' placeholder='Locaiity' />
            </div>
            <div className='flex flex-row mt-3 mb-3 space-x-4'>
              <input className='border-2 border-gray-400 px-4 py-3 rounded' placeholder='State/Territory' />
              <input className='border-2 border-gray-400 px-4 py-3 rounded' placeholder='India' />
            </div>
            <div className='mt-4 mb-6 '>
              <h1 className='text-2xl font-bold mb-3'>Whats your contact information</h1>
              <div>
                <input
                  type="Email"
                  placeholder="Email"
                  className="border-2 w-full border-gray-400 px-4 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-black"
                />
                <p className='text-sm mb-4 text-gray-400'>A confirmation email will be sent after checkout</p>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="border-2 w-full border-gray-400 px-4 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-black"
                />
                <p className='text-sm mb-4 text-gray-400'>A carrier might contact you to confirm delivery</p>
              </div>
            </div>
            <div>
              <label className="flex flex-row space-x-2 text-gray-400">
                <input type="checkbox" className="form-checkbox " />
                <span >Save this address to my profile</span>
              </label>
              <label className="flex flex-row space-x-2 text-gray-400">
                <input type="checkbox" className="form-checkbox " />
                <span >Mke this my preferred address</span>
              </label>
            </div>
            <div className='mt-3 mb-6 border-b-2 border-gray-300 pt-3 pb-4'>
              <h1 className='text-2xl font-semibold mb-4 '>Whats you PAN?</h1>
              <input
                type="text"
                placeholder="PAN"
                className="border-2 w-full border-gray-400 px-4 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-black"
              />
              <p className='text-sm mb-5 text-gray-400 '>Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
              <label className="flex flex-row space-x-2 mb-7 text-gray-400">
                <input type="checkbox" className="form-checkbox " />
                <span >Save PAN details to Nike Profile</span>
              </label>
              <label className="flex flex-row space-x-2 mb-6 text-gray-400">
                <input type="checkbox" className="form-checkbox mb-11" />
                <span >I have read and consent to eShopWorld processing my information in accordance with the <span className='underline'>Privacy Statement</span> and <span className='underline'>Cookie Policy</span>. eShopWorld is a trusted Nike partner.</span>
              </label>
              <button className='w-full rounded-l-full rounded-r-full bg-secondary py-4 mt-6 mb-6'>Continue</button>
            </div>
            <div className=' mb-11'>
              <h1 className='font-bold  border-b-2 border-gray-300 pb-4'>Delivery</h1>
              <h1 className='text-gray-600 pt-2 border-b-2 border-gray-300 pb-4'>Shipping</h1>
              <h1 className='text-gray-600 pt-2 border-b-2 border-gray-300 pb-4'>Billing</h1>
              <h1 className='text-gray-600 pt-2  pb-4'>Payment</h1>
            </div>
            <div>
            </div>
          </div>
        </div>

        <div>
          <div className='col-span-4 mr-4'>
            <h1 className='text-2xl mt-9 font-semibold mb-5'>Order Summary</h1>
            <div className='border-b-2 border-gray-300 mb-5'>
              <div className='flex flex-row justify-between'>
                <h1 className='text-gray-400'>Subtotal</h1>
                <h1 className='text-gray-400'>20 890.00</h1>
              </div>
              <div className='flex text-gray-400 flex-row justify-between mt-3 mb-6 '>
                <h1 >Estimated Delivery & Handling</h1>
                <h1>Free</h1>
              </div>
            </div>
            <div className='flex flex-row justify-between border-b-2 border-gray-300 mb-3'>
              <h1>Total</h1>
              <h1 className='font-bold mb-4 '>20 890.00</h1>
            </div>
            <div>
              <p className='text-sm'>(The total reflects the price of your order, including all duties and taxes)</p>
            </div>
            <div className='mt-4 mb-4'>
              <h1 className='text-2xl font-bold mb-11'>Arrives Mon , 27 Mar - Wed , 12 Apr</h1>

              <div className='flex flex-row border-b-2 border-gray-300 mb-7 mt-11'>
                <Image
                  src='/shirt.png'
                  alt='shirt'
                  width={150}
                  height={150}
                  className='mb-9' />
                <div className='flex flex-col justify-start ml-11 text-gray-500'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='mb-2 text-black '>Nike Dri-FIT ADV TeachKnit Ultra</h1>
                  </div>
                  <p className='mb-2'>Mens Short-Sleeve Running Top</p>
                  <p className='mb-2'>Ashen Slate / Cobalt Bliss</p>
                  <div className='flex flex-row justify-between mt-2'>
                    <p>Size: L</p>
                    <p>Quantity 1</p>
                  </div>
                  <h1>MRP: 3895.00</h1>
                  <div className='flex flex-row mt-4 font-bold mb-9'>
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
                  <div className='flex flex-row justify-between'>
                    <h1 className='mb-2 '>Nike Dri-FIT ADV TeachKnit Ultra</h1>
                  </div>
                  <p className='mb-2 text-gray-400'>Mens Short-Sleeve Running Top</p>
                  <p className='mb-2 text-gray-400'>Ashen Slate / Cobalt Bliss</p>
                  <div className='flex flex-row justify-between mt-2'>
                    <p className='text-gray-400'>Size: L</p>
                    <p className='text-gray-400'>Quantity 1</p>
                  </div>
                  <h1>MRP: 3895.00</h1>
                  <div className='flex flex-row mt-4 font-bold mb-9'>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='flex flex-row justify-between bg-black p-4 pb-2'>
        <div className='flex flex-row space-x-2 ml-1'>
          <div className='flex flex-row space-x-1 text-white'>
            <FaLocationDot size={19} />
            <h1 className='text-xl'>India</h1>
          </div>
          <div className='flex flex-row mt-1 text-gray-400 space-x-1'>
            <AiFillCopyrightCircle size={16} />
            <p className='text-xs '>2023 Nike , Inc . All Rights Reserved</p>
          </div>
          <div className='flex flex-row justify-between mt-1 text-gray-400 space-x-2 pr-2'>
            <p className='text-xs'>Terms of Sale</p>
            <p className='text-xs'>Terms of Use</p>
            <p className='text-xs'>Privacy Policy</p>
          </div>
        </div>
        <div className='flex flex-row justify-between text-gray-400 space-x-2 pr-3'>
          <Image
            src='/pc1.png'
            alt='guides'
            width={45}
            height={27}
          />
          <Image
            src='/pic2.png'
            alt='guides'
            width={45}
            height={27}
          />
          <Image
            src='/pic3.png'
            alt='guides'
            width={45}
            height={27}
          />
          <Image
            src='/pic4.png'
            alt='guides'
            width={45}
            height={27}
          />
          <Image
            src='/pic5.png'
            alt='guides'
            width={45}
            height={27}
          />
          <Image
            src='/pic6.png'
            alt='guides'
            width={45}
            height={27}
          />

          <Image
            src='/pic7.png'
            alt='guides'
            width={45}
            height={27}
          />
          <Image
            src='/pic8.png'
            alt='guides'
            width={45}
            height={27}
          />
          <Image
            src='/pic9.png'
            alt='guides'
            width={45}
            height={27}
          />
          <Image
            src='/pic10.png'
            alt='guides'
            width={45}
            height={27}
          />
          <Image
            src='/pic11.png'
            alt='guides'
            width={45}
            height={27}
          />




        </div>
      </div>

    </div >


  )
}

export default page