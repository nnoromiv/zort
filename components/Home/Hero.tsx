"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react";
import IButton from '../IButton';
import { PHONES, WAVY } from '@/images';
import Information from '../Information';
import { FlipWords } from '@/ui/flip-words';


export function Hero() {

    const words = ["modern", "latest", "recent", "better"];

    return (
        <div className="relative mx-auto flex flex-col items-center justify-center">
            <div className="py-4">
                <div className="relative">
                    <h1 className="relative z-10 text-center text-2xl font-bold text-white md:text-4xl max-sm:text-3xl max-[376px]:!text-2xl">
                    The <FlipWords words={words} /> 
                        {`way to track your bet`
                            .split(" ")
                            .map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="mr-2 inline-block"
                                >
                                    {word}
                                </motion.span>
                            ))}
                    </h1>
                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.8,
                        }}
                        className="relative z-10 mx-auto max-w-3xl p-4 text-center text-lg font-normal text-white"
                    >
                        Gain clarity, confidence, and control over your bets. Track your wagers, analyze
                        trends with AI, and manage your bet slips—all in one place. Stay ahead of the game
                        and make smarter betting decisions with Zort
                    </motion.p>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 1,
                        }}
                        className="sticky bottom-0 z-10 mt-8 flex flex-wrap items-center justify-center gap-4 max-sm:mt-3"
                    >
                        <IButton buttonText='Get Started' className="w-60 max-sm:w-40 text-sm transform rounded-lg border border-primary bg-primary px-6 py-2 font-bold transition-all duration-300 hover:bg-white hover:border-white hover:!text-primary" />
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 1.2,
                        }}
                        className='flex justify-center gap-10 max-sm:hidden'>
                        <Information title='4.5 Stars' icon description='11,000+ Reviews' />
                        <Information title='Wall Street Journal' description='2025 Winner' headline='Best Tracking App' />
                        <Information title='Product Hunt' description='2024 Finalist' headline='Best Sports App' />
                    </motion.div>

                </div>

                <div className='relative h-full md:hidden'>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 1.6,
                        }}
                        className="mx-5 my-2"
                    >
                        <Image
                            src={PHONES}
                            alt="Landing page preview"
                            className="w-full object-contain"
                            width={500}
                            height={500}
                        />
                    </motion.div>
                </div>

                <div className='relative h-full max-md:hidden'>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 1.6,
                        }}
                        className="absolute z-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        <Image
                            src={PHONES}
                            alt="Landing page preview"
                            className="w-full"
                            height={500}
                            width={500}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 1.4,
                        }}
                        className="relative z-0"
                    >
                        <Image
                            src={WAVY}
                            alt="Landing page preview"
                            className=""
                            height={3000}
                            width={3000}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero