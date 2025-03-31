"use client"

import React from 'react'
import { motion } from "motion/react"

const HeroBanner = () => {
    return (
        <motion.main
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.3,
                delay: 0.1
            }}
            className='w-full flex justify-center items-center pt-5 cursor-pointer'
        >
            <section className='bg-light-grey text-white flex w-fit rounded-full px-6 py-2 max-[376px]:rounded-none max-[376px]:w-full'>
                <div className='max-sm:hidden font-bold bg-gradient-to-r from-[#7369FF] from-100% to-[#B364F0] to-100% rounded-full px-3 text-center mr-2'>
                    <h2 className='max-[1026px]:text-sm '>NEW</h2>
                </div>
                <p className='max-[1026px]:text-sm max-sm:text-[9px]'>Sync your Apple Card, Apple Cash, and Savings from Apple Card Accounts &rarr;</p>
            </section>
        </motion.main>
    )
}

export default HeroBanner