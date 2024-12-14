import Image from 'next/image'
import React from 'react'

const Feature = () => {
  return (
    <div className='flex flex-col justify-center items-center px-8 container mx-auto max-w-7xl'>
        <div className='flex flex-col mr-11 mb-11 ml-11'>
            <h1 className='text-5xl sm:text-4xl font-bold mb-4 mt-11 '>Feature</h1>
            <Image
            src='/Feature.png'
            alt='feature'
            width={1344}
            height={700}
            className='hidden lg:block'
            />
        </div>
        <div className='flex flex-col justify-center items-center mt-6 mb-11'>
            <h1 className='text-3xl mb-4 font-bold'>STEPS INTO WHAT FEELS GOOD</h1>
            <p className='mb-4'>Cause everyone should know the feelingof running in that perfect pair</p>
            <button className='bg-black text-white rounded-l-full rounded-r-full px-6 py-2'>Find Your Shoe</button>
        </div>
    </div>
  )
}

export default Feature
