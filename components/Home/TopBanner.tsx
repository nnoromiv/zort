"use client"

import React from 'react'
import { motion } from 'motion/react'

const TopBanner = () => {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        animate={{
            opacity: 1,
        }}
        transition={{
            duration: 0.3,
        }}
        className='relative bg-gradient-to-r from-black from-0% to-white to-90% h-[35px] flex justify-center items-center'
        id='home'
    >
        <p className='font-bold text-white text-sm font-century max-sm:text-[9px] max-[376px]:!text-[7px]'>Coming from Bet365? Import your history and get 50% OFF with ZORT50
            <span className='font-light underline text-sm max-[769px]:text-black max-sm:text-[9px]'> Learn more &rarr;</span>
        </p>
    </motion.div>
  )
}

export default TopBanner