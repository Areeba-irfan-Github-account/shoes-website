import Image from 'next/image'
import React from 'react'

const Miss = () => {
  return (
    <div className='flex flex-col mt-9 mb-11 sm:px-8 container max-auto max-w-7xl'>
        <h1 className='text-5xl flex justify-center items-center sm:justify-start sm:items-start sm:text-4xl mb-2 font-bold'>Do Not Miss</h1>
        
            <div className='mt-9 mb-11 mr-6 ml-6'>
                <Image
                src='/miss.png'
                alt='image'
                width={1344}
                height={700}
                className='hidden lg:block'/>
        </div>
        <div className='flex flex-col justify-center items-center mt-6 mb-6'>
            <h1 className='mb-5 text-5xl font-bold'>FLIGHT ESSENTIALS</h1>
            <p className='mb-5 sm:m-2 m-6'>Your built-to-last, all week wears-but with style only Jordan Brand can deliver</p>
            <button className='bg-black px-9 py-2 sm:px-6 sm:py-2 rounded-l-full rounded-r-full text-white mt-4 '>Shop</button>
        </div>
    </div>
  )
}

export default Miss
