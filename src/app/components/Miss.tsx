import Image from 'next/image'
import React from 'react'

const Miss = () => {
  return (
    <div className='flex flex-col mt-9 mb-11 px-8'>
        <h1 className='text-2xl mb-2 font-bold'>Do Not Miss</h1>
        
            <div className='mt-9 mb-11 mr-6 ml-6'>
                <Image
                src='/miss.png'
                alt='imaeg'
                width={1344}
                height={700}/>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='mb-5 text-5xl font-bold'>FLIGHT ESSENTIALS</h1>
            <p className='mb-5'>Your built-to-last, all week wears-but with style only Jordan Brand can deliver</p>
            <button className='bg-black px-4 py-2 rounded-l-full rounded-r-full text-white '>Shop</button>
        </div>
    </div>
  )
}

export default Miss