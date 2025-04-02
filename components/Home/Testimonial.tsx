import { BG_BLUR, BG_BLUR_ } from '@/images';
import { IconStarFilled } from '@tabler/icons-react'
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';
import { AnimatedTestimonials } from '@/ui/animated-testimonial';

const Testimonial = () => {

    const testimonials = [
        {
            quote:
                "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen",
            designation: "Product Manager at TechFlow",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Michael Rodriguez",
            designation: "CTO at InnovateSphere",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Emily Watson",
            designation: "Operations Director at CloudScale",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "James Kim",
            designation: "Engineering Lead at DataPro",
            src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
            name: "Lisa Thompson",
            designation: "VP of Technology at FutureNet",
            src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    return (
        <div id='testimonial' className='pb-16 relative text-white bg-gradient-to-b from-background from-50% to-[#F0F4F8] to-100% mt-52 max-xl:mt-20'>

            <div className="absolute w-1/2 top-0 left-0 ">
                <Image
                    src={BG_BLUR}
                    width={100}
                    height={100}
                    className='w-full'
                    alt='blur'
                />
            </div>

            <motion.div
                initial={{
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
                    duration: 0.3,
                    ease: "easeInOut"
                }}

                className="relative z-1 flex flex-col items-center">
                <div className='w-fit flex gap-2 bg-amber-400 rounded-full px-6 py-2'>
                    <IconStarFilled />
                    <p className='font-bold'>4.5</p>
                </div>
                <p className='text-sm py-2'>11,000+ Reviews</p>
                <h1 className='pb-5 font-bold text-5xl max-[1026px]:text-3xl max-sm:text-sm'>Zort: The bet tracker everyone&apos;s buzzing about</h1>

                <AnimatedTestimonials testimonials={testimonials} />

            </motion.div>

            <div className="absolute w-1/2 bottom-0 right-0">
                <Image
                    src={BG_BLUR_}
                    width={100}
                    height={100}
                    className='w-full'
                    alt='blur'
                />
            </div>
        </div>
    )
}

export default Testimonial