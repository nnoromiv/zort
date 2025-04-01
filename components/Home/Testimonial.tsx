import { BG_BLUR, BG_BLUR_ } from '@/images';
import { BentoGrid, BentoGridItem } from '@/ui/bento-grid'
import { IconClipboardCopy, IconFileBroken, IconSignature, IconStarFilled, IconTableColumn } from '@tabler/icons-react'
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';

const Testimonial = () => {
    const Skeleton = () => (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent bg-neutral-100"></div>
    );

    const items = [
        {
            title: "Wall Street Journal",
            description: "Zort is the best bet-tracking app for 2024. Perfect for anyone looking to optimize their betting strategy and make smarter decisions—especially for group betting or partners",
            header: <Skeleton />,
            className: "md:col-span-2 ",
            icon: <IconClipboardCopy
                className="h-4 w-4 text-white"
            />,
        },
        {
            title: "ZD NET",
            description: "I explored Zort-App, BetMinds, BetTracker, and other top competitors. My top pick? Zort-App. It’s more than just a bet tracker—it’s the all-in-one solution for managing and analyzing your bets, giving you everything you need to make smarter decisions.",
            header: <Skeleton />,
            className: "md:col-span-1 ",
            icon: <IconFileBroken className="h-4 w-4 text-white" />,
        },
        {
            title: "Business Insider",
            description: "Zort-App is quickly becoming one of the most talked-about bet-tracking alternatives, especially as other platforms fall short. It’s the perfect tool for serious bettors looking for smarter insights and seamless tracking.",
            header: <Skeleton />,
            className: "md:col-span-1 ",
            icon: <IconSignature className="h-4 w-4 text-white" />
        },
        {
            title: "App Store",
            description: "Moved here from other bet trackers, and I wish I had switched years ago. Zort-App is everything they should have been. I'm far more satisfied with Zort-App than I ever was with others.",
            header: <Skeleton />,
            className: "md:col-span-2 ",
            icon: <IconTableColumn className="h-4 w-4 text-white " />,
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

                <BentoGrid className="w-full px-[50px] md:auto-rows-[20rem] max-sm:px-4">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            // header={item.header}
                            className={item.className}
                            icon={item.icon}
                        />
                    ))}
                </BentoGrid>
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