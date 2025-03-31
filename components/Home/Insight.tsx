"use client"

import { BANNER } from '@/images'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Insight = () => {

  return (
    <motion.div
        initial = {{
            opacity: 0,
            y: 50
        }}

        whileInView={{
            opacity: 1,
            y: 0
        }}

        viewport={{
            once: true,
            amount: 0.5
        }}

        transition={{
            duration: 0.6,
            ease: "easeInOut"
        }}
        id="features"
        
        className='text-white text-center py-6'
    >
        <Image 
            src={BANNER}
            alt='banner'
            className='w-full object-contain'
            width={500}
            height={500}
        />

        <p className='font-bold font-century'>WHAT IS ZORT?</p>

        <h1 className='px-2 py-7 font-bold text-6xl max-[1026px]:text-5xl max-[769px]:text-2xl max-sm:text-xl max-[376px]:!text-lg'>
            The ultimate all-in-one platform for bet <br/>
            tracking and AI-powered insights</h1>

        <h2 className='px-2 text-4xl max-xl:text-3xl max-[1026px]:!text-xl max-[769px]:!text-sm max-sm:!text-[9px]'>Zort brings everything you need to track and analyze your bets effortlessly.
            Collaborate with friends, access AI-driven insights, and stay in control—available on
            web, iOS, and Android.</h2>
    </motion.div>
  )
}

export default Insight