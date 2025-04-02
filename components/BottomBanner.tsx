import React from 'react'
import IButton from './IButton'
import Link from 'next/link'

const BottomBanner = () => {
  return (
    <div className='px-3 flex flex-col justify-center items-center bg-light-white gap-2 py-36 max-[1026px]:py-10'>
        <h1 className='font-bold text-black text-6xl max-xl:text-4xl max-[769px]:!text-2xl text-center'>The modern way to track and manage your bets.</h1>
        <p className='text-black-one w-1/2 text-center text-2xl py-5 max-[1026px]:w-full max-[769px]:text-sm'>Zort-App is the all-in-one platform that brings together everything you need to optimize your bet tracking. Join thousands of users using Zort-App to make smarter betting decisions.</p>
        <div className='flex gap-5 items-center justify-center max-[376px]:flex-col'>
            <IButton buttonText='Sign Up Now' className="w-60 max-[769px]:w-40 max-[376px]:!w-full transform rounded-lg bg-white px-6 py-2 font-medium !text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:!text-white border-1 border-white" />

            <Link href={'#features'} className='w-full'>
              <IButton buttonText='Browse Features' className="w-60 max-[769px]:w-40 max-[376px]:!w-full transform rounded-lg bg-black px-6 py-2 font-medium !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-black border-1 hover:border-black" />
            </Link>
        </div>
    </div>
  )
}

export default BottomBanner