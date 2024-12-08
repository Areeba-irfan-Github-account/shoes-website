import Image from 'next/image'
import React from 'react'

const Essential = () => {
    return (
        <div className='mt-9 mb-11 px-8'>
            <h1 className="font-bold text-2xl mb-6">The Essentials</h1>
            <div className="grid sm:grid-cols-3 gap-4">
                {/* Men's Section */}
                <div className="relative">
                    <Image
                        src="/mens.png"
                        alt="Men's Collection"
                        width={440}
                        height={540}
                        className="object-cover"
                    />
                    <div className="absolute bottom-4 left-1/4 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-l-full rounded-r-full text-center font-bold">
                        Men
                    </div>
                </div>

                {/* Women's Section */}
                <div className="relative">
                    <Image
                        src="/womens.png"
                        alt="Women's Collection"
                        width={440}
                        height={540}
                        className="object-cover"
                    />
                    <div className="absolute bottom-4 left-1/4 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-l-full rounded-r-full text-center font-bold">
                        Women
                    </div>
                </div>

                {/* Kids' Section */}
                <div className="relative">
                    <Image
                        src="/kids.png"
                        alt="Kids' Collection"
                        width={440}
                        height={540}
                        className="object-cover"
                    />
                    <div className="absolute bottom-4 left-1/4 transform flex justify-start -translate-x-1/2 bg-white text-black px-6 py-2 rounded-l-full rounded-r-full text-center font-bold">
                        Kids
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-20 mb-20 '>

                <div className='grid sm:grid-cols-4'>
                    <div className='ml-2  mr-2 '> 
                        <h1 className='font-bold mb-3'>Icons</h1>
                        <p className='mb-2'>Air Force 1</p>
                        <p className='mb-2'>Huarache</p>
                        <p className='mb-2'>Air Max 90</p>
                        <p className='mb-2'>Air Max 95</p>
                    </div>
                    <div className='ml-2 mr-2 '> 
                        <h1 className='font-bold mb-3'>Shoes</h1>
                        <p className='mb-2'>All Shoes</p>
                        <p className='mb-2'>Custon Shoes</p>
                        <p className='mb-2'>Jordan Shoes</p>
                        <p className='mb-2'>RunningShoes</p>
                    </div>
                    <div className='ml-2 mr-2 '> 
                        <h1 className='font-bold mb-3'>Clothing</h1>
                        <p className='mb-2'>All clothing</p>
                        <p className='mb-2'>Modest Wear</p>
                        <p className='mb-2'>Hoodies & Pullovers</p>
                        <p className='mb-2'>Shirts & Tops</p>
                    </div>
                    <div className='ml-2 mr-2 '> 
                        <h1 className='font-bold mb-3'>Kids</h1>
                        <p className='mb-2'>Infact & Toddler Shoes</p>
                        <p className='mb-2'>Kids Shoes</p>
                        <p className='mb-2'>Kids Jardon Shoes</p>
                        <p className='mb-2'>Kid Basketball Series</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Essential